# pikuyoga.com

Sitio de **Piku Yoga** — landings HTML estáticas. Sin CMS, sin build, sin dependencias.
Se publica con GitHub Pages sobre el dominio `pikuyoga.com` (registrado en Hostinger).

| Archivo | URL final | Propuesta |
|---|---|---|
| `index.html` | pikuyoga.com | **Home** — índice de las propuestas |
| `yogaesencial/index.html` | pikuyoga.com/yogaesencial | Instructorado en Yoga Esencial · 6 meses (mar–ago) |
| `posgrado/index.html` | pikuyoga.com/posgrado | Posgrado en Yoga Esencial · 3 meses (sep–nov) |
| `yoganidra/index.html` | pikuyoga.com/yoganidra | Curso de Yoga Nidra · 4 encuentros |
| `mentorias.html` | pikuyoga.com/mentorias.html | Mentorías creativas |
| `grupo-de-estudio.html` | pikuyoga.com/grupo-de-estudio.html | Grupo de estudio y prácticas docentes |
| `clases-de-hatha-yoga.html` | pikuyoga.com/clases-de-hatha-yoga.html | Clases de Hatha Yoga online |
| `retiros.html` | pikuyoga.com/retiros.html | Retiros y experiencias |
| `assets/` | | Fotos (webp), logo e imágenes de compartir (`og-*.jpg`) |
| `robots.txt` | pikuyoga.com/robots.txt | Permisos de rastreo, incluidos los bots de IA |
| `sitemap.xml` | pikuyoga.com/sitemap.xml | Mapa del sitio para los buscadores |
| `llms.txt` | pikuyoga.com/llms.txt | Resumen del sitio en texto plano para buscadores con IA |
| `i18n/` | | Traducciones (no las carga ninguna página todavía) |

El orden de la tabla es el orden de importancia de las propuestas.
Todo el CSS y el JS van embebidos en cada `.html`.

## Lenguaje visual

Desde el 09/11/2026 las seis páginas comparten el mismo sistema (diseños aprobados por Agus):
fondo crema `#FBF1E8`, tinta azul `#13304A`, botones verde azulado `#1D5E6E`, lila `#A98BC4`
(subrayado de pincel, barras de título, tarjeta destacada) y celeste `#DDE8EE` (bandas y pastillas).
Tipografía Nunito. Adornos de hojas a los lados de los títulos y loto en las bandas.

## Estructura de Yoga Esencial (desde 11/2026)

Dos etapas que se venden juntas o por separado:

- **Instructorado** — 6 meses, marzo a agosto. Historia y filosofía, chakras, asanas,
  pranayamas, meditación, pedagogía. Sin formación previa.
- **Posgrado** — 3 meses, septiembre a noviembre. Yoga Nidra, Yoga con elementos, Yoga en silla.

El **encuentro presencial en Buenos Aires** (al cerrar el instructorado) y el **retiro en
Villa de Merlo, San Luis** (diciembre) son **optativos**, se pagan aparte y tienen fecha y
valor a definir. El retiro vale para las dos etapas. Si el encuentro no es posible, se
coordina supervisión personalizada online.

Los módulos del Posgrado se venden también como cursos sueltos (el de Yoga Nidra ya tiene
página propia). Lo pagado por un curso suelto se descuenta de la primera cuota del Posgrado.

## Precios (lista enero 2027)

| | Valor |
|---|---|
| Instructorado · 6 cuotas | $143.000 + matrícula $85.000 = $943.000 |
| Instructorado · 2 pagos | $390.000 ×2 + matrícula = $865.000 |
| Instructorado · 1 pago | $720.000 + matrícula = $805.000 |
| Posgrado · 3 cuotas | $143.000 + matrícula $45.000 = $474.000 |
| Posgrado · 1 pago | $395.000 + matrícula = $440.000 |
| Camino completo (los dos juntos) | $1.290.000 |
| Curso suelto (Yoga Nidra) | $80.000 |
| Grupo de estudio | $62.000 por mes |
| Clases de Hatha Yoga | $48.000 por mes |
| Mentoría suelta / proceso de 4 | $65.000 / $220.000 |
| Retiros (B2B) | A convenir · presupuesto por retiro |

Las cuotas son fijas. **Revisar la lista en julio**: con la inflación vigente, una lista
de enero vale ~23% menos en diciembre.

**Los precios no se muestran en el home.** Cada página de producto los muestra recién
después del programa, y en la pregunta «¿cuánto sale?». Retiros no lleva precio en
ninguna parte: se cotiza por retiro.

## Baja del Posgrado mensual

El Posgrado en Yoga se discontinuó en noviembre de 2026. Ocupaba el `index.html`,
así que no quedó ninguna URL rota. Se quitaron todas las menciones de las otras
páginas (nav, footer y bloques de "otras propuestas"), reemplazadas por Yoga Esencial.
El contenido viejo está en el historial de git, en el commit anterior al de la baja.

## SEO

Las ocho páginas llevan:

- `<title>` y `description` escritos por intención de búsqueda, `canonical`, `og:*` completo
  (con imagen propia de 1200×630 en `assets/og-*.jpg`) y `twitter:card`.
- **Datos estructurados JSON-LD** en un `@graph`: `Organization`, `Person` (Piku),
  `WebSite`, `WebPage`, `BreadcrumbList`, `Course` + `CourseInstance` + `Offer`
  (o `Service` en mentorías y retiros) y `FAQPage`.
- Una sección visible de **preguntas frecuentes** al pie, con las mismas preguntas y
  respuestas que el `FAQPage`. **Si se edita una, hay que editar las dos.**
- Una línea «Actualizado el …» al cierre de las preguntas. Conviene refrescarla cuando
  se tocan precios o fechas: la frescura cuenta para los buscadores con IA.

No se marcan `AggregateRating` ni `Review`: los testimonios vienen de un formulario de
devolución del curso, sin puntaje ni permiso de publicación, así que inventar estrellas
sería falsear datos.

## Actualizar el sitio

Editar el `.html`, commit, push. Pages redeploya solo en menos de un minuto.

Precios y fechas están escritos directo en el HTML, y además en el JSON-LD y en
`llms.txt`. Al cambiar un precio hay que tocar los tres. Buscar: `$720.000`, `$390.000`,
`$143.000`, `$395.000`, `$1.290.000` (Yoga Esencial), `$80.000` (Yoga Nidra),
`$65.000` / `$220.000` (mentorías), `$62.000` (grupo), `$48.000` (clases).

## DNS

hPanel de Hostinger → Dominios → pikuyoga.com → DNS.
Cuatro registros A de GitHub (185.199.108–111.153), cuatro AAAA
(2606:50c0:8000–8003::153) y un CNAME `www` → `calcagnoagustin.github.io`.
**No tocar los registros de correo** (MX de Hostinger, SPF, DKIM, autodiscover, autoconfig).

## Pendiente

1. Medio de pago: hoy todos los botones van a WhatsApp con mensaje precargado.
2. Píxel de Meta / Google Analytics: sin esto no se puede medir de dónde llega la gente.
3. Google Business Profile y consistencia de nombre en la web: es lo que más mueve la
   aguja para que los buscadores con IA reconozcan la marca como entidad.
4. Google Search Console: dar de alta el dominio y subir el sitemap.
5. Link en la bio de Instagram (hoy no hay ninguno).
6. URLs sin `.html` para las cuatro viejas (una carpeta por página, como `yogaesencial/`).
7. Definir qué pasa con `i18n/`: hay 30 JSON con traducciones a 5 idiomas y 455
   atributos `data-e` en el HTML viejo, pero ninguna página los carga. Mientras tanto
   `robots.txt` los deja fuera del rastreo.
8. Confirmar la fecha exacta de arranque del instructorado: el JSON-LD dice
   **2027-03-02** (primer martes de marzo) como supuesto.
9. Qué dice el certificado del instructorado: hasta saberlo no se declara ninguna
   credencial en los datos estructurados ni en el texto.
