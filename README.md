# pikuyoga.com

Sitio de **Piku Yoga** — landings HTML estáticas. Sin CMS, sin build, sin dependencias.
Se publica con GitHub Pages sobre el dominio `pikuyoga.com` (registrado en Hostinger).

| Archivo | URL final | Propuesta |
|---|---|---|
| `index.html` | pikuyoga.com | **Home** — índice de las propuestas |
| `yogaesencial/index.html` | pikuyoga.com/yogaesencial | Yoga Esencial · formación anual 2027 |
| `mentorias.html` | pikuyoga.com/mentorias.html | Mentorías creativas |
| `grupo-de-estudio.html` | pikuyoga.com/grupo-de-estudio.html | Grupo de estudio y prácticas docentes |
| `retiros.html` | pikuyoga.com/retiros.html | Retiros y experiencias |
| `clases-de-hatha-yoga.html` | pikuyoga.com/clases-de-hatha-yoga.html | Clases de Hatha Yoga online |
| `assets/` | | Fotos (webp) y logo |
| `i18n/` | | Traducciones (no las carga ninguna página todavía) |

El orden de la tabla es el orden de importancia de las propuestas.
Todo el CSS y el JS van embebidos en cada `.html`.

## Dos lenguajes visuales

El sitio está en migración.

- **Nuevo** (home y Yoga Esencial): fondo crema, amarillo, Nunito + Karla + IBM Plex Mono,
  bordes redondeados, adornos dibujados.
- **Viejo** (las otras cuatro): fondo tinta, Fraunces + Karla + Montserrat, coral y barro.

Falta pasar las cuatro páginas viejas al sistema nuevo.

## Baja del Posgrado en Yoga

El Posgrado en Yoga se discontinuó en noviembre de 2026. Ocupaba el `index.html`,
así que no quedó ninguna URL rota. Se quitaron todas las menciones de las otras
páginas (nav, footer y bloques de "otras propuestas"), reemplazadas por Yoga Esencial.
El contenido viejo está en el historial de git, en el commit anterior al de la baja.

## Actualizar el sitio

Editar el `.html`, commit, push. Pages redeploya solo en menos de un minuto.

Precios y fechas están escritos directo en el HTML. Buscar:
`$900.000`, `$130.000`, `$500.000`, `$1.170.000`, `$60.000` (Yoga Esencial),
`$50.000` (mentorías), `$45.000` (grupo), `$30.000` (clases), `USD 150` / `USD 200` (retiros).

## DNS

hPanel de Hostinger → Dominios → pikuyoga.com → DNS.
Cuatro registros A de GitHub (185.199.108–111.153), cuatro AAAA
(2606:50c0:8000–8003::153) y un CNAME `www` → `calcagnoagustin.github.io`.
**No tocar los registros de correo** (MX de Hostinger, SPF, DKIM, autodiscover, autoconfig).

## Pendiente

1. Pasar las cuatro landings viejas al lenguaje visual nuevo.
2. Medio de pago: hoy todos los botones van a WhatsApp con mensaje precargado.
3. Imagen OG por página (1200×630) para cuando se comparte el link.
4. Píxel de Meta / Google Analytics.
5. Testimonios de alumnas (falta el link al formulario).
6. URLs sin `.html` para las cuatro viejas (una carpeta por página, como `yogaesencial/`).
7. Definir qué pasa con `i18n/`: hay 30 JSON con traducciones a 5 idiomas y 455
   atributos `data-e` en el HTML viejo, pero ninguna página los carga.
   `index.*.json` quedó huérfano al reemplazarse el home.
