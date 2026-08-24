# pikuyoga.com

Sitio de **Piku Yoga** — 5 landings HTML estáticas. Sin CMS, sin build, sin dependencias.
Se publica con GitHub Pages sobre el dominio `pikuyoga.com` (registrado en Hostinger).

| Archivo | URL final | Producto |
|---|---|---|
| `index.html` | pikuyoga.com | Posgrado en Yoga (arranca 15/09) |
| `grupo-de-estudio.html` | pikuyoga.com/grupo-de-estudio.html | Grupo de estudio · **lleva `noindex`** |
| `clases-de-hatha-yoga.html` | pikuyoga.com/clases-de-hatha-yoga.html | Clases de Hatha Yoga online |
| `mentorias.html` | pikuyoga.com/mentorias.html | Mentorías creativas |
| `retiros.html` | pikuyoga.com/retiros.html | Retiros y experiencias |
| `assets/` | | Fotos (webp) y logo |

Las tipografías (Fraunces, Karla, Montserrat) se cargan desde Google Fonts.
Todo el CSS y el JS van embebidos en cada `.html`.

---

## 1. Crear el repo

Repositorio **público** llamado `pikuyoga` en la cuenta de GitHub de Agus.
GitHub Pages en plan Free sólo funciona con repos públicos; el contenido de una
landing es público de todos modos.

```bash
cd pikuyoga-repo
git init -b main
git add .
git commit -m "Sitio Piku Yoga"
git remote add origin git@github.com:USUARIO/pikuyoga.git
git push -u origin main
```

## 2. Activar Pages

En el repo → **Settings → Pages**:

- Source: **Deploy from a branch**
- Branch: `main` / `(root)` → Save
- Custom domain: `pikuyoga.com` → Save
  (el archivo `CNAME` de este repo ya lo deja configurado)
- Cuando GitHub termine de validar el dominio, tildar **Enforce HTTPS**
  (puede tardar hasta 24 h en habilitarse)

## 3. DNS en Hostinger

hPanel → Dominios → pikuyoga.com → **DNS / Nameservers**.

**Borrar** el registro `A` que hoy apunta al hosting de Hostinger, y cargar:

| Tipo | Nombre | Valor |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | USUARIO.github.io |

Los cuatro registros A son de GitHub y los cuatro se cargan (es balanceo, no
alternativas). La propagación suele tardar entre 15 minutos y unas horas.

## 4. Actualizar el sitio

Editar el `.html`, commit, push. Pages redeploya solo en menos de un minuto.

Precios y fechas están escritos directo en el HTML:
buscar `$160.000`, `$60.000`, `$45.000`, `$30.000`, `$50.000`, `USD 150`, `USD 200`
y `15 de septiembre` / `15 sep`.

---

## Límites de GitHub Pages

Ninguno nos aprieta: el sitio entero pesa ~1,1 MB.

- Repo fuente: 1 GB recomendado
- Sitio publicado: 1 GB máximo
- Ancho de banda: 100 GB/mes (límite blando)
- Builds: 10 por hora (límite blando)

## Pendiente

1. Testimonios de alumnas (falta el link al formulario).
2. Medio de pago: hoy todos los botones van a WhatsApp con mensaje precargado.
3. Imagen OG por página (1200×630) para cuando se comparte el link.
4. Pixel de Meta / Google Analytics, si se hacen campañas.
