# Guía de creación de contenido

Instrucciones para mantener el contenido del sitio (rama `feature/hugo-migration` hasta el cutover de producción, ver `plan.md`).

## 1. Nueva entrada de blog

El blog tiene dos tipos de contenido, ambos listados juntos en `/blog/`:

- **`posts`** — artículos largos, con URL fechada `/blog/posts/AAAA/MM/DD/slug/`.
- **`notes`** — notas breves, con URL simple `/blog/notes/slug/`.

```bash
cd /Users/alexcasanova/Documents/github/alexbogus.github.io
hugo new posts/mi-nuevo-articulo/index.md
# o, para una nota breve:
hugo new notes/mi-nueva-nota/index.md
```

Esto crea el contenido como page bundle (`content/posts/mi-nuevo-articulo/index.md`) con la plantilla de `archetypes/posts.md` (o `archetypes/notes.md`). Edita el front matter:

```yaml
---
title: "Título del artículo"
date: 2026-02-20
summary: "Una o dos frases para la tarjeta del listado."
tags: ["CISO", "Estrategia"]
draft: true   # ← cámbialo a false (o bórralo) cuando quieras publicarlo
---
```

Escribe el contenido en Markdown debajo. Para previsualizar (incluye borradores):

```bash
hugo server -D
```

Los tags son libres — cualquier string nuevo crea automáticamente su página en `/blog/tags/`.

## 2. Imagen destacada en la tarjeta del blog

`hugo new posts/.../index.md` ya crea el artículo como carpeta (page bundle), así que solo hace falta copiar la imagen dentro con un nombre que empiece por `cover`:

```
content/posts/mi-nuevo-articulo/
├── index.md
└── cover.jpg
```

(Igual para `content/notes/mi-nueva-nota/`.) El sistema la recoge automáticamente (`Resources.GetMatch "cover*"`) tanto en el listado como en la página del tag. Recomendación: usa una imagen ~1200×630 (horizontal) y no subas archivos enormes — si es una foto de cámara/móvil, redúcela antes (por ejemplo con Vista Previa → Exportar, o `sips -Z 1600 foto.jpg`).

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

## 4. Modificar el CV

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

## 5. Añadir una ponencia

`/ponencias/` sustituye a la antigua "Charlas y Publicaciones". Cada ponencia es una página independiente, y el listado las agrupa automáticamente por mes y año (con un índice rápido arriba para saltar directo a un año o mes).

```bash
hugo new ponencias/nombre-del-evento/index.md
```

Front matter:

```yaml
---
title: "Nombre de la charla o conferencia"
date: 2026-02-10   # ← la fecha real del evento; determina el grupo mes/año
place: "ISMS Forum, Madrid"
link: ""            # opcional: si lo rellenas, el título enlaza directo ahí en vez de a una ficha propia
tags: []
draft: true          # ← cámbialo a false cuando quieras publicarlo
---
```

- Si rellenas `link` (por ejemplo el vídeo, las diapositivas o la noticia del evento), el título en el listado enlaza directamente ahí.
- Si lo dejas vacío, el título enlaza a la ficha propia de la ponencia (`layouts/ponencias/single.html`), donde puedes escribir contenido adicional en Markdown debajo del front matter.
- No hace falta tocar `data/cv.yaml` — ese campo (`publications`) se eliminó porque ahora todo vive en `content/ponencias/`.

---

## Flujo general

Editar → `hugo server -D` para revisar en local → `git add` + `git commit` en `feature/hugo-migration`. El sitio en producción no se toca hasta el cutover de la Fase 7 (ver `plan.md`).
