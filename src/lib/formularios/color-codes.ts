// Códigos de color reales relevados de los formularios de Mc Cargo (semi-custom y a
// molde/custom) — docs/catalog/formularios-relevamiento-custom.md §1c/§1d/§1e/§7d/§7e/§7f.
//
// El relevamiento encontró que cada dropdown del original tiene una lista ligeramente
// distinta (algunos códigos aparecen en un campo y no en otro — ver la nota en §1c/§1d).
// Como son diferencias mínimas que el propio relevamiento marca como "a confirmar si son
// intencionales o un error de carga del formulario", acá se usa una única lista superset
// (unión de todas las vistas) en vez de siete listas casi idénticas — son códigos reales
// del cliente, no un placeholder genérico. Ajustar por campo si el cliente confirma que
// las diferencias son intencionales.
export const COLOR_CODES: string[] = [
  "N1", "N4", "N5", "N6",
  "B1", "B3", "B4", "Bf5",
  "P1", "P7", "PL8", "Pel1",
  "D0", "D1", "Dh3", "DL4",
  "Cu1", "Cu2", "CuH3", "Cut1",
  "F1", "F3", "F4", "Fm6",
  "RS1", "RF2", "RS3",
  "V2", "V3", "V4",
  "Rj0", "Rj2", "Rj3", "Rj4",
  "Bd1",
  "A1", "A3", "A4", "A5", "A6", "A8", "A9",
  "Na1", "Na2", "Na3",
  "Am2", "Am3", "Am4", "Am5",
  "C1", "Co3",
  "Vi1", "Vi2", "Vi3",
  "CH7", "Li1",
];

// Para el radio "color general de la bota" (2 opciones fijas, no dropdown).
export const SIDE_COLOR_OPTIONS = [
  { value: "N1", label: "Negro (N1)" },
  { value: "B1", label: "Blanco (B1)" },
];
