# MC Cargo — Relevamiento en vivo de formularios (sesión 2026-09-06)

> Este archivo es un **relevamiento en vivo**, complementario a
> `docs/catalog/formularios-medidas.md` (no lo reemplaza ni lo corrige). El usuario navega los
> formularios originales en el navegador y Claude documenta acá lo que va mostrando: preguntas,
> textos instructivos e imágenes explicativas.
>
> Imágenes descargadas en: `docs/catalog/media/formularios/` (referenciadas con ruta relativa desde
> este archivo).

---

<!-- Cada formulario/pantalla mostrado se documenta como una sección nueva abajo, con este formato:

## N. <Nombre del formulario> — <página/pantalla si aplica>

**URL:** <si se compartió>

**Texto descriptivo / instructivo (literal):**
> ...

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|

### Imágenes

- `media/formularios/<archivo>` — descripción de qué muestra.

-->

## 1. Formulario botas semi-custom

**URL:** https://forms.gle/7fseKLXMtQQPmtut5 (destrabado — ya no da error 401)

**Texto descriptivo de cabecera (literal):**
> Las botas semi-custom ofrecen la posibilidad de personalizar los colores como más te guste! Y
> también intentamos personalizar al máximo el ajuste, por lo que, si bien es una bota fabricada con
> nuestras hormas estándar de base, con su personalización se logra una gran performance. En ellas
> utilizamos la misma calidad de materiales que en nuestras botas a molde, y elegimos la horma más
> adecuada para ti.
>
> Para obtener unas botas semi-custom, simplemente tendrás que completar el siguiente formulario en
> el que proporcionarás datos sobre tus pies, como el largo, ancho, y cualquier otro detalle
> relevante. Como dijimos anteriormente, con esta información, nosotros podremos crear unas botas con
> una horma estándar de base, pero con un ajuste personalizado para ti.

Nota: el formulario pide iniciar sesión con Google (el nombre, correo y foto de la cuenta quedan
asociados al enviar), porque tiene campos de carga de archivos — confirma la hipótesis de
`formularios-medidas.md` §4.

### Sección informativa: "Indicaciones para medir los pies" (idéntica en estructura al formulario estándar)

Mismo texto introductorio y bloques A (largo) / B (ancho) / C (instrumento) que el formulario
estándar (ver `formularios-medidas.md` §1) — literal, sin variaciones.

### Campos — "FORMULARIO A COMPLETAR"

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Nombre completo | Texto corto | ✅ | — |
| 2 | Medida "exacta" del largo de los 2 pies — Derecho | Texto corto | ✅ | — |
| 3 | Medida "exacta" del largo de los 2 pies — Izquierdo | Texto corto | ✅ | — |
| 4 | Medida "exacta" del ancho máximo de los 2 pies — Derecho | Texto corto | ✅ | — |
| 5 | Medida "exacta" del ancho máximo de los 2 pies — Izquierdo | Texto corto | ✅ | — |
| 6 | Edad | Texto corto | ✅ | — |
| 7 | Sexo | Opción única | ✅ | Masculino / Femenino |
| 8 | Dirección completa | Texto corto | ❌ (sin *) | — |
| 9 | Localidad | Texto corto | ✅ | — |
| 10 | Provincia / Estado | Texto corto | ✅ | — |
| 11 | País | Texto corto | ✅ | — |
| 12 | Red Social por donde se contacta y usuario | Texto corto | ✅ | — |
| 13 | Uso | Opción única | ✅ | Recreativo/Fitness / Competición |
| 14 | Cantidad de años en el patinaje | Texto corto | ✅ | — |
| 15 | Bota en uso (marca, modelo, de competición o rollers/fitness) | Texto corto | ✅ | — |
| 16 | Talle de calzado tradicional | Texto corto | ✅ | — |
| 17 | Talle de bota en uso | Texto corto | ✅ | — |
| 18 | Contextura del pie | Opción única | ✅ | Fina / Mediana / Grande |
| 19 | Datos extras que puedan influir en el calce (sobrehueso, juanetes, etc.) | Texto largo | ❌ (sin *) | — |
| 20 | Vista superior pies juntos | Subir archivo (1, máx 10 MB) | ✅ | — |
| 21 | Vista posterior pies juntos | Subir archivo (1, máx 10 MB) | ✅ | — |
| 22 | Vista lateral exterior (pie derecho) | Subir archivo (1, máx 10 MB) | ✅ | — |
| 23 | Vista lateral exterior (pie izquierdo) | Subir archivo (1, máx 10 MB) | ✅ | — |
| 24 | Vista lateral interior (pie derecho) | Subir archivo (1, máx 10 MB) | ✅ | — |
| 25 | Vista lateral interior (pie izquierdo) | Subir archivo (1, máx 10 MB) | ✅ | — |
| 26 | Vista posterior (pie derecho) | Subir archivo (1, máx 10 MB) | ✅ | — |
| 27 | Vista posterior (pie izquierdo) | Subir archivo (1, máx 10 MB) | ✅ | — |

**Nota sobre campos 20-27:** el texto que los precede dice literalmente:
> Enviar fotos de los pies con estas vistas:
> - Vista superior pies juntos
> - Vista posterior pies juntos
> - Vista lateral exterior (una foto pie derecho- una foto pie izquierdo)
> - Vista lateral interior (una foto pie derecho- una foto pie izquierdo)
> - Vista posterior (una foto pie derecho- una foto pie izquierdo)
>
> Importante, para cada vista tomar como ejemplos las siguientes fotos:

**Fin → botón "Siguiente" (⚠️ multipágina, igual que el estándar — falta relevar página(s) 2+).**

### Imágenes

Bloque A (medidas de largo, entre "Medidas de largo máximo" e "Medidas ancho máximo"):
- `media/formularios/semicustom-largo-01.png` — pie apoyado en zócalo, midiendo largo con regla/cinta.
- `media/formularios/semicustom-largo-02.png` — misma medición, ángulo/paso siguiente.

Bloque B (medidas de ancho, entre "Medidas ancho máximo" e "Instrumento de medición"):
- `media/formularios/semicustom-ancho-01.png` — pie de lado midiendo ancho máximo (metatarso).
- `media/formularios/semicustom-ancho-02.png` — misma medición, ángulo/paso siguiente.

Bloque C (instrumento de medición):
- `media/formularios/semicustom-instrumento-01.png` — ejemplo de regla/cinta métrica desde el cero.
- `media/formularios/semicustom-instrumento-02.png` — ídem, otro instrumento válido.

Ejemplos de fotos a subir (bajo "Importante, para cada vista tomar como ejemplos las siguientes fotos"):
- `media/formularios/semicustom-ejemplo-superior-pies-juntos.png` — "Vista superior pies juntos / Top view feet together" (confirmado, tiene rótulo en la imagen).
- `media/formularios/semicustom-ejemplo-posterior-pies-juntos.png` — vista posterior, pies juntos.
- `media/formularios/semicustom-ejemplo-lateral-exterior.png` — vista lateral exterior.
- `media/formularios/semicustom-ejemplo-lateral-interior.png` — vista lateral interior.
- `media/formularios/semicustom-ejemplo-posterior-individual.png` — vista posterior, pie individual.

**Dato interesante:** las imágenes de ejemplo tienen rótulo bilingüe (español/inglés) tipo
"Vista superior pies juntos / Top view feet together" — relevante para el spec i18n (010).

## 1b. Formulario botas semi-custom — página 2 ("Modelos")

Confirma que sí es multipágina; esta es la página siguiente a la documentada en §1.

**Texto:** solo el encabezado "Modelos:" y un label por modelo (Classic / Ultra Light / UL+), cada
uno seguido de una foto de producto (no hay texto descriptivo adicional por modelo en esta página).

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Modelo elegido | Opción única | ✅ | Classic / Ultra Light / UL+ |

**Fin → botones "Atrás" / "Siguiente" (⚠️ sigue siendo multipágina — falta relevar página(s) 3+).**

### Imágenes

- `media/formularios/semicustom-modelo-classic.png` — collage 2×2 de fotos de producto del modelo
  **Classic** (negro con detalle blanco/plateado, logo "mc cargo", talonera de carbono).
- `media/formularios/semicustom-modelo-ultralight.png` — collage 2×2 del modelo **Ultra Light**
  (negro con detalle bronce/cobre metalizado).
- `media/formularios/semicustom-modelo-ulplus.png` — collage 2×2 del modelo **UL+** (negro con
  detalle dorado/champagne metalizado, incluye foto sobre fondo con bolsa de marca "iceslide").

**Nota:** estas 3 imágenes son fotos de producto de alta resolución (1–2 MB cada una) tomadas por el
cliente, no ilustraciones instructivas — sirven directamente como fotos de producto para la sección
de selección de modelo si se replica este formulario en la web.

## 1c. Formulario botas semi-custom — página 3, rama "UL+" ("Colores")

Página final para el modelo **UL+** (termina en botón "Enviar", no "Siguiente"). Cada modelo
probablemente ramifica a su propia página de colores — falta relevar las ramas de Classic y Ultra
Light (el usuario va a volver atrás y elegirlas).

**Texto de cabecera:**
> COLORES BOTA UL+
> El color de los bordados se asemejará lo más posible al tono pedido, lo que no garantiza que sea
> exactamente igual.
> Carta de colores: *(ver imagen)*

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Color laterales (color general de la bota) | Opción única | ✅ | Negro (N1) / Blanco (B1) |
| 2 | Color tapa | Dropdown | ✅ | Lista de códigos de color (genérico — ver Carta de colores) |
| 3 | Color fondo de la tapa *(el cuero de abajo de la tapa, ver foto explicativa)* | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 4 | Color bordado tapa | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 5 | Color talón | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 6 | Color bordado talón | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 7 | Dibujo bordado talón derecho (opcional, no logo de marca, no muy complejo) | Subir archivo (1, máx 100 MB) | ❌ | — |
| 8 | Dibujo bordado talón izquierdo (opcional, mismas reglas) | Subir archivo (1, máx 100 MB) | ❌ | — |
| 9 | Escritura stickers | Texto corto | ✅ | — |
| 10 | Color fondo stickers (si se quiere bandera, marcar la última opción) | Dropdown | ✅ | Lista de códigos de color (genérico) + "Otra opción (bandera)" |
| 11 | Si eligieron bandera, indicar cuál | Texto corto | ❌ | — |

**Nota sobre los dropdowns de color (campos 2, 3, 4, 5, 6, 10):** el original usa códigos internos
del cliente (ej. `N1`, `N4`, `B1`, `D1`, `Cu2`, `F3`, `RS1`, `V2`, `Rj0`, `A3`, `Na1`, `Am2`, `C1`,
`Co3`, `Vi1`, `CH7`, `Li1`, ~50 opciones en total) que solo tienen sentido junto a la carta de
colores visual — **no** conviene hardcodear esos códigos en la réplica web todavía. Para la
implementación usar valores/placeholders genéricos (ej. "Color 1", "Color 2"...) hasta tener la carta
de colores real con sus nombres/swatches — pendiente de confirmar con el cliente cómo se van a
presentar (¿selector visual de swatches en vez de dropdown de texto?).

### Imágenes

- `media/formularios/semicustom-ulplus-carta-colores.png` — carta de colores completa (swatches con
  sus códigos), imagen en alta resolución (4624px de ancho).
- `media/formularios/semicustom-ulplus-fondo-tapa-ejemplo.png` — foto de la bota UL+ con flecha
  verde señalando qué es "el fondo de la tapa" (franja de cuero blanco debajo del bordado dorado
  "mc cargo").

## 1d. Formulario botas semi-custom — página 3, rama "Classic" ("Colores")

Misma estructura que la rama UL+ (§1c), con dos diferencias notables:

- **No tiene el campo "Color fondo de la tapa"** (ese campo parece exclusivo de UL+, por el diseño
  físico de la tapa — ver foto `semicustom-ulplus-fondo-tapa-ejemplo.png`).
- Las listas de códigos de color varían levemente entre campos y respecto a UL+ (ej. "Color bordado
  tapa" en Classic incluye `Cut1` y `Rj3` que no aparecen en los otros dropdowns) — **confirma que
  cada dropdown de color tiene su propia lista, no son todas idénticas**; no asumir una lista única
  compartida al implementar.

**Texto de cabecera:**
> COLORES BOTA CLASSIC:
> El color de los bordados se asemejará lo más posible al tono pedido, lo que no garantiza que sea
> exactamente igual.
> Carta de colores: *(ver imagen)*

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Color laterales (color general de la bota) | Opción única | ✅ | Negro (N1) / Blanco (B1) |
| 2 | Color tapa | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 3 | Color bordado tapa | Dropdown | ✅ | Lista de códigos de color (genérico, incluye variantes propias como `Cut1`, `Rj3`) |
| 4 | Color talón | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 5 | Color bordado talón | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 6 | Dibujo bordado talón derecho (opcional) | Subir archivo (1, máx 100 MB) | ❌ | — |
| 7 | Dibujo bordado talón izquierdo (opcional) | Subir archivo (1, máx 100 MB) | ❌ | — |
| 8 | Escritura sticker | Texto corto | ✅ | — |
| 9 | Color fondo stickers (si se quiere bandera, marcar la última opción) | Dropdown | ✅ | Lista de códigos de color (genérico) + "Otra opción (bandera)" |
| 10 | Si eligieron bandera, indicar cuál | Texto corto | ❌ | — |

**Fin → botones "Atrás" / "Enviar" (última página de esta rama).**

### Imágenes

- `media/formularios/semicustom-classic-carta-colores.png` — carta de colores completa para el
  modelo Classic (misma resolución 4624px; a comparar visualmente con la de UL+ para ver si son la
  misma imagen o varían por modelo).

## 1e. Formulario botas semi-custom — página 3, rama "Ultra Light" ("Colores")

Misma estructura que Classic (§1d): **tampoco tiene** el campo "Color fondo de la tapa" (exclusivo
de UL+).

**Confirmado:** la imagen de "Carta de colores" de Ultra Light es el **mismo archivo** que la de
Classic (mismo src de Google Forms) — no hace falta descargarla de nuevo, ya está guardada como
`semicustom-classic-carta-colores.png`. Solo la carta de **UL+** es una imagen distinta
(`semicustom-ulplus-carta-colores.png`).

**Texto de cabecera:**
> COLORES BOTA ULTRA LIGHT:
> El color de los bordados se asemejará lo más posible al tono pedido, lo que no garantiza que sea
> exactamente igual.
> Carta de colores: *(ver imagen — igual a la de Classic)*

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Color laterales (color general de la bota) | Opción única | ✅ | Negro (N1) / Blanco (B1) |
| 2 | Color tapa | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 3 | Color bordado tapa | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 4 | Color talón | Dropdown | ✅ | Lista de códigos de color (genérico; esta lista puntual no incluye `N5` y trae `CUH3` en vez de `CuH3` — probablemente error de tipeo del cliente, no algo a replicar literal) |
| 5 | Color bordado talón | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 6 | Dibujo bordado talón derecho (opcional) | Subir archivo (1, máx 100 MB) | ❌ | — |
| 7 | Dibujo bordado talón izquierdo (opcional) | Subir archivo (1, máx 100 MB) | ❌ | — |
| 8 | Escritura stickers | Texto corto | ✅ | — |
| 9 | Color fondo stickers (si se quiere bandera, marcar la última opción) | Dropdown | ✅ | Lista de códigos de color (genérico) + "Otra opción (bandera)" |
| 10 | Si eligieron bandera, indicar cuál | Texto corto | ❌ | — |

**Fin → botones "Atrás" / "Enviar" (última página de esta rama).**

### Imágenes

- Reutiliza `media/formularios/semicustom-classic-carta-colores.png` (mismo archivo que Classic).

## Resumen — estructura completa del formulario semi-custom

```
Página 1: datos personales + medidas + fotos de pies (§1)
Página 2: elegir modelo → Classic / Ultra Light / UL+ (§1b)
Página 3 (ramifica según modelo):
  ├─ Classic      → colores SIN "fondo de la tapa" (§1d), carta de colores A
  ├─ Ultra Light  → colores SIN "fondo de la tapa" (§1e), carta de colores A (igual a Classic)
  └─ UL+          → colores CON "fondo de la tapa" (§1c), carta de colores B (propia)
```

Las listas de opciones de cada dropdown de color tienen pequeñas variaciones entre sí (no son
exactamente la misma lista repetida) — al implementar, tratar cada dropdown como su propia lista de
opciones en vez de una constante compartida, hasta que el cliente confirme si esas diferencias son
intencionales o errores de carga del formulario original.

### Pendiente general (semi-custom)

- Confirmar con el cliente si las pequeñas diferencias entre listas de códigos de color por campo
  son intencionales.
- Definir cómo se presentarán los colores en la web (dropdown de texto vs. selector visual de
  swatches) antes de implementar.

---

## 2. Formulario de botas estándar — página 2 ("Modelos de botas")

Esta es la página que faltaba relevar de `formularios-medidas.md` §1 (la página 1 documentada ahí
coincide exactamente con lo mostrado ahora — sin cambios).

**Texto de cabecera:**
> Modelos de botas
> Estos son los modelos que tenemos disponibles para las botas estándar (stock):

**Descripciones por modelo (literal):**

| Modelo | Descripción |
|---|---|
| V3 | Ideal como primera bota profesional de competición. Altura media a alta y excelente soporte de tobillo. Cumple con todas las cualidades técnicas necesarias para desarrollarse en el patín carrera. Cierre final con velcro. |
| F4 | Ideal como primera bota profesional de competición. Altura media a alta y excelente soporte de tobillo. Cumple con todas las cualidades técnicas necesarias para desarrollarse en el patín carrera, alta calidad en refuerzos internos. Cierre final con hebilla. |
| Núcleo | Bota gama media. Ajuste para técnica alta. Ideal para patinadores en etapa experticia. |
| Classic stock | Bota gama alta. Ajuste profesional. Ideal para patinadores top. |
| Ultra Light stock | Bota ultra liviana de alta gama. Mediante estructuras en la suela de carbono, se logra alivianar y mejorar la rigidez. Con capellada de diseño y refuerzos ultra livianos. Este sistema logra mejor estabilidad, control y mayor transmisión de empuje. Destacada por ser la única bota con tecnología Ultra Light del mercado. |

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Modelo elegido | Opción única | ✅ | V3 / F4 / Núcleo (negra) / Classic stock / Ultra Light stock |

**Nota:** la opción del formulario dice "Núcleo (**negra**)" — coincide con la nota de transcripción
pendiente en `catalogo.json` (`meta.notas_de_transcripcion`, modelo `nucleo`, sobre `anclaje_mm`);
puede ser relevante si el modelo Núcleo solo viene en un color en stock. Marcar para confirmar con el
cliente junto con esa nota existente.

**Fin → botones "Atrás" / "Siguiente" (⚠️ sigue siendo multipágina — falta relevar página(s) 3+, que
probablemente ramifiquen por modelo elegido, igual que en el semi-custom).**

### Imágenes

- `media/formularios/estandar-modelo-v3.png` — foto de producto del modelo V3.
- `media/formularios/estandar-modelo-f4.png` — foto de producto del modelo F4.
- `media/formularios/estandar-modelo-nucleo.png` — foto de producto del modelo Núcleo.
- `media/formularios/estandar-modelo-classic.png` — foto de producto del modelo Classic stock.
- `media/formularios/estandar-modelo-ultralight.png` — foto de producto del modelo Ultra Light stock.

## 3. Formulario de botas estándar — página 3, rama "V3" ("Colores")

Página final para el modelo **V3** (termina en botón "Enviar"). A diferencia del semi-custom, acá
los colores son **combinaciones predefinidas** (opción única), no dropdowns de código por pieza —
mucho más simple.

**Texto de cabecera:**
> COLORES V3:
> Colores elegidos:

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Colores elegidos | Opción única | (sin `*`, ver nota) | Base negra con rosa / Base negra con azul / Base negra con blanco / Toda negra / Base blanca con rosa / Base blanca con azul / Base blanca con negro / Toda blanca |

**Nota:** esta pregunta no muestra el asterisco `*` de obligatoriedad en el relevamiento — a
confirmar si es opcional o un descuido del form original.

**Fin → botones "Atrás" / "Enviar" (última página; formulario estándar rama V3 completo).**

### Imágenes

- La imagen que acompaña esta página es la **misma foto** ya guardada como
  `media/formularios/estandar-modelo-v3.png` (mismo archivo, reutilizado de la página 2) — no se
  descargó de nuevo.

### Pendiente

- Relevar la rama de colores de los otros 4 modelos (F4, Núcleo, Classic stock, Ultra Light stock) —
  el usuario va a volver atrás y elegirlos a continuación.

## 4. Formulario de botas estándar — página 3, rama "F4" ("Colores")

**Texto de cabecera:**
> COLORES F4:
> Colores elegidos:

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Colores elegidos | Opción única | (sin `*`, mismo caso que V3) | Base azul con blanco / Base rosa con blanco / Negra con talón blanco |

**Fin → botones "Atrás" / "Enviar" (última página; formulario estándar rama F4 completo).**

### Imágenes

- `media/formularios/estandar-f4-colores.png` — collage 2×2 con foto real de cada combinación:
  rosa/blanco, azul/blanco (metalizado), negra con detalle blanco "F4" y talón blanco. **Distinta**
  de la foto de `estandar-modelo-f4.png` (esa es la foto genérica negra de la página 2; esta es
  específica de las 3 opciones de color).

### Pendiente

- Relevar Núcleo, Classic stock y Ultra Light stock.

## 5. Formulario de botas estándar — página 3, rama "Núcleo" (sin colores)

**Dato clave:** a diferencia de V3 y F4, el modelo **Núcleo no tiene página de selección de color** —
va directo a una página final con solo el texto "Haz clic en Enviar para finalizar" y el botón
"Enviar". Sin campos, sin imágenes.

Esto es coherente con la opción de la página 2 llamándose literalmente "**Núcleo (negra)**" — el
modelo solo viene en un color (negro), no hay nada que elegir.

**Fin → botones "Atrás" / "Enviar" (formulario estándar rama Núcleo completo — la más simple de
todas).**

### Pendiente

- Relevar Classic stock y Ultra Light stock (quedan como los únicos modelos del estándar sin
  relevar).

## 6. Formulario de botas estándar — página 3, rama "Classic stock" (sin colores)

**Confirmado por el usuario:** igual que Núcleo (§5) — va directo a "Haz clic en Enviar para
finalizar", sin página de color ni imágenes. Classic stock también viene en un único color.

### Pendiente

- Relevar Ultra Light stock (único modelo del estándar que falta — quedó pendiente, el usuario pasó
  a relevar el formulario "a molde/custom" antes de terminarlo).

---

## 7. Formulario "a molde / custom" — página 1 ("Athlete information")

**URL:** https://forms.gle/G64EPZ1N2jkMdWoRA (destrabado — ya no da error 401)

**Título:** "Mc Cargo custom boots form"

**Dato clave:** a diferencia de los formularios estándar y semi-custom (en español), **este
formulario está completamente en inglés**. Relevante para el spec i18n (010) — puede ser que el
cliente ya lo pensó para clientes internacionales del segmento "a molde" (gama más alta).

### Campos — "1. Athlete information"

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | First name | Texto corto | ✅ | — |
| 2 | Last name | Texto corto | ✅ | — |
| 3 | Age | Texto corto | ✅ | — |
| 4 | Sex | Opción única | ✅ | Male / Female |
| 5 | Street | Texto corto | ✅ | — |
| 6 | Postal Code / City | Texto corto | ✅ | — |
| 7 | Country | Texto corto | ✅ | — |
| 8 | Phone | Texto corto | ✅ | — |
| 9 | e-mail | Texto corto | ✅ | — |
| 10 | Social networks (Instagram / Facebook) | Texto corto | ❌ | — |
| 11 | Specialty | Opción única | ✅ | Sprinter / Long distance |
| 12 | Level (Example: world, national, amateur, etc.) | Texto corto | ✅ | — |
| 13 | Years skating | Texto corto | ✅ | — |

Sin imágenes en esta página.

**Fin → botón "Siguiente" (multipágina, como los otros dos formularios).**

### Pendiente

- Relevar página(s) 3+.

## 7b. Formulario "a molde / custom" — página 2 ("Boot / Frame Information")

**Texto de cabecera:** "2. Boot / Frame Information" (sin descripción adicional).

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Regular shoe size | Texto corto | ✅ | — |
| 2 | Current boot brand / model | Texto corto | ❌ | — |
| 3 | Mounting distance | Opción única | ✅ | 165mm / 195mm |

Sin imágenes en esta página.

**Dato importante:** el campo **"Mounting distance" (165mm / 195mm)** es exactamente el dato que
`docs/catalog/catalogo.json` marca como pendiente/dudoso en `meta.notas_de_transcripcion` (el
`anclaje_mm` del modelo `nucleo`). Esto confirma que es un campo real del negocio (distancia de
anclaje del chasis/frame a la bota) y da los dos valores válidos observados en este formulario —
útil para cerrar esa nota pendiente del catálogo, aunque conviene confirmar con el cliente si aplica
igual a los otros modelos o es específico de "a molde".

**Fin → botones "Atrás" / "Siguiente" (sigue siendo multipágina).**

### Pendiente

- Marcar en `catalogo.json` / spec del catálogo que este relevamiento aporta info para la nota de
  `anclaje_mm` pendiente.

## 7c. Formulario "a molde / custom" — página 3 ("Specifications of custom boot")

**Texto de cabecera:** "3. Specifications of custom boot" (sin descripción adicional).

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Preferred length of boot | Opción única | ✅ | short / normal / long |
| 2 | Preferred width of the boot | Opción única | ✅ | narrow / normal / wide |
| 3 | Preferred strenght [sic] of the boot | Opción única | ✅ | normal / stiff / extra stiff |
| 4 | Preferred height of the boot | Opción única | ✅ | low / medium / high |
| 5 | Problem zones on foot (if there are any) / mark on the cast | Texto largo | ❌ | — |
| 6 | You will generally use it with a wheels [sic] | Opción única | ✅ | 100/110mm / 125mm |
| 7 | Extras | Texto largo | ❌ | — |
| 8 | Measurements length — Left | Texto corto | ✅ | — |
| 9 | Measurements length — Right | Texto corto | ✅ | — |
| 10 | Model chosen | Opción única | ✅ | Ultra Light - UL+ / Ultra Light / Classic |

**Nota:** hay dos errores de tipeo en el original en inglés ("strenght" → strength, "a wheels" → a
wheel size) — replicar tal cual si se decide mantener el form en inglés, o corregirlos si se
traduce/adapta.

**Fin → botones "Atrás" / "Siguiente" (⚠️ ramifica por modelo, como los otros formularios — falta
relevar página(s) 4+ según el modelo elegido).**

### Imágenes

Bajo "Models:" (fotos de producto por modelo, antes del radio "Model chosen"):
- `media/formularios/custom-modelo-ulplus.png` — foto de producto UL+ (distinta de la usada en el
  semi-custom, propia de este formulario).
- `media/formularios/custom-modelo-classic.png` — foto de producto Classic (distinta de la del
  semi-custom).
- Ultra Light reutiliza el **mismo archivo exacto** ya guardado como
  `media/formularios/semicustom-modelo-ultralight.png` (confirmado por hash idéntico) — no se
  descargó de nuevo.

### Pendiente

- Relevar Ultra Light y Classic del formulario custom (el usuario relevó la rama UL+ primero).

## 7d. Formulario "a molde / custom" — página 4, rama "Ultra Light - UL+" ("Colors UL+")

Misma estructura que la rama UL+ del semi-custom (§1c), en inglés, y es la **última página**
("Enviar").

**Texto de cabecera:**
> Colors UL+:
> The color of the embroidery will be attempted to be as similar as possible to the requested tone.
> Colors chart: *(ver imagen)*

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Sides color (general color of the boot) | Opción única | ✅ | Black (N1) / White (B1) |
| 2 | Flap color | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 3 | Background color of the flap *(el cuero de abajo de la tapa, ver foto)* | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 4 | Color flap embroidered | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 5 | Heel color | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 6 | Color heel embroidered | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 7 | Logo bordado talón derecho (opcional) | Subir archivo (1, máx 100 MB) | ❌ | — |
| 8 | Logo bordado talón izquierdo (opcional) | Subir archivo (1, máx 100 MB) | ❌ | — |
| 9 | Stickers script | Texto corto | ✅ | — |
| 10 | Background color stickers (si se quiere bandera, última opción) | Dropdown | ✅ | Lista de códigos de color (genérico) + "Another option (flag)" |
| 11 | If you chose a flag, indicate which one | Texto corto | ❌ | — |

Estructura de campos **idéntica 1:1** a la rama UL+ del semi-custom (§1c), solo traducida al inglés
— confirma que ambos formularios comparten el mismo diseño de "página de colores UL+".

**Fin → botón "Enviar" (última página de esta rama).**

### Imágenes — ¡mejora importante sobre lo relevado antes!

- `media/formularios/custom-ulplus-carta-colores.png` — **carta de colores real y completa**, con
  categorías y nombres bilingües: Blancos y champagne fantasía, Colores espejo/mirror, Patent
  leather (cuero patente), Colores fantasía brillosos/fluo, Colores semi-brillo y fluo, Colores
  normales, Colores opacos, Colores satinados metalizados. Cada swatch tiene su código (N1, B1, Rj4,
  F4, etc.) — **esta imagen debería reemplazar/complementar** a
  `semicustom-ulplus-carta-colores.png` y `semicustom-classic-carta-colores.png` como referencia
  visual real de los códigos de color documentados en §1c/§1d/§1e (misma lista de códigos, ahora con
  swatch visual y categoría).
- `media/formularios/custom-ulplus-carta-colores-02.png` — diagrama explicativo "5. UPPERS Color"
  mostrando sobre un dibujo de la bota qué zona corresponde a cada campo (Heel color, Embroidered
  color ×2, Flap color, Flap color down, Sticker background/script, General color of the boot con
  Black N1 / White B1) — muy útil para el layout de la UI del formulario custom en la web.
- `media/formularios/semicustom-ulplus-fondo-tapa-ejemplo.png` — foto de bota real con flecha
  señalando el "fondo de la tapa" (ya descargada en §1c; esta página mostraba el mismo archivo
  exacto, confirmado por hash — no se duplicó).

### Nota importante para implementación

Con la carta de colores real (`custom-ulplus-carta-colores.png`) ya no hace falta usar valores
"genéricos" para los dropdowns de color — se puede armar la lista completa de códigos con su
categoría y, si el cliente confirma, sus swatches de color reales. Pendiente: pedir al cliente los
valores hex/RGB exactos de cada código (la foto es una aproximación fotográfica, no swatches
digitales).

### Pendiente

- Relevar la rama "Classic" de este formulario custom.

## 7e. Formulario "a molde / custom" — página 4, rama "Ultra Light" ("Ultra Light Colors")

Misma base que UL+ (§7d) — **sin** "Background color of the flap" (igual que en el semi-custom,
§1e) — pero con **un campo nuevo que no existe en ninguna otra rama relevada hasta ahora**:

> **Do you want it with or without side reinforcement?** *(opción única, obligatorio)*
> With side reinforcement / Without side reinforcement

El diagrama explicativo de esta rama lo aclara: *"In the Ultra Light model, you can choose with or
without side reinforcement."* — es una opción estructural exclusiva del modelo Ultra Light (custom),
no vista en Classic ni UL+.

**Texto de cabecera:**
> ULTRA LIGHT COLORS:
> The color of the embroidery will be attempted to be as similar as possible to the requested tone.
> Colors chart: *(ver imagen — igual a la de UL+, §7d)*

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Side color (general color of the boot) | Opción única | ✅ | Black (N1) / White (B1) |
| 2 | Do you want it with or without side reinforcement? | Opción única | ✅ | With side reinforcement / Without side reinforcement |
| 3 | Flap color | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 4 | Embroidered flap color | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 5 | Heel color | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 6 | Embroidered heel color | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 7 | Logo bordado talón derecho (opcional) | Subir archivo (1, máx 100 MB) | ❌ | — |
| 8 | Logo bordado talón izquierdo (opcional) | Subir archivo (1, máx 100 MB) | ❌ | — |
| 9 | Stickers script | Texto corto | ✅ | — |
| 10 | Background color stickers (si se quiere bandera, última opción) | Dropdown | ✅ | Lista de códigos de color (genérico) + "Another option (flag)" |
| 11 | If you chose a flag, indicate which one | Texto corto | ❌ | — |

**Fin → botón "Enviar" (última página de esta rama).**

### Imágenes

- Reutiliza `media/formularios/custom-ulplus-carta-colores.png` (misma carta de colores, confirmado
  por hash idéntico).
- `media/formularios/custom-ultralight-diagrama.png` — diagrama específico de esta rama: igual al de
  UL+ pero **sin** el recuadro "Flap color down" (no aplica sin fondo de tapa), y con el recuadro
  extra explicando la opción de refuerzo lateral.

### Pendiente

- Relevar la rama "Classic" de este formulario custom (la única que falta).

## 7f. Formulario "a molde / custom" — página 4, rama "Classic" ("Classic Colors")

La rama más simple de las 3: sin "Background color of the flap" (como Ultra Light) y sin la opción
de refuerzo lateral (esa es exclusiva de Ultra Light, confirmado — ver diagrama).

**Texto de cabecera:**
> CLASSIC COLORS:
> The color of the embroidery will be attempted to be as similar as possible to the requested tone.
> Colors chart: *(ver imagen — igual a UL+ y Ultra Light)*

### Campos

| # | Campo | Tipo | Obligatorio | Opciones |
|---|---|---|---|---|
| 1 | Side color (general color of the boot) | Opción única | ✅ | Black (N1) / White (B1) |
| 2 | Flap color | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 3 | Embroidered flap color | Dropdown | ✅ | Lista de códigos de color (genérico, incluye variante propia `Rj3` — mismo patrón visto en el semi-custom §1d) |
| 4 | Heel color | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 5 | Embroidered heel color | Dropdown | ✅ | Lista de códigos de color (genérico) |
| 6 | Logo bordado talón derecho (opcional) | Subir archivo (1, máx 100 MB) | ❌ | — |
| 7 | Logo bordado talón izquierdo (opcional) | Subir archivo (1, máx 100 MB) | ❌ | — |
| 8 | Stickers script | Texto corto | ✅ | — |
| 9 | Background color stickers (si se quiere bandera, última opción) | Dropdown | ✅ | Lista de códigos de color (genérico) + "Another option (flag)" |
| 10 | If you chose a flag, indicate which one | Texto corto | ❌ | — |

**Fin → botón "Enviar" (última página — formulario "a molde/custom" completo).**

### Imágenes

- Reutiliza `media/formularios/custom-ulplus-carta-colores.png` (misma carta, confirmado por hash).
- `media/formularios/custom-classic-diagrama.png` — diagrama igual al de UL+/Ultra Light pero sin
  "Flap color down" y sin la nota de refuerzo lateral.

---

## Resumen — estructura completa del formulario "a molde / custom"

```
Página 1: Athlete information (datos personales, en inglés) (§7)
Página 2: Boot / Frame Information — incluye "Mounting distance" 165mm/195mm (§7b)
Página 3: Specifications of custom boot — largo/ancho/rigidez/altura, ruedas, medidas, modelo (§7c)
Página 4 (ramifica según modelo elegido en pág. 3):
  ├─ Ultra Light - UL+  → colores CON "flap background" + fondo tapa (§7d)
  ├─ Ultra Light        → colores SIN "flap background", CON opción refuerzo lateral (§7e)
  └─ Classic             → colores SIN "flap background", SIN refuerzo lateral — la más simple (§7f)
```

**Formulario "a molde/custom" relevado en su totalidad** (4 páginas, 3 ramas de color). Mismo patrón
estructural que el semi-custom (§1), pero en inglés y con dos campos extra específicos de esta gama:
"Mounting distance" y "side reinforcement" (Ultra Light).

### Pendiente general (a molde/custom)

- Confirmar con el cliente los valores hex/RGB reales de cada código de color de la carta
  (`custom-ulplus-carta-colores.png`) para poder reemplazar el placeholder "genérico" de los
  dropdowns por swatches reales.
- Confirmar si "Mounting distance" (165/195mm) aplica también a los otros formularios (estándar,
  semi-custom) o es específico de "a molde".

---

## 8. Formulario sobrehueso calcáneo (talón) — imágenes

**URL:** https://forms.gle/374sw7Eo1rTxQJMk6

El contenido (texto, campos) coincide exactamente con lo ya documentado en
`formularios-medidas.md` §2 — sin cambios. Lo único que faltaba de esa vez eran las imágenes
explicativas (las URLs de Google Forms expiran), así que se bajaron ahora:

### Imágenes

- `media/formularios/sobrehueso-calcaneo-01.png` — foto explicativa: marcar el centro de la
  calcificación.
- `media/formularios/sobrehueso-calcaneo-02.png` — foto explicativa: medir en milímetros desde el
  piso hasta el centro de la calcificación.

## 9. Formulario sobrehueso escafoides — imágenes

**URL:** https://forms.gle/1Fb2rWc5YRzN5dzm7

El contenido coincide exactamente con lo ya documentado en `formularios-medidas.md` §3 — sin
cambios. Se bajaron las 3 imágenes explicativas que faltaban:

### Imágenes

- `media/formularios/sobrehueso-escafoides-01.png` — foto explicativa: marcar el centro de la
  calcificación / apoyar el talón en el zócalo.
- `media/formularios/sobrehueso-escafoides-02.png` — foto explicativa: medir eje "X" desde la pared.
- `media/formularios/sobrehueso-escafoides-03.png` — foto explicativa: medir eje "Y" desde el piso.

---

## Cierre de la sesión de relevamiento (2026-09-06)

**Formularios relevados en esta sesión:**

| Formulario | Estado |
|---|---|
| Semi-custom | ✅ Completo (3 páginas, 3 modelos: Classic, Ultra Light, UL+) |
| A molde / custom | ✅ Completo (4 páginas, 3 modelos: Classic, Ultra Light, UL+) |
| Estándar | ⚠️ Completo excepto **Ultra Light stock** (página de colores sin relevar) |
| Sobrehueso calcáneo | ✅ Imágenes agregadas (contenido ya estaba completo) |
| Sobrehueso escafoides | ✅ Imágenes agregadas (contenido ya estaba completo) |

**Total imágenes descargadas:** 34, en `docs/catalog/media/formularios/`.

**Pendientes generales para cuando se implemente spec 007:**
1. Relevar la página de colores de "Ultra Light stock" del formulario estándar (única rama que
   falta de los 3 formularios principales).
2. Confirmar con el cliente los valores hex/RGB reales de los códigos de color (carta en
   `custom-ulplus-carta-colores.png`).
3. Confirmar si "Mounting distance" (165/195mm) aplica a otros formularios además del "a molde".
4. Decidir la UI final para los dropdowns de color (texto vs. selector visual de swatches).
5. Actualizar la nota `anclaje_mm` pendiente en `catalogo.json` con el dato de "Mounting distance".
