// Motor de wizard para los formularios de toma de medidas (docs/specs/007-formularios.md).
// Sin framework, mismo patrón vanilla-TS que src/components/RegionSelector.astro.
//
// Cada paso es una <section data-step="id"> dentro del <form>. El documento define el
// orden lineal de pasos y, en los puntos donde el form original ramifica (elegir modelo →
// distinta página de colores), qué radio decide el siguiente id de paso.
//
// ADR 0006 (supersede ADR 0004): "Enviar" comprime las fotos adjuntas, arma un resumen a
// partir de FormData y lo manda por POST a /api/enviar-formulario (función de Vercel que
// reenvía todo por email vía Resend). Si el backend todavía no está configurado (faltan env
// vars — ver .env.example) o si falla la red, no se bloquea al usuario: igual se le muestra
// el resumen en pantalla como respaldo, con un aviso de que lo guarde/reenvíe a mano.

import { comprimirImagenes, fileToBase64 } from "./formularios/comprimir-imagen";

export type StepId = string;

export interface BranchRule {
  /** name del <input> radio que decide la rama (ej. "modelo") */
  field: string;
  /** value del radio elegido → próximo StepId */
  targets: Record<string, StepId>;
}

export interface WizardConfig {
  formId: string;
  /** Nombre legible para el asunto del email (ej. "Formulario botas estándar"). */
  formLabel: string;
  /** Orden lineal de pasos hasta el primer punto de ramificación (inclusive). */
  steps: StepId[];
  /** Reglas de ramificación, indexadas por el StepId que contiene el campo que decide. */
  branches?: Record<StepId, BranchRule>;
  /**
   * Pasos "terminales" que no tienen más siguiente (van directo a confirmación) —
   * ej. Núcleo/Classic stock en el estándar, que no tienen página de color.
   */
  terminal?: StepId[];
}

function stepEl(form: HTMLFormElement, id: StepId): HTMLElement | null {
  return form.querySelector<HTMLElement>(`[data-step="${CSS.escape(id)}"]`);
}

export function initFormWizard(config: WizardConfig): void {
  const form = document.getElementById(config.formId) as HTMLFormElement | null;
  if (!form) return;

  const allSteps = Array.from(form.querySelectorAll<HTMLElement>("[data-step]"));
  const progressLabel = form.querySelector<HTMLElement>("[data-wizard-progress]");
  const backBtn = form.querySelector<HTMLButtonElement>("[data-wizard-back]");
  const nextBtn = form.querySelector<HTMLButtonElement>("[data-wizard-next]");
  const submitBtn = form.querySelector<HTMLButtonElement>("[data-wizard-submit]");
  const confirmPanel = form.querySelector<HTMLElement>("[data-wizard-confirm]");
  const confirmTitle = form.querySelector<HTMLElement>("[data-wizard-confirm-title]");
  const confirmMessage = form.querySelector<HTMLElement>("[data-wizard-confirm-message]");
  const summaryEl = form.querySelector<HTMLElement>("[data-wizard-summary]");

  // Historial de navegación real (para que "Atrás" respete las ramas tomadas).
  let path: StepId[] = [config.steps[0]];

  function resolveNext(currentId: StepId): StepId | null {
    if (config.terminal?.includes(currentId)) return null;

    const branch = config.branches?.[currentId];
    if (branch) {
      const checked = form!.querySelector<HTMLInputElement>(
        `input[name="${CSS.escape(branch.field)}"]:checked`,
      );
      const target = checked ? branch.targets[checked.value] : undefined;
      return target ?? null;
    }

    const linearIndex = config.steps.indexOf(currentId);
    if (linearIndex >= 0 && linearIndex < config.steps.length - 1) {
      return config.steps[linearIndex + 1];
    }
    return null;
  }

  function currentStepId(): StepId {
    return path[path.length - 1];
  }

  function updateProgress() {
    // "Paso X de Y" — Y es una estimación (largo del camino recorrido + si hay
    // siguiente conocido); no se puede saber el total real hasta elegir cada rama,
    // así que se recalcula en cada paso en vez de fijarlo de antemano.
    const hasNext = resolveNext(currentStepId()) !== null;
    const total = path.length + (hasNext ? 1 : 0);
    if (progressLabel) {
      progressLabel.textContent = `Paso ${path.length} de ${total}`;
    }
  }

  function render() {
    const current = currentStepId();
    for (const el of allSteps) {
      const isCurrent = el.dataset.step === current;
      el.hidden = !isCurrent;
    }
    if (backBtn) backBtn.hidden = path.length <= 1;

    const isLast = resolveNext(current) === null;
    if (nextBtn) nextBtn.hidden = isLast;
    if (submitBtn) submitBtn.hidden = !isLast;

    updateProgress();
    stepEl(form!, current)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function goNext() {
    const current = stepEl(form!, currentStepId());
    if (current) {
      const invalid = Array.from(current.querySelectorAll<HTMLInputElement>(":required")).find(
        (field) => !field.checkValidity(),
      );
      if (invalid) {
        invalid.reportValidity();
        return;
      }
    }
    const next = resolveNext(currentStepId());
    if (next) {
      path.push(next);
      render();
    }
  }

  function goBack() {
    if (path.length > 1) {
      path.pop();
      render();
    }
  }

  function buildSummary(data: FormData): string {
    const lines: string[] = [];
    for (const [key, value] of data.entries()) {
      if (typeof value === "string" && value.trim() !== "") {
        lines.push(`${key}: ${value}`);
      } else if (value instanceof File && value.name) {
        lines.push(`${key}: ${value.name}`);
      }
    }
    return lines.join("\n");
  }

  async function enviarPorEmail(data: FormData): Promise<{ ok: boolean; omitidos?: string[] }> {
    const campos: Record<string, string> = {};
    const archivosOriginales: File[] = [];
    for (const [key, value] of data.entries()) {
      if (typeof value === "string") {
        if (value.trim() !== "") campos[key] = value;
      } else if (value instanceof File && value.size > 0) {
        archivosOriginales.push(value);
      }
    }

    const comprimidos = await comprimirImagenes(archivosOriginales);
    const archivos = await Promise.all(
      comprimidos.map(async (file) => ({
        nombre: file.name,
        tipo: file.type,
        base64: await fileToBase64(file),
      })),
    );

    const res = await fetch("/api/enviar-formulario", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ formulario: config.formLabel, campos, archivos }),
    });

    if (res.status === 503) {
      // Backend todavía no configurado (sin RESEND_API_KEY / FORM_DESTINATION_EMAIL) —
      // no es un error del usuario, no se le muestra como tal.
      return { ok: false };
    }
    if (!res.ok) throw new Error(`enviar-formulario respondió ${res.status}`);

    const body = (await res.json().catch(() => ({}))) as { ok?: boolean; adjuntosOmitidos?: string[] };
    return { ok: body.ok === true, omitidos: body.adjuntosOmitidos };
  }

  backBtn?.addEventListener("click", goBack);
  nextBtn?.addEventListener("click", goNext);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form!);
    if (summaryEl) summaryEl.textContent = buildSummary(data);
    confirmPanel?.removeAttribute("hidden");
    for (const el of allSteps) el.hidden = true;
    if (backBtn) backBtn.hidden = true;
    if (nextBtn) nextBtn.hidden = true;
    if (submitBtn) submitBtn.hidden = true;
    if (progressLabel) progressLabel.textContent = "";
    if (confirmTitle) confirmTitle.textContent = "Enviando...";
    if (confirmMessage) confirmMessage.textContent = "Estamos comprimiendo y enviando tus datos y fotos.";
    confirmPanel?.scrollIntoView({ behavior: "smooth", block: "start" });

    enviarPorEmail(data)
      .then((result) => {
        if (!confirmTitle || !confirmMessage) return;
        if (result.ok) {
          confirmTitle.textContent = "¡Listo, lo recibimos!";
          confirmMessage.textContent =
            result.omitidos && result.omitidos.length > 0
              ? `Formulario enviado. Algunas fotos (${result.omitidos.join(", ")}) eran muy pesadas y no se pudieron adjuntar — mandalas por WhatsApp.`
              : "Formulario enviado por email. Te contactamos a la brevedad.";
        } else {
          confirmTitle.textContent = "Formulario listo";
          confirmMessage.textContent =
            "El envío automático todavía no está activo — por ahora, guardá o enviá esta captura de pantalla mientras definimos con vos el destino final de los datos.";
        }
      })
      .catch(() => {
        if (!confirmTitle || !confirmMessage) return;
        confirmTitle.textContent = "No se pudo enviar automáticamente";
        confirmMessage.textContent =
          "Guardá esta captura de pantalla y enviánosla por WhatsApp — hubo un problema de conexión al mandarla sola.";
      });
  });

  render();
}
