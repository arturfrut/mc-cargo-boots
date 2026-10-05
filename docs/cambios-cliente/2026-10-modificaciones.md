# Modificaciones solicitadas por el cliente — octubre 2026

Fuente: `Modificaciones página web.docx` (cliente) + 6 fotos adjuntas. Este doc es para que lo
revises vos; una vez validado, lo vamos implementando spec por spec (marco cada tarea con la
spec/archivo que toca). Nada de esto se toca en código todavía.

## Cómo está organizado

- **A. Formularios** (toca `docs/specs/007-formularios.md`, `src/pages/formulario/*.astro`)
- **B. Catálogo de productos** (toca `docs/catalog/catalogo.json`, fuente única de datos de producto)
- **C. Nosotros** (toca `docs/specs/003-nosotros.md`, `src/components/Nosotros.astro`)
- **D. Dudas / a confirmar con el cliente** antes de tocar código

---

## A. Formularios

### A1. Formulario estándar y semi-custom — nota sobre precisión de medidas
Agregar, debajo de las instrucciones de largo y ancho del pie, el texto:
> "Asegúrate de tomar bien la medida del pie de esta manera (Importante: las medidas deben ser
> exactas, sin agregar ni quitar milímetros)."

Afecta `src/pages/formulario/estandar.astro` y `semi-custom.astro` (ambos ya tienen
`InstructionBlock` de largo/ancho — agregar el texto ahí).

### A2. Fotos explicativas de vistas del pie
"Ver fotos explicativas (colocar luego de las indicaciones de medidas de largo y ancho)."
**No llegaron fotos de vistas del pie en este envío** — de las 6 fotos que me pasaste, ninguna
muestra ángulos/vistas de pie para fotografiar (son fotos de competición + una de molde de yeso +
el collage de taller). Ver punto D1.

### A3. Reordenar campos de contacto
- Agregar **"Número de celular / WhatsApp"** justo después de "Red social por donde se contacta".
- Agregar **"Email"** justo después del celular.

Campo nuevo en ambos formularios (hoy no existe ni celular ni email como campos propios — solo
"red_social"). Confirmar si reemplaza algo o se suma.

### A4. Formulario estándar — modelo "V3 Plus"
El docx dice "sacar el modelo V3 Plus". En el código actual el modelo se llama solo **"V3"** (no
hay "V3 Plus" en ningún lado — ni en `catalogo.json` ni en el formulario). Asumo que se refiere a
sacar la opción **V3** completa del `ModelPicker` del formulario estándar (`estandar.astro`,
líneas ~119-124 y el step "Colores — V3"). Ver punto D2 antes de borrar nada.

### A5. Formulario estándar — F4: agregar colores
Hoy el step "Colores — F4" tiene 3 opciones (`Base azul con blanco`, `Base rosa con blanco`,
`Negra con talón blanco`). Reemplazar por las 5 que mandó el cliente:
- Azules con tapas y talones blancos
- Fucsias con tapas y talones blancos
- Negras con talón blanco
- Negras con tapas y talones azules
- Negras con tapas y talones fucsias

También hay que actualizar la imagen `f4Colores` (`estandar-f4-colores.png`) si muestra las 3
combinaciones viejas — pedirle al cliente una versión actualizada con las 5, o sacamos el `<img>`
hasta tenerla.

### A6. Formulario semi-custom — "Datos extras"
Agregar la frase "si es que los hay" al final del label:
> "Datos extras que puedan influir en el calce de la bota (sobrehueso, juanetes, etc.) si es que
> los hay"

(`semi-custom.astro`, campo `datos_extra` o similar — ya existe el campo, solo se edita el label.)

---

## B. Catálogo de productos (`docs/catalog/catalogo.json`)

El cliente mandó specs actualizadas porque "cambiamos algunos talles y colores" respecto del
catálogo que ya está transcripto. Esto son **cambios de datos de producto confirmados por el
cliente**, no erratas a ignorar — se actualiza `catalogo.json` acorde.

### B1. Ultra Light Stock (`id: ultra-light-stock`)
- Talles: `30 al 47` → **`33 al 47`**
- Colores: `Negras con detalles cobre` → **`Negras con detalles dorados`**
- Anclaje 165mm: `30 al 34.5` → **`33 al 34.5`**
- (el resto de filas de anclaje —195mm 35-47, 165o195 34-36.5— no las menciona el cliente; a
  confirmar si quedan igual, ver D3)

### B2. Classic Stock (`id: classic-stock`)
- Talles: `32 al 47` → **`30 al 47`**

### B3. Núcleo (`id: nucleo`)
Esto **resuelve la errata que ya estaba flaggeada** en `meta.notas_de_transcripcion`:
- Talles: `30 al 47` → **`30 al 44`**
- Anclaje 195mm: `35 al 38.5` (con nota de errata) → **`35 al 44`**
- Sacar la nota de errata de `meta.notas_de_transcripcion` una vez aplicado.

### B4. F4 (`id: f4`)
- Colores: `["Negro/blanco", "Rosa/blanco", "Azul/blanco"]` →
  **`["Negro/Blanco", "Negro/Azul", "Negro/Fucsia", "Fucsia/Blanco", "Azul/Blanco"]`**
  (sacar Rosa/Blanco, agregar Negro/Azul, Negro/Fucsia, Fucsia/Blanco)
- En `destacados`: `"Tres colorways de fábrica"` → **`"Cinco colorways de fábrica"`**
- Nota: estos son los colores del *catálogo de producto*. Los colores del *formulario* (A5) usan
  otra nomenclatura ("Azules con tapas y talones blancos" vs "Negro/Azul") — son dos listas
  distintas, confirmar si deben decir lo mismo en ambos lados.

### B5. Ultra Light+ / UL+ semi-custom (`id: ultra-light-plus`)
- Capellada: agregar detalle completo — **"Microfibra, acolchados TSPS, refuerzos termoplásticos
  TG1 ultra livianos, cierre final con hebilla"** (hoy solo dice "Microfibra")
- Talles: `30 al 47` → **`35 al 47`**
- Anclaje: **sacar la fila de 165mm** (el cliente dice "Anclaje: Quitar 165mm")
- Anclaje "165 o 195mm": `34 al 36.5` → **`35 al 36.5`**
- Anclaje 195mm (35 al 47) queda igual.

### B6. Ultra Light semi-custom (`id: ultra-light-semicustom`, nombre "Ultra Light")
- Suela: `"Mismos materiales que Ultra Light Stock"` → especificar: **"Fibra de carbono (interior
  tejido biaxial), epoxy vacuum system, Ultra Light technology"**
- Capellada: `"Mismos materiales que Ultra Light Stock"` → **"Microfibra, acolchados TSPS,
  refuerzos termoplásticos TG1 ultra livianos, cierre final con hebilla"**
- Talles: `30 al 47` → **`34 al 47`**
- Anclaje: el cliente solo dio **"165mm: 34 y 34.5"** — no menciona 195mm ni 165o195mm. Ver D4
  antes de borrar las filas existentes.

### B7. Classic semi-custom (`id: classic-semicustom`)
Esto **resuelve el "verificar con el cliente" que ya estaba flaggeado** en
`meta.notas_de_transcripcion` (no declaraba talles propios):
- Suela: `null`/"mismos materiales" → **"Fibra de carbono (interior tejido biaxial), epoxy vacuum
  system"**
- Capellada → **"Microfibra, acolchados TSPS, refuerzos termoplásticos TG2. Cierre final con
  hebilla"**
- Talles: `null` → **`30 al 47`**
- Anclaje: `null` → **165mm: 30 al 34.5 / 195mm: 35 al 47 / 165 o 195mm: 34 al 36.5**
- Sacar la nota de "CLASSIC Semi Custom no declara talles propios..." de
  `meta.notas_de_transcripcion` una vez aplicado.

---

## C. Nosotros (sección "Sobre nosotros")

El spec `003-nosotros.md` ya tiene pendiente "confirmar con el cliente el set final de fotos del
carrusel" — las 6 fotos que mandaste son justo ese set. Van al carrusel de fotos de "Nosotros",
**en este orden** (collage al final, como pediste):

1. Foto de molde de yeso de pie (`IMG_20221030_095810_717.jpg`) — trabajo artesanal/horma
2. Foto de patinadora festejando con los brazos en alto, pista cubierta (`649845...jpeg`)
3. Foto de dos patinadores cruzando meta, maratón BMW Berlín (`4997217...jpeg`)
4. Foto de patinador con camiseta de Bélgica, festejando en ruta (`624718...jpeg`)
5. Foto de patinador de Colombia señalando, pista (`369630...jpeg`)
6. **Collage de 5 fotos de taller/producción (último)** — gente trabajando: puliendo, armando
   hormas, cortando materiales

Esto cierra el pendiente del spec. Falta: pedir las fotos en resolución más alta si el cliente las
tiene (las que llegaron ya están bien, pero el spec sugiere pedir el "set completo en alta
resolución").

---

## D. Dudas para el cliente antes de tocar código

1. **Fotos explicativas de vistas del pie (A2)**: no llegaron en este envío — ¿las manda aparte?
2. **"V3 Plus" (A4)**: ¿se refiere al modelo "V3" que ya existe en el formulario estándar, o hay un
   modelo "V3 Plus" que todavía no está en el sitio? Si es V3 a secas, ¿se borra también del
   catálogo o nunca estuvo ahí (confirmado: no está en `catalogo.json`, solo vive en el formulario)?
3. **Ultra Light Stock (B1)**: ¿las filas de anclaje 195mm (35-47) y 165o195mm (34-36.5) quedan
   igual, o también cambian?
4. **Ultra Light semi-custom (B6)**: el cliente solo mandó la fila de anclaje 165mm. ¿Las filas de
   195mm y 165o195mm se eliminan (como pasó con UL+ en B5) o se mantienen como están?
5. **Colores F4: catálogo vs. formulario (B4)**: ¿tienen que coincidir textualmente los nombres de
   color entre la ficha de producto y el formulario de compra, o son intencionalmente distintos?

---

## Cómo seguimos

Una vez que confirmes estas dudas (o me digas "dale, asumí lo que puse"), lo implemento por
bloques — probablemente en este orden: **B (catálogo)** primero porque es la fuente de datos,
después **A (formularios)** que depende de algunos de esos datos (F4), y por último **C
(Nosotros)** que es independiente.
