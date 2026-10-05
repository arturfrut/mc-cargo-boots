// docs/specs/005-productos-listado.md — los productos se eligen primero por
// SISTEMA (Standard / Semi-custom / Custom) y después por modelo.
// Las descripciones son placeholder: el cliente las va a redactar él mismo.
import catalogo from "../../docs/catalog/catalogo.json";

export type SistemaId = "standard" | "semi-custom" | "custom";

export interface Sistema {
  id: SistemaId;
  nombre: string;
  descripcion: string;
  // tipo_ajuste de catalogo.json que pertenece a este sistema (null = todavía
  // no hay modelos en el catálogo, se listan los de `modelosPendientes`).
  tipoAjuste: string | null;
  tiempoEntrega: string;
  formularioHref: string;
  // Modelos del sistema que aún no existen en catalogo.json (sin ficha).
  modelosPendientes: string[];
}

export const SISTEMAS: Sistema[] = [
  {
    id: "standard",
    nombre: "Botas Standard",
    descripcion:
      "Botas de línea con medidas de talle estándar. Elegís modelo, talle y color y las fabricamos artesanalmente para vos. (Texto provisorio: la descripción final la redacta el cliente.)",
    tipoAjuste: "stock",
    tiempoEntrega: "Aproximadamente entre 2 y 3 semanas.",
    formularioHref: "/formulario/estandar",
    modelosPendientes: [],
  },
  {
    id: "semi-custom",
    nombre: "Botas Semi-custom",
    descripcion:
      "Botas con ajuste adaptado a las medidas de tu pie sobre una base de línea, con colores a elección. (Texto provisorio: la descripción final la redacta el cliente.)",
    tipoAjuste: "semi-custom",
    tiempoEntrega: "Aproximadamente entre 4 y 6 semanas.",
    formularioHref: "/formulario/semi-custom",
    modelosPendientes: [],
  },
  {
    id: "custom",
    nombre: "Botas Custom",
    descripcion:
      "Botas a molde, fabricadas íntegramente sobre la forma de tu pie. (Texto provisorio: la descripción final la redacta el cliente.)",
    tipoAjuste: null,
    tiempoEntrega:
      "Depende de la cantidad de órdenes abiertas en el momento de la venta. Consultanos sin ningún compromiso.",
    formularioHref: "/formulario/a-medida",
    modelosPendientes: ["Classic Custom", "Ultra Light Custom", "Ultra Light+ Custom"],
  },
];

export function sistemaPorId(id: string): Sistema | undefined {
  return SISTEMAS.find((s) => s.id === id);
}

export function sistemaDeModelo(tipoAjuste: string): Sistema | undefined {
  return SISTEMAS.find((s) => s.tipoAjuste === tipoAjuste);
}

export function modelosDeSistema(sistema: Sistema) {
  if (!sistema.tipoAjuste) return [];
  return catalogo.modelos.filter((m) => m.tipo_ajuste === sistema.tipoAjuste);
}
