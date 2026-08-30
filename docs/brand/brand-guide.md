# MC CARGO BOOTS — Guía de Marca para Desarrollo Web

> **Fuente:** Manual de Marca 2026 — MC Cargo Boots (Botas para patín carrera).
> **Propósito:** Documento de contexto para implementar el sitio web. Toda decisión visual y de contenido debe respetar estas reglas.
> **Erratas corregidas del manual original:** (1) El valor `#4BBFE0` que aparece en una lámina es una errata; el turquesa oficial es **`#00A0E3`**. (2) La combinación "turquesa sobre gris claro" está **PROHIBIDA** (el texto descriptivo que la acompañaba en el manual era un error de armado).

---

## 1. Identidad de marca

### Quiénes somos
Fábrica familiar argentina de botas de alta competición para patín carrera, con más de 30 años de experiencia (desde 1990). Liderada por **Sergio Mc Cargo**, ex-patinador de la selección nacional y ganador de varias medallas en mundiales. Técnico mecánico con formación en ingeniería, especialista en estructuras de fibra de carbono y PRFC.

### Diferencial
Combinación de conocimiento técnico-mecánico con experiencia deportiva competitiva, garantizando calidad y rendimiento excepcionales.

### Valores
Técnica, personalización, seriedad, transparencia y artesanía en cada producto.

### Compromiso
Servicio impecable y productos que reflejan pasión y dedicación por el deporte.

### Personalidad y tono de comunicación
- Técnica, seria, personalizada, honesta y artesanal.
- Comunica con **datos técnicos reales, sin exageraciones**.
- Muestra orgullo por el proceso; genera confianza sin arrogancia.
- **PROHIBIDO en copywriting:** exageraciones, promesas milagrosas, urgencias artificiales (ej. "¡última oportunidad!", "el mejor del mundo").
- Palabras clave de marca / slogan: **RENDIMIENTO · CALIDAD · TÉCNICA**

### Datos de producto (para contenido del sitio)
- Modelo destacado: **Ultra Light+** — sistema semi-custom, fibra de carbono con tecnología de vacío.
- Talles: **30 al 47**.
- Personalización de ajuste y colores según necesidades del cliente ("Consultar modelos" como CTA).

---

## 2. Sistema cromático

| Rol | Nombre | HEX | RGB | CMYK |
|---|---|---|---|---|
| **Primario dominante** | Gris Oscuro | `#111111` | 17 / 17 / 17 | 69 / 63 / 62 / 90 |
| **Neutro estructural** | Blanco | `#FFFFFF` | 255 / 255 / 255 | 0 / 0 / 0 / 0 |
| **Color identitario (acento)** | Turquesa | `#00A0E3` | 0 / 160 / 227 | 100 / 30 / 0 / 11 |
| **Complementario técnico** | Gris Claro | `#B0B0B0` | 176 / 176 / 176 | 0 / 0 / 0 / 31 |

### Reglas de uso por color
- **Gris Oscuro `#111111`:** color base dominante. Fondos principales, fondo del logo, piezas institucionales. Transmite seriedad, precisión y carácter premium. → **El sitio debe ser dark theme por defecto.**
- **Blanco `#FFFFFF`:** uso estructural. Textos principales sobre fondo oscuro. Aporta contraste, respiración visual y legibilidad. Versión negativa del logo.
- **Turquesa `#00A0E3`:** acento principal. Usar en íconos, líneas divisoras, CTAs, destacados y elementos gráficos. ⚠️ **REGLA DURA: nunca como fondo dominante. Máximo 20% de la superficie de cualquier pieza/pantalla. Solo para acentos cortos, nunca en párrafos.**
- **Gris Claro `#B0B0B0`:** textos secundarios, datos técnicos, especificaciones de producto, subtítulos e información complementaria. Fondos alternativos suaves.

### Regla general (memorizar)
> **El gris oscuro domina. El blanco comunica. El turquesa destaca. El gris complementa. Nunca invertir estos roles.**

### Combinaciones PROHIBIDAS
| Combinación | Motivo |
|---|---|
| Texto turquesa en párrafos largos | Turquesa solo para acentos cortos |
| Gris sobre turquesa | Sin contraste suficiente, ilegible |
| Turquesa sobre gris claro | Contraste insuficiente *(errata del manual: figura mal descripta, pero está en la lista de NO permitidas)* |
| Gris claro sobre blanco | Contraste insuficiente, se pierde completamente |

### Variables CSS sugeridas
```css
:root {
  --color-bg-primary: #111111;   /* dominante: fondos */
  --color-text-primary: #FFFFFF; /* textos principales */
  --color-accent: #00A0E3;       /* CTAs, íconos, divisores — máx 20% */
  --color-text-secondary: #B0B0B0; /* textos secundarios, specs */
}
```

---

## 3. Sistema tipográfico

### Jerarquía oficial
| Nivel | Fuente | Uso |
|---|---|---|
| **H1** | Blippo-Black Regular | Títulos principales |
| **H2** | Rajdhani-Black | Subtítulos, slogans, frases de impacto |
| **Body** | Poppins Regular | Texto corrido, contenido institucional |
| **Datos** | Poppins Medium | Información técnica, specs, fichas de producto |
| **Subtítulos intermedios** | Poppins SemiBold | Niveles de jerarquía intermedios |

### Reglas por tipografía
- **Blippo-Black (titular):**
  - Uso exclusivo para títulos principales.
  - Tracking recomendado: **+20 a +40** (en CSS: `letter-spacing: 0.02em` a `0.04em`).
  - **NO** usar en textos largos ni párrafos.
  - **NO** utilizar junto al logo; en ese caso reemplazar por Rajdhani.
- **Rajdhani-Black (subtítulos):**
  - Uso en **MAYÚSCULAS**.
  - Para slogans, frases de impacto y campañas.
- **Poppins (corporativa):** pesos autorizados únicamente Regular, Medium y SemiBold.

### Prohibiciones tipográficas
- ❌ No usar Blippo en párrafos.
- ❌ No deformar ni estirar letras (no `transform: scale()` no uniforme, no condensar artificialmente).
- ❌ No aplicar sombras ni efectos 3D a la tipografía.

### ⚠️ IMPORTANTE — Reemplazo temporal de Blippo Black
> **Blippo Black no está disponible como webfont gratuita.** Hasta contar con el archivo licenciado de la fuente, usar **[Righteous](https://fonts.google.com/specimen/Righteous)** (Google Fonts) como sustituto temporal para H1: es la display geométrica redondeada más cercana en carácter.
> **Esto es TEMPORAL y debe quedar señalizado en el código** (comentario `/* TODO: reemplazar Righteous por Blippo Black licenciada */`). La estructura tipográfica debe permitir el swap sin refactor (definir la fuente en una sola variable).

```css
/* Rajdhani y Poppins: disponibles en Google Fonts */
--font-h1: 'Righteous', sans-serif;      /* TODO TEMPORAL: reemplazar por Blippo Black */
--font-h2: 'Rajdhani', sans-serif;       /* usar weight 700 (Black no existe en GF; 700 es el máximo) */
--font-body: 'Poppins', sans-serif;      /* 400 Regular / 500 Medium / 600 SemiBold */
```

---

## 4. Sistema de logotipo

### Descripción del logo
Símbolo: dos picos angulares blancos (forma de montañas/alas) flanqueando un círculo turquesa `#00A0E3` con centro blanco. Debajo, el wordmark "mc cargo" en gris claro con símbolo ®.

### Versiones oficiales
| Versión | Uso |
|---|---|
| **Principal** (símbolo blanco + círculo turquesa + texto gris, sobre fondo oscuro) | **Uso prioritario.** Header del sitio, hero, footer |
| **Alternativas** (sobre fondo blanco) | Fondos institucionales / digital |
| **Monocromáticas** (gris, blanca, negra, outline) | Documentos, impresiones, escala de grises |
| **Isotipo** (solo símbolo, sin texto) | Favicon, ícono de redes sociales, marca de agua, superficies pequeñas. Versión oficial para bordados/estampados (ref. 25 mm) |

### Reglas de aplicación
- **Área de protección:** margen mínimo de 0,8 mm alrededor del logo en todas las direcciones (aplicar proporcionalmente en digital: nunca pegar el logo a otros elementos; reservar padding equivalente).
- **Tamaño mínimo digital: 120 px de ancho.** (Impreso: 30 mm.)
- Para el **favicon y avatares** usar el isotipo, nunca el logo completo.

### Usos INCORRECTOS (prohibidos)
- ❌ Cambiar el color del logo.
- ❌ Deformar (estirar/comprimir).
- ❌ Rotar.
- ❌ Agregar sombras.

### Assets requeridos
> ⚠️ El manual no incluye archivos vectoriales. **Solicitar al cliente los SVG/PNG oficiales** de: versión principal, alternativas, monocromáticas e isotipo. No recrear el logo desde cero en el código.

---

## 5. Identidad digital

- **Objetivo declarado:** identidad visual coherente con **estética oscura y premium, realzada por acentos turquesa**, para fortalecer el reconocimiento de marca y la conexión con la audiencia.
- **Sistema de íconos:** lineales (outline), trazo simple, en blanco o turquesa según jerarquía. Categorías usadas en redes: Nosotros, Garantía, Servicios, Productos (útiles como secciones del sitio).
- Íconos funcionales del sistema: envíos, packaging, regalo, calendario, compartir, descarga, pago, estadísticas, mail, web, notificaciones, mobile, etiqueta, horarios, carrito, difusión, compras.
- Fotografía: imágenes reales de competición y podios (contexto deportivo auténtico, coherente con el tono "sin exageraciones").

---

## 6. Checklist de implementación web

1. [ ] Dark theme por defecto: fondo `#111111`, texto `#FFFFFF`.
2. [ ] Turquesa `#00A0E3` solo en CTAs, íconos, divisores y destacados — auditar que no supere ~20% de la pantalla.
3. [ ] Verificar que no exista ninguna combinación prohibida de la tabla del punto 2.
4. [ ] Tipografías vía variable CSS única por nivel; Righteous marcada como TEMPORAL.
5. [ ] Rajdhani en H2 siempre en MAYÚSCULAS (`text-transform: uppercase`).
6. [ ] Logo ≥120 px de ancho, con área de respiro, sin filtros/sombras/rotaciones.
7. [ ] Favicon = isotipo.
8. [ ] Copywriting: técnico, honesto, sin superlativos vacíos ni urgencias artificiales.
9. [ ] Contenido mínimo: historia (desde 1990, Sergio Mc Cargo), Ultra Light+ (fibra de carbono, vacío, talles 30–47), personalización, garantía, contacto.
10. [ ] Solicitar assets: SVGs del logo (4 versiones) y fuente Blippo Black licenciada.

---
*Nota: se excluyeron deliberadamente los datos de contacto que figuran en la última página del PDF por pertenecer a la agencia autora del manual (Marketing KAI), no a MC Cargo Boots.*
