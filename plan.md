# Migración a Hugo: landing page + blog + CV para alejandroaliaga.com

> Documento vivo de la migración. Se actualiza en cada iteración (rama `feature/hugo-migration`, sin tocar `main`/producción hasta el cutover final).

## Estado actual

- [x] Fase 1 — Andamiaje del proyecto Hugo (rama creada, Hugo inicializado, `hugo.toml`, `static/CNAME`, workflow de Actions creado pero dormido, sitio legacy movido a `legacy-site/`)
- [x] Fase 2 — Migración de datos del CV (`data/cv.yaml`, `data/social.yaml`, página `/cv/` funcional con layout base provisional)
- [x] Fase 3 — Theme propio: sistema de diseño base (paleta "Verdigris Stone": piedra oscura + acento verdín, **solo modo oscuro**, tarjetas de blog rediseñadas, iconos de redes sociales)
- [x] Fase 4 — Secciones de contenido (Home, Proyectos, Charlas y Publicaciones, Contacto)
- [x] Fase 5 — Blog (listado paginado, artículo, tags, RSS, 2 artículos de ejemplo)
- [x] Fase 6 — SEO, metadatos y pulido final (OG/Twitter cards, robots.txt, favicon, accesibilidad)
- [ ] Fase 7 — Despliegue y cutover

## Contexto

Actualmente `alexbogus.github.io` es una única página HTML/CSS/JS estática (`legacy-site/index.html`, `legacy-site/style.css`, `legacy-site/script.js`) que actúa como currículum online, con dominio personalizado `alejandroaliaga.com` vía CNAME. El objetivo es evolucionar esto hacia una landing page profesional completa que combine:

- Presentación personal / marca (Alejandro Aliaga Casanova — Strategic SOC Advisor & CTO)
- Enlaces a redes sociales
- Currículum (experiencia, skills, certificaciones)
- Proyectos, charlas y publicaciones
- Blog de artículos propios (nuevo)
- Contacto

Se sustituye la solución HTML manual por **Hugo**, generando el sitio con datos estructurados y desplegándolo automáticamente en GitHub Pages vía GitHub Actions, manteniendo `alejandroaliaga.com` como dominio canónico. El diseño se rehace por completo desde cero (theme propio), solo modo oscuro, sin analytics por ahora.

## Decisiones ya tomadas

| Decisión | Elección |
|---|---|
| Generador estático | **Hugo** (Extended, para soportar Sass/SCSS) |
| Contenido del CV | Datos estructurados (YAML/TOML) + templates Hugo, no HTML a mano |
| Enfoque de diseño | Rediseño completo, theme propio desde cero |
| Estética | Solo modo oscuro (sin selector — decisión posterior que revierte el plan inicial de híbrido claro/oscuro), paleta "Verdigris Stone": piedra oscura cálida + acento verdín/pátina oxidada |
| Hero (home) | Fondo fotográfico a pantalla completa (montaña nevada al atardecer) con overlay, en vez de retrato — decisión posterior que sustituye la idea inicial de foto de Alejandro |
| Tarjetas de blog | Imagen destacada por artículo (formato tipo mahmoudnabhan.com) — **pendiente de imágenes reales, hay fallback visual mientras tanto** |
| Blog | Básico + tags/categorías + RSS (sin comentarios de momento) |
| Secciones del sitio | Home, redes sociales, CV, blog, contacto, proyectos, charlas, publicaciones |
| Idioma | Solo español (sin i18n por ahora) |
| Dominio canónico | `alejandroaliaga.com` (CNAME ya existe) |
| Despliegue | GitHub Actions → GitHub Pages (build automático en cada push a `main`) |
| Analytics | Ninguno por ahora |

## Referencias de diseño

1. **NeuroSync — Master Your Mind** (Neuform, Meng To). Estética de dashboard/bento grid. Tipografía Inter + JetBrains Mono, grid de 8px, radios 8px/pill.
2. **Lumina — Brand Guidelines** (Neuform, Meng To). Hero atmosférico, misma base tipográfica y de espaciado que NeuroSync.
3. **mahmoudnabhan.com** (sección blog). Tarjetas de artículo con imagen destacada, categoría (eyebrow) en mayúsculas, título, fecha + tiempo de lectura con iconos, sobre fondo oscuro no-negro puro. Adoptado como base del listado de blog (`layouts/partials/post-card.html`).
4. **Imagen de referencia de retrato ilustrado** (aportada por el usuario). Descartada como estilo final tras cuestionar el encaje con el posicionamiento ejecutivo (CISO/CTO fraccional) — se sustituye por una foto real con tratamiento de color, más coherente con credibilidad de asesor senior.

5. **Comparativa "Paletas ejecutivas"** (artifact generado para decidir la dirección de color, 8 opciones en 2 rondas: Navy Steel, Graphite Cobalt, Slate Emerald, Charcoal Burgundy, Ink Violet, Verdigris Stone, Obsidian Clay, Quiet Chrome). El usuario descartó el ámbar inicial por no transmitir suficiente "ejecutivo/tech" y, tras ver las 8 alternativas, eligió **F · Verdigris Stone**.

**Síntesis final aplicada en la Fase 3 (paleta F · Verdigris Stone)**: fondo piedra oscura cálida no-negro (`#1a1815`), **solo modo oscuro** (se retiró el modo claro y el toggle tras revisión de diseño); acento verdín/pátina oxidada (`#6fa893`); tipografía Inter (texto) + JetBrains Mono (metadatos/labels/eyebrows); grid de espaciado de 8px; radios 8px (tarjetas/controles) y pill (badges/botones/tags); motion sutil (hover lift, transiciones 180ms); iconos SVG propios (`layouts/partials/social-icon.html`) para LinkedIn/GitHub/email en vez de solo texto.

## Arquitectura del sitio

```
/
├── .github/workflows/hugo.yml     # build + deploy a GitHub Pages (dormido hasta el cutover)
├── hugo.toml                      # configuración del sitio
├── content/
│   ├── _index.md                  # Home
│   ├── cv/_index.md                # Página de CV (renderiza desde data/)
│   ├── proyectos/                  # Proyectos (bundle de páginas o lista simple)
│   ├── charlas-publicaciones/_index.md
│   ├── blog/
│   │   ├── _index.md
│   │   └── mi-primer-articulo.md
│   └── contacto/_index.md
├── data/
│   ├── cv.yaml                     # experiencia, skills, certificaciones, idiomas
│   ├── social.yaml                 # enlaces a redes sociales
│   └── proyectos.yaml (o content bundles si necesitan texto largo)
├── layouts/
│   ├── _default/                   # baseof, single, list
│   ├── partials/                   # header, footer, hero, timeline, skill-bars, etc.
│   ├── index.html                  # home a medida
│   └── cv/single.html              # layout específico del CV
├── assets/
│   ├── scss/                       # estilos propios (Hugo Pipes + SCSS, solo modo oscuro)
│   └── js/                         # JS mínimo (menú móvil)
├── static/
│   ├── CNAME
│   ├── favicon...
│   └── cv-alejandro-aliaga.pdf (si se mantiene descarga de PDF)
├── legacy-site/                    # sitio actual en producción, referencia de contenido (se retira al hacer cutover)
└── README.md
```

Puntos clave de la arquitectura:
- **CV como datos**: `data/cv.yaml` contendrá `about`, `experience[]`, `skills{core, technical, languages}`, `certifications[]` — la página `/cv/` los renderiza con un layout dedicado. Esto reutiliza directamente el contenido ya existente en `legacy-site/index.html` (timeline de experiencia, skills con barras, certificaciones, publicaciones).
- **Proyectos / Charlas / Publicaciones**: se migran a `data/publicaciones.yaml` o a content bundles si en el futuro cada charla merece su propia página con más detalle.
- **Blog**: sección estándar de Hugo (`content/blog/`), con `_index.md` como listado, cada artículo en Markdown, tags como taxonomía nativa de Hugo, y RSS nativo de Hugo.
- **Solo modo oscuro**: variables CSS (custom properties) en `:root`, sin toggle ni modo claro (decisión tomada tras revisar el diseño en la Fase 3).
- **Sin build tool de Node**: se usa Hugo Pipes (SCSS→CSS, minificación, fingerprinting) nativo de Hugo.

## Plan de implementación por fases

### Fase 1 — Andamiaje del proyecto Hugo ✅
- Rama `feature/hugo-migration` creada; `main`/producción sin cambios.
- Proyecto Hugo inicializado (`hugo new site .`), Hugo Extended 0.164.0 instalado localmente.
- `hugo.toml` configurado: baseURL `https://alejandroaliaga.com/`, idioma `es-es`, menú principal, taxonomía `tags`, salida RSS.
- `CNAME` movido a `static/CNAME`.
- Workflow `.github/workflows/hugo.yml` creado (build + `actions/deploy-pages`), dispara solo en push a `main` — dormido mientras seguimos en la rama.
- Sitio legacy (`index.html`, `style.css`, `script.js`) movido a `legacy-site/` como referencia de contenido para las siguientes fases.
- `plan.md` añadido en la raíz del repo.

### Fase 2 — Migración de datos del CV ✅
- Contenido de `legacy-site/index.html` extraído a `data/cv.yaml` (about, experiencia, skills, certificaciones, publicaciones) y `data/social.yaml` (email, LinkedIn, GitHub, ubicación).
- Layout base creado: `layouts/_default/baseof.html` + partials `head`/`header`/`footer`, y `layouts/cv/single.html` que renderiza `/cv/` desde `data/cv.yaml` (timeline de experiencia, barras de skills, grid de certificaciones, publicaciones).
- Home provisional (`layouts/index.html`) añadida para poder navegar durante la iteración; se sustituirá por el diseño definitivo en la Fase 4.
- Estilos actuales (`assets/scss/main.scss`) son **solo provisionales**, únicamente para legibilidad — el sistema de diseño real se define en la Fase 3.
- Botón "Descargar/Imprimir CV" implementado con `window.print()`; pendiente afinar una hoja de estilos `@media print` dedicada cuando se cierre el diseño.
- Verificado con `hugo server`: `/` y `/cv/` responden 200 y el contenido se renderiza correctamente desde YAML.

### Fase 3 — Theme propio: sistema de diseño base ✅
- Tokens de diseño en `assets/scss/main.scss` vía CSS custom properties (`:root` = oscuro por defecto, `:root[data-theme='light']` = claro): color, tipografía (Inter + JetBrains Mono), espaciado de 8px, radios, sombra, transición.
- Toggle de tema (`layouts/partials/header.html` + `assets/js/site.js`): botón sol/luna, persiste preferencia en `localStorage`, script inline en `<head>` evita parpadeo (FOUC) al cargar.
- Menú móvil con botón hamburguesa, mismo `assets/js/site.js`, sin dependencias externas.
- Hero de la home (`layouts/index.html`) **rehecho** (tras probar primero el enfoque de retrato) como fondo fotográfico a pantalla completa: foto de montaña nevada al atardecer (`assets/images/hero-bg.jpg`, procesada con `resources.Resize "2400x q82"` — de 7.2MB original a ~130KB servido) con overlay degradado para legibilidad del texto. Usa colores propios fijos (`--hero-text`, `--hero-accent`, etc.), independientes del resto del sitio.
- Tarjetas de blog (`layouts/partials/post-card.html`, reutilizado en listado y páginas de tag) rediseñadas al estilo de mahmoudnabhan.com: imagen de portada (`Resources.GetMatch "cover*"` en el page bundle) con fallback a un bloque con gradiente + primer tag, eyebrow de categoría, título, resumen, fecha y tiempo de lectura con iconos — **pendiente que se añadan imágenes de portada reales por artículo** (mientras tanto el fallback ya es visualmente coherente, no hay huecos rotos).
- Paleta cambiada de un acento ámbar/dorado inicial a **F · Verdigris Stone** (piedra oscura + acento verdín/pátina oxidada) tras comparar 8 direcciones ejecutivas en un artifact dedicado — ver sección "Referencias de diseño".
- **Modo claro retirado**: tras revisar el resultado, se decidió dejar el sitio solo en oscuro — se eliminaron el toggle de tema (`theme-toggle`), los tokens `:root[data-theme='light']`, el script anti-parpadeo en `<head>` y la lógica JS asociada.
- **Iconos de redes sociales**: nuevo partial `layouts/partials/social-icon.html` (LinkedIn, GitHub, email en SVG) usado en footer, home y `/contacto/`, sustituyendo los enlaces de solo texto.
- Verificado visualmente con `hugo server` + Chrome: home (hero con foto, móvil 390×844), blog (lista y artículo), CV, contacto (iconos), menú móvil.
- **Pendiente explícito**: imagen de portada por artículo de blog (`content/blog/<slug>/cover.jpg` como page bundle, o adaptar a `assets/images/blog/<slug>.jpg` si se prefiere fuera de page bundles).

### Fase 4 — Secciones de contenido ✅
- Home (`content/_index.md` + `layouts/index.html`): hero, sección "Sobre mí" (`id="about"`, ancla usada por el menú), redes sociales, y bloque "Explora" con accesos a CV/Proyectos/Charlas y Publicaciones/Blog.
- Proyectos (`content/proyectos/` + `layouts/proyectos/{list,single}.html`): sección funcional como páginas Markdown independientes (no YAML), con estado vacío ("Próximamente...") mientras no haya proyectos reales cargados. Se añadió `archetypes/proyectos.md` para crear nuevas entradas fácilmente (`hugo new proyectos/nombre-proyecto.md`).
  - **Pendiente del usuario**: aún no hay proyectos reales cargados — cuando Alejandro tenga contenido (iniciativas, colaboraciones destacadas) se añaden como páginas nuevas.
- Charlas y Publicaciones (`content/charlas-publicaciones/` + `layouts/charlas-publicaciones/list.html`): reutiliza `data/cv.yaml → publications` (misma fuente que la sección de certificaciones del CV, sin duplicar datos).
- Contacto (`content/contacto.md` + `layouts/contacto/single.html`): email, LinkedIn, GitHub, ubicación y mensaje "abierto a oportunidades" — ahora centralizado en `data/social.yaml → open_to` y reutilizado también por el footer global.
- Nota: el enlace "Blog" del menú/home apunta a `/blog/`, que aún no existe (404) — se construye en la Fase 5.

### Fase 5 — Blog ✅
- `content/blog/_index.md` como listado paginado (`layouts/blog/list.html`, vía `.Paginate`).
- `layouts/blog/single.html`: artículo con fecha, tiempo de lectura (`.ReadingTime`) y tags enlazados a su página de taxonomía.
- `layouts/_default/taxonomy.html` (`/tags/`) y `layouts/_default/term.html` (`/tags/<tag>/`) para navegar por etiquetas.
- RSS verificado en `/blog/index.xml` (nativo de Hugo, sin plantilla adicional).
- `archetypes/blog.md` para crear artículos nuevos fácilmente (`hugo new blog/nombre-articulo.md`).
- 2 artículos de ejemplo publicados para validar el flujo completo: "Del SOC táctico al SOC estratégico" y "CISO fraccional: cuándo tiene sentido para una organización".
- Build de producción sin warnings por primera vez (ya no falta ninguna plantilla).

### Fase 6 — SEO, metadatos y pulido final ✅
- `sitemap.xml` nativo de Hugo (ya se generaba, verificado).
- `robots.txt` personalizado (`layouts/robots.txt`): `Allow: /` + referencia al sitemap (el por defecto de Hugo era solo `User-agent: *`).
- Meta tags Open Graph y Twitter Card por página (`layouts/partials/head.html`): título, descripción, `og:type` (website/article), imagen — usa la portada del artículo si existe (page bundle) o si no, un recorte 1200×630 del `hero-bg.jpg` como fallback de marca consistente.
- `theme-color` (`#1a1815`) y favicon propio (`static/favicon.svg`, el icono de escudo del sitio anterior recoloreado al acento verdín actual).
- Accesibilidad: contraste de texto revisado y corregido (`--text-muted` subido de 4.3:1 a 4.9:1 sobre fondo para cumplir AA), `:focus-visible` con outline de acento en toda la web, skip-link ("Saltar al contenido") verificado por teclado, `aria-label` en la navegación principal y en el botón de menú móvil.
- **Pendiente / recomendado**: correr un pase de Lighthouse/PageSpeed real desde Chrome DevTools una vez desplegado en `alejandroaliaga.com` (Fase 7) — no se ejecutó en este entorno por no depender de instalar tooling adicional, pero las bases (imágenes optimizadas, meta tags, accesibilidad) ya están cubiertas.

### Fase 7 — Despliegue y cutover
- Probar el sitio completo en local (`hugo server`) y con un build de Actions en una PR desde `feature/hugo-migration` antes de tocar producción.
- Configurar GitHub Pages para desplegar desde Actions.
- Merge de `feature/hugo-migration` a `main` solo cuando el sitio esté validado.
- Retirar `legacy-site/` una vez confirmado el cutover.
- Confirmar que `alejandroaliaga.com` sigue resolviendo correctamente vía HTTPS.

## Verificación
- `hugo server -D` en local para revisar cada fase visualmente (incluye borradores).
- `hugo --gc --minify` para validar que el build de producción no tiene errores antes de cada push.
- Revisar el workflow de GitHub Actions en la pestaña "Actions" tras el cutover para confirmar el despliegue.
- Comprobar en el navegador: RSS, sitemap, y que `alejandroaliaga.com` sirve el sitio correctamente vía HTTPS.
