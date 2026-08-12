# Guía de creación de contenido

Instrucciones para mantener el contenido del sitio, generado con Hugo.

Flujo general para cualquier tipo de contenido:

```bash
cd /Users/alexcasanova/Documents/github/alexbogus.github.io
hugo new <sección>/nombre-del-elemento/index.md
hugo server -D   # previsualiza en local, incluye borradores (draft: true)
```

Edita el front matter y el cuerpo Markdown, revisa en `hugo server -D`, y cuando esté listo cambia `draft: true` a `false` (o bórralo). Luego `git add` + `git commit` (+ `git push` si procede) en `main` para publicar.

## 1. Nueva entrada de blog (post)

Artículo largo, con URL fechada `/blog/posts/AAAA/MM/DD/slug/`.

```bash
hugo new posts/mi-nuevo-articulo/index.md
```

Esto crea el contenido como page bundle (`content/posts/mi-nuevo-articulo/index.md`) con la plantilla de `archetypes/posts.md`. Front matter:

```yaml
---
title: "Título del artículo"
date: 2026-02-20
summary: "Una o dos frases para la tarjeta del listado."
tags: ["CISO", "Estrategia"]
draft: true   # ← cámbialo a false (o bórralo) cuando quieras publicarlo
---
```

Los tags son libres — cualquier string nuevo crea automáticamente su página en `/blog/tags/`.

### Imagen destacada

Como es un page bundle, solo hace falta copiar la imagen dentro de la carpeta con un nombre que empiece por `cover`:

```
content/posts/mi-nuevo-articulo/
├── index.md
└── cover.jpg
```

El sistema la recoge automáticamente (`Resources.GetMatch "cover*"`) tanto en el listado como en la página del tag. Recomendación: usa una imagen ~1200×630 (horizontal) y no subas archivos enormes — si es una foto de cámara/móvil, redúcela antes (por ejemplo con Vista Previa → Exportar, o `sips -Z 1600 foto.jpg`).

## 2. Nueva nota rápida

Nota breve, con URL simple `/blog/notes/slug/`.

```bash
hugo new notes/mi-nueva-nota/index.md
```

Mismo front matter que un post (`archetypes/notes.md`: `title`, `date`, `summary`, `tags`, `draft`), y admite imagen `cover.*` igual que los posts.

**Las notas no tienen entrada propia en el menú.** No es un error: `content/blog/_index.md` (vía `layouts/blog/list.html`) lista juntas `posts` y `notes` en `/blog/`, ordenadas por fecha (`where site.RegularPages "Section" "in" (slice "posts" "notes")`). El menú principal solo enlaza a `/blog/`, que ya incluye ambos tipos.

## 3. Nuevo proyecto (con imagen y enlaces de referencia)

Los proyectos usan tarjetas idénticas a las del blog. Crea siempre el proyecto como carpeta (page bundle), para poder añadirle imagen:

```bash
hugo new proyectos/nombre-del-proyecto/index.md
```

Front matter disponible:

```yaml
---
title: "Nombre del proyecto"
date: 2026-02-20
summary: "Resumen corto para la tarjeta del listado."
period: "2023 - 2024"
tags: ["SOC", "Banca"]
links:
  - label: "Ver publicación"
    url: "https://..."
  - label: "Nota de prensa"
    url: "https://..."
draft: true   # ← cámbialo a false cuando quieras publicarlo
---
```

Añade la imagen de cabecera en la misma carpeta, con un nombre que empiece por `cover` (igual que en el blog):

```
content/proyectos/nombre-del-proyecto/
├── index.md
└── cover.jpg
```

`period` aparece en la tarjeta del listado en vez del tiempo de lectura. `links` es opcional — si lo rellenas, se muestra una sección "Referencias" al final de la ficha del proyecto con un botón por enlace. El cuerpo del Markdown (debajo del front matter) es el contenido detallado del proyecto.

### Imágenes dentro del cuerpo

Además de la portada (`cover.*`), puedes insertar más imágenes en medio del texto del proyecto (o de un post/nota): cópialas en la misma carpeta del page bundle y referéncialas con Markdown estándar. El pie de foto es opcional, usando el título entre comillas:

```
content/proyectos/nombre-del-proyecto/
├── index.md
├── cover.jpg
└── diagrama.jpg
```

```markdown
![Diagrama de arquitectura](diagrama.jpg "Arquitectura del sistema en su versión final")
```

Se renderizan automáticamente con el mismo estilo visual que la portada (borde, esquinas redondeadas) y, si hay título, con un pie de foto centrado debajo.

## 4. Nueva ponencia

`/ponencias/` sustituye a la antigua "Charlas y Publicaciones". Cada ponencia es una página independiente y el listado se muestra como un grid de tarjetas (igual que blog/proyectos), filtrable por tipo (Todas/Ponencias/Prensa), por año y por mes a la vez.

Crea siempre la ponencia como carpeta (page bundle), para poder añadirle imagen:

```bash
hugo new ponencias/nombre-del-evento/index.md
```

Front matter:

```yaml
---
title: "Nombre de la charla o conferencia"
date: 2026-02-10   # ← la fecha real del evento; determina el filtro de año/mes
place: "ISMS Forum, Madrid"
summary: "Una frase para la tarjeta del listado."
link: ""            # opcional: si lo rellenas, el título enlaza directo ahí en vez de a una ficha propia
tags: []             # "Ponencia" y/o "Prensa" — determina el filtro de tipo
draft: true          # ← cámbialo a false cuando quieras publicarlo
---
```

- Si rellenas `link` (por ejemplo el vídeo, las diapositivas o la noticia del evento), el título en el listado enlaza directamente ahí.
- Si lo dejas vacío, el título enlaza a la ficha propia de la ponencia (`layouts/ponencias/single.html`), donde puedes escribir contenido adicional en Markdown debajo del front matter.
- `data/cv.yaml` no tiene campo de publicaciones — todo vive en `content/ponencias/`.

### Imagen destacada

Igual que en el blog y los proyectos: copia una imagen dentro de la carpeta con un nombre que empiece por `cover` y se recoge automáticamente en la tarjeta del listado.

```
content/ponencias/nombre-del-evento/
├── index.md
└── cover.jpg
```

Recomendación: usa una imagen ~1200×630 (horizontal), llamativa, y no subas archivos enormes — si es una foto de cámara/móvil, redúcela antes (por ejemplo con Vista Previa → Exportar, o `sips -Z 1600 foto.jpg`). Si no añades imagen, la tarjeta muestra un fallback automático (degradado + tipo/título), así que nunca queda vacía.

### Embeber un vídeo de YouTube

Solo tiene sentido si dejas `link` vacío (para que el título use la ficha propia en vez de saltar directo al enlace). En el cuerpo Markdown, debajo del front matter, usa el shortcode nativo de Hugo:

```markdown
{{< youtube ID >}}
```

El `ID` es la parte de la URL después de `v=`, por ejemplo en `https://www.youtube.com/watch?v=mJYhCYfVpXE` el ID es `mJYhCYfVpXE`. Mismo patrón ya usado en varios posts del blog (`content/posts/incidentes-gnss-parte-4/index.md`).

## 5. Modificar el CV

Todo el contenido del CV vive en `data/cv.yaml` — no hay que tocar plantillas. Estructura:

- `about`: nombre, rol, tagline, bio, tags
- `experience`: lista de puestos. Para añadir uno nuevo, copia un bloque existente:
  ```yaml
  - title: "Nuevo puesto"
    company: "Empresa"
    period: "Ene 2026 - Presente"
    location: "Valencia, España"
    description:
      - "Primera línea de descripción."
      - "Segunda línea."
    tags: ["Tag1", "Tag2"]
  ```
  Va **al principio** de la lista si es tu puesto más reciente (el orden del YAML es el orden en pantalla).
- `skills`: tres bloques (`core`, `technical`, `languages`), cada uno una lista de `{ name: "...", level: 85 }` (level = % de la barra).
- `certifications`: lista simple de strings.

Guarda y refresca `hugo server` — no hace falta build manual, se recarga solo.
