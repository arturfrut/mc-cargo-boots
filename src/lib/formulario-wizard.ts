// Motor de wizard para los formularios de toma de medidas (docs/specs/007-formularios.md).
// Sin framework, mismo patrón vanilla-TS que src/components/RegionSelector.astro.
//
// Cada paso es una <section data-step="id"> dentro del <form>. El documento define el
// orden lineal de pasos y, en los puntos donde el form original ramifica (elegir modelo →
// distinta página de colores), qué radio decide el siguiente id de paso.
//
// ADR 0004: sin backend en esta versión. "Enviar" arma un resumen a partir de FormData y lo
// muestra en pantalla — no hay fetch, no persiste nada.

export type StepId = string;

export interface BranchRule {
  /** name del <input> radio que decide la rama (ej. "modelo") */
  field: string;
  /** value del radio elegido → próximo StepId */
  targets: Record<string, StepId>;
}

export interface WizardConfig {
  formId: string;
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

  function buildSummary(): string {
    const data = new FormData(form!);
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

  backBtn?.addEventListener("click", goBack);
  nextBtn?.addEventListener("click", goNext);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (summaryEl) summaryEl.textContent = buildSummary();
    confirmPanel?.removeAttribute("hidden");
    for (const el of allSteps) el.hidden = true;
    if (backBtn) backBtn.hidden = true;
    if (nextBtn) nextBtn.hidden = true;
    if (submitBtn) submitBtn.hidden = true;
    if (progressLabel) progressLabel.textContent = "";
    confirmPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  render();
}
