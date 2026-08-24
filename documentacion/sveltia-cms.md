# Plan: integrar Sveltia CMS en el sitio Hugo

## Contexto

El sitio (`alexbogus/alexbogus.github.io`) es un Hugo estático desplegado a GitHub Pages mediante un workflow de GitHub Actions ya existente (`.github/workflows/*.yml`: build con `hugo --gc --minify` + `actions/deploy-pages`, disparado en cada push a `main`), con dominio propio `alejandroaliaga.com` (static/CNAME). Alejandro quiere poder añadir y editar contenido (artículos de blog, notas, ponencias, proyectos y el CV) desde una interfaz web, sin tener que tocar Markdown/YAML a mano en GitHub. Sveltia CMS (sucesor de Decap/Netlify CMS) encaja bien porque es "git-based": se sirve como una página estática (`/admin/`) que escribe commits directamente al repo vía la API de GitHub. No se necesita backend dinámico ni cambiar el pipeline de despliegue existente — cada commit del CMS a `main` dispara automáticamente el mismo workflow que ya reconstruye el sitio.

Decisiones tomadas con el usuario:
- **Autenticación**: token personal de GitHub (Sign In with Token), sin OAuth App ni Cloudflare Worker — la opción más simple para un único editor.
- **Alcance**: incluir también `/cv/` en el CMS, pese a su front matter fuertemente anidado.

## Estructura de contenido real (verificada en el repo)

Colecciones tipo "page bundle" (`content/<tipo>/<slug>/index.md`, con imágenes sueltas junto al `index.md`):
- `content/posts/` — campos: `title`, `date`, `summary`, `tags[]`, `draft`, body markdown.
- `content/notes/` — mismos campos que posts.
- `content/ponencias/` — campos: `title`, `date`, `place`, `links[]` (`{label, url}`, campo recomendado), `link` (string, legado — sigue usándose en ~30 entradas antiguas y el layout `layouts/ponencias/single.html:22-32` soporta ambos simultáneamente), `tags[]`, `draft`, body markdown opcional.
- `content/proyectos/` — campos: `title`, `date`, `summary`, `period`, `tags[]`, `links[]` (`{label, url}`, confirmado en `layouts/proyectos/single.html:27`), `draft`, body markdown.

Páginas singleton:
- `content/contacto.md` — `title`, `description`, `type: contacto` (fijo), `url: /contacto/` (fijo), body markdown.
- `content/cv.md` — estructura anidada verificada línea a línea:
  - `title`, `description`, `type: cv` (fijo), `url: /cv/` (fijo)
  - `about`: `name`, `specialization`, `role`, `availability`, `tagline` (texto largo), `profile_summary` (texto largo), `bio[]` (lista de párrafos), `location`, `achievements[]` (lista de strings), `engagements[]` (lista de `{title, org, description}`)
  - `experience[]`: lista de `{title, company, logo, period, location, description[] (lista de strings), tags[] (lista de strings)}`. `logo` es una ruta tipo `images/logos/empresa.png` **relativa a `assets/`** (usada vía `resources.Get` en `layouts/cv/single.html:53`, confirmado; los ficheros reales están en `assets/images/logos/`) — no es una carpeta de `static/`, así que el widget de imagen de este campo necesita `media_folder`/`public_folder` propios apuntando ahí.
  - `skills`: `core[]`, `technical[]`, `languages[]`, cada una lista de `{name, level}` (level = número 0-100).

Páginas de sección (`content/blog/_index.md`, `content/notes/_index.md`, `content/ponencias/_index.md`, `content/proyectos/_index.md`) quedan **fuera** del CMS por ahora (edición poco frecuente); se pueden añadir después como entradas extra de la colección `files` si hace falta.

No se toca ningún archivo de `layouts/` ni `hugo.toml`: las plantillas ya soportan estos campos tal cual están.

## Archivos a crear

### `static/admin/index.html`
Página mínima que carga Sveltia CMS desde CDN (sin `type="module"`, sin CSS propio — Sveltia advierte que puede causar comportamientos inesperados):

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="robots" content="noindex" />
    <title>Panel de contenido — Alejandro Aliaga</title>
  </head>
  <body>
    <script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js"></script>
  </body>
</html>
```

Hugo copia `static/` tal cual a `public/`, así que queda disponible en `https://alejandroaliaga.com/admin/` sin más cambios.

### `static/admin/config.yml`

```yaml
backend:
  name: github
  repo: alexbogus/alexbogus.github.io
  branch: main

media_folder: "static/uploads"
public_folder: "/uploads"

locale: "es"

collections:
  - name: "posts"
    label: "Blog · Artículos"
    label_singular: "Artículo"
    folder: "content/posts"
    create: true
    slug: "{{slug}}"
    path: "{{slug}}/index"
    media_folder: ""
    public_folder: ""
    fields:
      - { label: "Título", name: "title", widget: "string" }
      - { label: "Fecha", name: "date", widget: "datetime", format: "YYYY-MM-DD", date_format: "YYYY-MM-DD", time_format: false }
      - { label: "Resumen", name: "summary", widget: "text", required: false }
      - { label: "Etiquetas", name: "tags", widget: "list", required: false, field: { label: "Etiqueta", name: "tag", widget: "string" } }
      - { label: "Borrador", name: "draft", widget: "boolean", default: true, required: false }
      - { label: "Contenido", name: "body", widget: "markdown" }

  - name: "notes"
    label: "Notas"
    label_singular: "Nota"
    folder: "content/notes"
    create: true
    slug: "{{slug}}"
    path: "{{slug}}/index"
    media_folder: ""
    public_folder: ""
    fields: # mismos campos que "posts"
      - { label: "Título", name: "title", widget: "string" }
      - { label: "Fecha", name: "date", widget: "datetime", format: "YYYY-MM-DD", date_format: "YYYY-MM-DD", time_format: false }
      - { label: "Resumen", name: "summary", widget: "text", required: false }
      - { label: "Etiquetas", name: "tags", widget: "list", required: false, field: { label: "Etiqueta", name: "tag", widget: "string" } }
      - { label: "Borrador", name: "draft", widget: "boolean", default: true, required: false }
      - { label: "Contenido", name: "body", widget: "markdown" }

  - name: "ponencias"
    label: "Ponencias"
    label_singular: "Ponencia"
    folder: "content/ponencias"
    create: true
    slug: "{{slug}}"
    path: "{{slug}}/index"
    media_folder: ""
    public_folder: ""
    fields:
      - { label: "Título", name: "title", widget: "string" }
      - { label: "Fecha", name: "date", widget: "datetime", format: "YYYY-MM-DD", date_format: "YYYY-MM-DD", time_format: false }
      - { label: "Lugar / Medio", name: "place", widget: "string", required: false }
      - label: "Enlaces"
        name: "links"
        widget: "list"
        required: false
        hint: "Usa este campo para nuevas ponencias (prensa, vídeo, programa, etc.)."
        fields:
          - { label: "Texto del enlace", name: "label", widget: "string" }
          - { label: "URL", name: "url", widget: "string" }
      - { label: "Enlace (campo antiguo)", name: "link", widget: "string", required: false, hint: "Heredado de entradas antiguas; para ponencias nuevas usa 'Enlaces'." }
      - { label: "Etiquetas", name: "tags", widget: "list", required: false, field: { label: "Etiqueta", name: "tag", widget: "string" } }
      - { label: "Borrador", name: "draft", widget: "boolean", default: true, required: false }
      - { label: "Contenido", name: "body", widget: "markdown", required: false }

  - name: "proyectos"
    label: "Proyectos"
    label_singular: "Proyecto"
    folder: "content/proyectos"
    create: true
    slug: "{{slug}}"
    path: "{{slug}}/index"
    media_folder: ""
    public_folder: ""
    fields:
      - { label: "Título", name: "title", widget: "string" }
      - { label: "Fecha", name: "date", widget: "datetime", format: "YYYY-MM-DD", date_format: "YYYY-MM-DD", time_format: false }
      - { label: "Resumen", name: "summary", widget: "text", required: false }
      - { label: "Periodo", name: "period", widget: "string", required: false }
      - { label: "Etiquetas", name: "tags", widget: "list", required: false, field: { label: "Etiqueta", name: "tag", widget: "string" } }
      - label: "Enlaces"
        name: "links"
        widget: "list"
        required: false
        fields:
          - { label: "Texto del enlace", name: "label", widget: "string" }
          - { label: "URL", name: "url", widget: "string" }
      - { label: "Borrador", name: "draft", widget: "boolean", default: true, required: false }
      - { label: "Contenido", name: "body", widget: "markdown" }

  - name: "paginas"
    label: "Páginas fijas"
    files:
      - name: "contacto"
        label: "Contacto"
        file: "content/contacto.md"
        fields:
          - { label: "Título", name: "title", widget: "string" }
          - { label: "Descripción (SEO)", name: "description", widget: "text", required: false }
          - { label: "Tipo (no editar)", name: "type", widget: "hidden", default: "contacto" }
          - { label: "URL (no editar)", name: "url", widget: "hidden", default: "/contacto/" }
          - { label: "Contenido", name: "body", widget: "markdown" }

      - name: "cv"
        label: "CV"
        file: "content/cv.md"
        fields:
          - { label: "Título", name: "title", widget: "string" }
          - { label: "Descripción (SEO)", name: "description", widget: "text" }
          - { label: "Tipo (no editar)", name: "type", widget: "hidden", default: "cv" }
          - { label: "URL (no editar)", name: "url", widget: "hidden", default: "/cv/" }
          - label: "Sobre mí"
            name: "about"
            widget: "object"
            fields:
              - { label: "Nombre", name: "name", widget: "string" }
              - { label: "Especialización", name: "specialization", widget: "string" }
              - { label: "Rol", name: "role", widget: "string" }
              - { label: "Disponibilidad", name: "availability", widget: "string" }
              - { label: "Tagline", name: "tagline", widget: "text" }
              - { label: "Resumen de perfil", name: "profile_summary", widget: "text" }
              - { label: "Biografía (párrafos)", name: "bio", widget: "list", field: { label: "Párrafo", name: "paragraph", widget: "text" } }
              - { label: "Ubicación", name: "location", widget: "string" }
              - { label: "Logros", name: "achievements", widget: "list", field: { label: "Logro", name: "achievement", widget: "string" } }
              - label: "Colaboraciones actuales"
                name: "engagements"
                widget: "list"
                fields:
                  - { label: "Título", name: "title", widget: "string" }
                  - { label: "Organización", name: "org", widget: "string" }
                  - { label: "Descripción", name: "description", widget: "text" }
          - label: "Experiencia"
            name: "experience"
            widget: "list"
            fields:
              - { label: "Puesto", name: "title", widget: "string" }
              - { label: "Empresa", name: "company", widget: "string" }
              - { label: "Logo", name: "logo", widget: "image", required: false, media_folder: "assets/images/logos", public_folder: "images/logos" }
              - { label: "Periodo", name: "period", widget: "string" }
              - { label: "Ubicación", name: "location", widget: "string" }
              - { label: "Descripción (líneas)", name: "description", widget: "list", field: { label: "Línea", name: "line", widget: "string" } }
              - { label: "Etiquetas", name: "tags", widget: "list", field: { label: "Etiqueta", name: "tag", widget: "string" } }
          - label: "Skills"
            name: "skills"
            widget: "object"
            fields:
              - { label: "Core", name: "core", widget: "list", fields: [{ label: "Nombre", name: "name", widget: "string" }, { label: "Nivel (0-100)", name: "level", widget: "number", value_type: "int", min: 0, max: 100 }] }
              - { label: "Técnicas", name: "technical", widget: "list", fields: [{ label: "Nombre", name: "name", widget: "string" }, { label: "Nivel (0-100)", name: "level", widget: "number", value_type: "int", min: 0, max: 100 }] }
              - { label: "Idiomas", name: "languages", widget: "list", fields: [{ label: "Nombre", name: "name", widget: "string" }, { label: "Nivel (0-100)", name: "level", widget: "number", value_type: "int", min: 0, max: 100 }] }
```

Notas de diseño:
- `media_folder`/`public_folder` a `""` en las colecciones tipo folder hace que las imágenes subidas (p. ej. `cover.jpg`) se guarden en la misma carpeta del `index.md`, igual que el patrón de page bundle ya usado.
- El campo `logo` del CV usa `media_folder`/`public_folder` propios apuntando a `assets/images/logos` porque esas imágenes se procesan con Hugo Pipes (`resources.Get`), no se sirven desde `static/`; el valor guardado (`images/logos/archivo.png`) coincide exactamente con el patrón ya usado en el front matter real.
- `draft` va como `required: false` porque algunas entradas existentes no tienen ese campo (Hugo trata su ausencia igual que `false`); si se edita una de esas entradas desde el CMS es posible que se añada `draft: false` explícito — cambio cosmético sin efecto.
- No se renombra ningún campo existente.

## Autenticación (token personal de GitHub) — pasos manuales del usuario

Estos pasos son fuera del repo y no se pueden automatizar:
1. Una vez desplegado `static/admin/`, abrir `https://alejandroaliaga.com/admin/`.
2. Pulsar "Sign In with Token" y seguir el enlace a GitHub para crear un **fine-grained personal access token**:
   - Repository access: solo `alexbogus/alexbogus.github.io`.
   - Permissions: `Contents: Read and write`, `Metadata: Read-only` (obligatorio).
   - Expiration: recomendable 1 año (anotar fecha de renovación).
3. Pegar el token en el diálogo del CMS.

Aviso a comunicar: el token vive en el `localStorage` del navegador donde se inicia sesión; cerrar sesión si es un equipo compartido.

## Verificación end-to-end

1. `hugo server` desde la raíz del repo y abrir `http://localhost:1313/admin/index.html` — confirmar que carga sin errores de consola y que aparecen las colecciones (`posts`, `notes`, `ponencias`, `proyectos`, `paginas`).
2. Probar con **Local Backend** de Sveltia (botón "Work with Local Repository", requiere Chrome/Edge por File System Access API): seleccionar la carpeta raíz del repo y crear una entrada de prueba en cada colección tipo folder, subiendo una imagen en al menos una para confirmar que aterriza junto al `index.md` (no en `uploads/` global).
3. Editar la entrada `cv` desde el CMS (Local Backend) y confirmar que el YAML resultante conserva la misma forma que el original (mismas claves anidadas, mismo formato de `logo`).
4. Con `hugo server` corriendo, visitar la entrada de prueba renderizada y confirmar que el layout la pinta igual que las entradas reales.
5. Borrar cualquier entrada de prueba del working directory antes de commitear a `main`.
6. Desplegar `static/admin/` a producción (push a `main`), iniciar sesión en `https://alejandroaliaga.com/admin/` con el token, hacer una edición real de prueba y confirmar en GitHub que aparece el commit y que el workflow `Deploy Hugo site to Pages` termina en verde.

## Archivos críticos
- `static/admin/index.html` (nuevo)
- `static/admin/config.yml` (nuevo)
- `layouts/ponencias/single.html`, `layouts/proyectos/single.html`, `layouts/cv/single.html` — solo como referencia de los campos soportados, no se modifican
- `.github/workflows/*.yml` — no requiere cambios
