# MKLA Films

Portafolio web de videografía profesional. Presenta una selección de trabajos,
información sobre MKLA Films y una sección de contacto.

## Requisitos

- Node.js 22.12.0 o posterior
- npm

## Empezar

Instala las dependencias:

```sh
npm install
```

Inicia el servidor de desarrollo:

```sh
npm run dev
```

Astro mostrará la dirección local en la terminal, normalmente
`http://localhost:4321`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera el sitio para producción en `dist/`. |
| `npm run preview` | Previsualiza localmente la versión de producción. |

## Estructura

- `src/pages/index.astro`: página principal.
- `src/components/`: secciones de presentación, trabajos, contacto y navegación.
- `src/layouts/`: estructura base de las páginas.
- `src/styles/global.css`: estilos globales.
- `public/`: archivos estáticos servidos directamente.

El sitio está construido con [Astro](https://astro.build/) y Tailwind CSS.
