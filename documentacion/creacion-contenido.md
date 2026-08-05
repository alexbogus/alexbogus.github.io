# Guía de creación de contenido

Instrucciones para mantener el contenido del sitio (rama `feature/hugo-migration` hasta el cutover de producción, ver `plan.md`).

## 1. Nueva entrada de blog

```bash
cd /Users/alexcasanova/Documents/github/alexbogus.github.io
hugo new blog/mi-nuevo-articulo.md
```

Esto crea `content/blog/mi-nuevo-articulo.md` con la plantilla de `archetypes/blog.md`. Edita el front matter:

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

Los tags son libres — cualquier string nuevo crea automáticamente su página en `/tags/`.

## 2. Imagen destacada en la tarjeta del blog

Los artículos son ficheros sueltos (`content/blog/slug.md`), y la imagen de portada necesita que el artículo sea una carpeta ("page bundle"). Para añadir imagen a uno nuevo o existente:

```bash
mkdir content/blog/mi-nuevo-articulo
mv content/blog/mi-nuevo-articulo.md content/blog/mi-nuevo-articulo/index.md
```

Y copia la imagen dentro de esa misma carpeta con un nombre que empiece por `cover`:

```
content/blog/mi-nuevo-articulo/
├── index.md
└── cover.jpg
```

El sistema la recoge automáticamente (`Resources.GetMatch "cover*"`) tanto en el listado como en la página del tag. Recomendación: usa una imagen ~1200×630 (horizontal) y no subas archivos enormes — si es una foto de cámara/móvil, redúcela antes (por ejemplo con Vista Previa → Exportar, o `sips -Z 1600 foto.jpg`).

## 3. Modificar el CV

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

## 4. Añadir charlas y publicaciones

También en `data/cv.yaml`, al final, bajo `publications:` — es una lista simple:

```yaml
publications:
  - "ONTANEDA 2025 - Telecomunicaciones en Emergencias"
  - "Nueva charla o publicación aquí"
```

Se muestra automáticamente en dos sitios: la sección de certificaciones del `/cv/` y la página dedicada `/charlas-publicaciones/` — no hay que editar nada más.

---

## Flujo general

Editar → `hugo server -D` para revisar en local → `git add` + `git commit` en `feature/hugo-migration`. El sitio en producción no se toca hasta el cutover de la Fase 7 (ver `plan.md`).
