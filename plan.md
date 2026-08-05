# Migración a Hugo: landing page + blog + CV para alejandroaliaga.com

> Documento vivo de la migración. Se actualiza en cada iteración (rama `feature/hugo-migration`, sin tocar `main`/producción hasta el cutover final).

## Estado actual

- [x] Fase 1 — Andamiaje del proyecto Hugo (rama creada, Hugo inicializado, `hugo.toml`, `static/CNAME`, workflow de Actions creado pero dormido, sitio legacy movido a `legacy-site/`)
- [x] Fase 2 — Migración de datos del CV (`data/cv.yaml`, `data/social.yaml`, página `/cv/` funcional con layout base provisional)
- [ ] Fase 3 — Theme propio: sistema de diseño base (pospuesta hasta tener más referencias visuales; se sigue con estilos provisionales)
- [x] Fase 4 — Secciones de contenido (Home, Proyectos, Charlas y Publicaciones, Contacto)
- [x] Fase 5 — Blog (listado paginado, artículo, tags, RSS, 2 artículos de ejemplo)
- [ ] Fase 6 — SEO, metadatos y pulido final
- [ ] Fase 7 — Despliegue y cutover

## Contexto

Actualmente `alexbogus.github.io` es una única página HTML/CSS/JS estática (`legacy-site/index.html`, `legacy-site/style.css`, `legacy-site/script.js`) que actúa como currículum online, con dominio personalizado `alejandroaliaga.com` vía CNAME. El objetivo es evolucionar esto hacia una landing page profesional completa que combine:

- Presentación personal / marca (Alejandro Aliaga Casanova — Strategic SOC Advisor & CTO)
- Enlaces a redes sociales
- Currículum (experiencia, skills, certificaciones)
- Proyectos, charlas y publicaciones
- Blog de artículos propios (nuevo)
- Contacto

Se sustituye la solución HTML manual por **Hugo**, generando el sitio con datos estructurados y desplegándolo automáticamente en GitHub Pages vía GitHub Actions, manteniendo `alejandroaliaga.com` como dominio canónico. El diseño se rehace por completo desde cero (theme propio), con soporte de modo claro/oscuro, sin analytics por ahora.

## Decisiones ya tomadas

| Decisión | Elección |
|---|---|
| Generador estático | **Hugo** (Extended, para soportar Sass/SCSS) |
| Contenido del CV | Datos estructurados (YAML/TOML) + templates Hugo, no HTML a mano |
| Enfoque de diseño | Rediseño completo, theme propio desde cero |
| Estética | Híbrido: diseño moderno neutro con selector claro/oscuro |
| Blog | Básico + tags/categorías + RSS (sin comentarios de momento) |
| Secciones del sitio | Home, redes sociales, CV, blog, contacto, proyectos, charlas, publicaciones |
| Idioma | Solo español (sin i18n por ahora) |
| Dominio canónico | `alejandroaliaga.com` (CNAME ya existe) |
| Despliegue | GitHub Actions → GitHub Pages (build automático en cada push a `main`) |
| Analytics | Ninguno por ahora |

## Referencias de diseño (en curso)

El usuario está recopilando sitios/plantillas de referencia que le resultan visualmente atractivos, para converger en la dirección visual del theme propio (Fase 3). Se documentan aquí a medida que se analizan, hasta fijar una síntesis final.

1. **NeuroSync — Master Your Mind** (Neuform, Meng To). Estética de dashboard/bento grid con paneles de datos. Paleta: primario terracota/óxido `#CC8066`, acento pizarra `#334155`, superficie oscura `#191C21` sobre fondo blanco. Tipografía Inter + JetBrains Mono. Espaciado base 8px, radios 8px (pill en badges). Motion: masked reveals, entradas escalonadas, hover lift, transiciones al scroll. **Relevancia**: la estética de paneles de datos podría encajar para representar skills/métricas del CV de forma más visual que las barras actuales.
2. **Lumina — Brand Guidelines** (Neuform, Meng To). Hero atmosférico con efectos WebGL/gradientes/dither. Paleta: primario ámbar `#FDBA74`, acento pizarra fría `#475569`, superficie oscura `#11151D` sobre fondo blanco. Misma tipografía y sistema de espaciado que NeuroSync. **Relevancia**: tratamiento de hero muy visual e inmersivo, útil para la portada de la landing.

**Patrones convergentes entre ambas referencias** (candidatos a base del theme): Inter + JetBrains Mono (ya usado en el sitio actual), fondo claro con superficies oscuras tipo panel (compatible con el modo híbrido claro/oscuro decidido), grid de 8px, esquinas de 8px/pill, movimiento sutil y contenido.

*(Pendiente: más referencias antes de fijar la síntesis final de paleta/composición.)*

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
│   ├── scss/                       # estilos propios (Hugo Pipes + SCSS, modo claro/oscuro)
│   └── js/                         # JS mínimo (toggle de tema, menú móvil)
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
- **Modo claro/oscuro**: variables CSS (custom properties) + `prefers-color-scheme` como valor por defecto, con un toggle JS que persiste la preferencia en `localStorage`.
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

### Fase 3 — Theme propio: sistema de diseño base
- **Proceso de diseño iterativo**: el usuario comparte sitios web de referencia; se analiza cada uno (paleta, tipografía, composición, micro-interacciones) para extraer patrones aplicables, hasta converger en una dirección de diseño concreta antes de construir los partials definitivos.
- El sitio debe ser **muy visual**: se buscarán/seleccionarán imágenes (fotografía o gráficos) para la landing page (hero, secciones de proyectos/charlas), priorizando bancos de imágenes de uso libre (Unsplash, Pexels) o recursos gráficos generados a medida.
- Definir tokens de diseño (color, tipografía, espaciado) en SCSS con soporte claro/oscuro mediante custom properties.
- Construir partials reutilizables: header/nav, footer, hero (con imagen/gráfico destacado), tarjeta, timeline, badge/tag, toggle de tema, menú móvil.
- Aplicar el sistema a Home, CV y páginas de listado.

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

### Fase 6 — SEO, metadatos y pulido final
- `sitemap.xml` (nativo de Hugo), meta tags Open Graph/Twitter Card por página, `robots.txt`.
- Favicon y assets de marca.
- Revisión de accesibilidad (contraste en ambos modos, navegación por teclado, `aria-label`s).
- Lighthouse / PageSpeed pass.

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
- Comprobar en el navegador: modo claro/oscuro, RSS, sitemap, y que `alejandroaliaga.com` sirve el sitio correctamente vía HTTPS.
