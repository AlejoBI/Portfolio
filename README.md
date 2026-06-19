# Portfolio - Alejandro Bravo Isajar

Personal portfolio built with React + TypeScript + Tailwind CSS.

## Setup

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Content

Edit JSON files in `src/data/` to update profile, projects, skills, experience, education, and certifications. Translations are in `src/i18n/locales/`.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- i18next
- react-helmet-async

---

## Guía de Optimización de Rendimiento

Técnicas aplicadas en este portafolio para lograr carga rápida y navegación fluida.

### 1. Imágenes

#### Redimensionar al tamaño real de uso

Las capturas de pantalla de proyectos se redimensionaron a 800px de ancho máximo con `sharp`, porque los originales eran de 1920px pero se muestran en tarjetas pequeñas. No tiene sentido enviar 10× más píxeles de los que el ojo va a ver.

**Dónde está:** `scripts/resize-images.mjs`

#### Formato WebP

Todas las imágenes están en WebP. Este formato comprime 25-35% más que JPEG o PNG sin pérdida visible de calidad. Vite lo maneja de forma nativa.

#### `width`, `height` y `loading="lazy"`

Cada `<img>` tiene dimensiones explícitas y carga diferida para evitar dos problemas:

- **CLS (Cumulative Layout Shift):** cuando la imagen carga y empuja todo el contenido hacia abajo porque el navegador no sabía cuánto espacio reservar. Al poner `width` y `height`, el navegador reserva el espacio de inmediato.
- **Carga innecesaria:** las imágenes fuera de pantalla no se descargan hasta que el usuario se acerca.

```tsx
// src/components/sections/Projects.tsx
<img src={project.image} alt={project.title} loading="lazy" width={800} height={192} />
```

```tsx
// src/components/sections/Hero.tsx
<img src={ImagePortfolio} alt="Alejandro Bravo Isajar" width={384} height={384} />
```

Excepción: la foto del héroe no usa `loading="lazy"` porque está arriba de todo y debe cargarse ya.

#### Precarga de la imagen principal

En `index.html` se le indica al navegador que priorice la descarga de la foto de perfil:

```html
<link rel="preload" href="/src/assets/images/Foto.webp" as="image" type="image/webp" fetchpriority="high" />
```

---

### 2. Code Splitting

#### Chunks separados por librería

Con `manualChunks` en `vite.config.ts` se separa React, i18next y lucide-react en archivos distintos. El navegador los descarga en paralelo y cada uno se cachea por separado: React casi nunca cambia, el código de la app cambia en cada deploy. Esto está en `vite.config.ts`:

```ts
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ["react", "react-dom"],
        ui: ["lucide-react"],
        i18n: ["i18next", "react-i18next", "i18next-browser-languagedetector"],
      },
    },
  },
}
```

#### Lazy loading con `React.lazy()`

Las secciones que están debajo del pliegue (Skills, Experience, Projects) no se cargan hasta que se necesitan. Mientras tanto se muestra un placeholder con `animate-pulse`. Esto está en `src/App.tsx`:

```tsx
const Experience = lazy(() => import("./components/sections/Experience"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Projects = lazy(() => import("./components/sections/Projects"));

<Suspense fallback={<div className="h-64 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg" />}>
  <Skills />
</Suspense>
```

---

### 3. Renderizado

#### `React.memo`

Los componentes que reciben las mismas props seguido se envuelven en `memo()` para que React no los rerenderice si nada cambió. Se usa en los 12 componentes del proyecto, incluyendo `SkillCard`, `ProjectCard`, `Hero`, `Skills` y `Layout`.

```tsx
// src/components/sections/Skills.tsx
const SkillCard = memo(({ category, items, index, inView }) => { ... });
```

#### `useRef` para dependencias estables

El hook `useInView` (en `src/hooks/useInView.ts`) guarda las opciones del `IntersectionObserver` en un `useRef` para que no se reconstruya el observer en cada render si quien lo llama pasa un objeto nuevo:

```tsx
const optionsRef = useRef(options);
optionsRef.current = options;

useEffect(() => {
  const observer = new IntersectionObserver(callback, optionsRef.current);
  observer.observe(el);
  return () => observer.disconnect();
}, []);
```

---

### 4. CSS

#### `content-visibility: auto`

Las secciones que no están en pantalla no se renderizan (ni estilos, ni layout, ni paint) hasta que el usuario se acerca. Es el equivalente en CSS al `loading="lazy"` de imágenes:

```tsx
// src/App.tsx
<div id="skills" style={{ contentVisibility: "auto" }}>
  <Skills />
</div>
```

#### `prefers-reduced-motion`

Usuarios que prefieren motion reducido no ven animaciones. Se controla tanto en CSS (`index.css`) como en JS (`useInView.ts`):

```tsx
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReduced) {
  setInView(true);
  return;
}
```

#### Passive scroll listeners

Los eventos de scroll en `Header.tsx` usan `{ passive: true }` para que el navegador no bloquee el scroll esperando a que el evento termine.

---

### 5. Fuentes

#### `preconnect`

En `index.html` se le avisa al navegador con anticipación que va a necesitar conexión con los servidores de Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

#### `display=swap`

Con `&display=swap` en la URL de Google Fonts, el texto se muestra al instante con una fuente del sistema mientras la fuente personalizada se descarga en segundo plano. El usuario nunca ve texto invisible.

---

### 6. Iconos

#### Imports individuales

De `lucide-react` se importan solo los iconos que se usan (Code2, Monitor, Server, Database, Wrench, CheckSquare, Users, Globe). El resto de la librería no entra al bundle:

```tsx
// src/components/sections/Skills.tsx
import { Code2, Monitor, Server, Database } from "lucide-react";
```

#### SVGs inline

Los iconos que aparecen una sola vez (flecha externa en certificaciones, icono de descarga, iconos de educación) están escritos como SVG directamente en el JSX, sin depender de ninguna librería.

#### Iconos externos con lazy loading

Los iconos de tecnologías cargados desde devicon.io usan `loading="lazy"` para no bloquear la carga inicial y tienen dimensiones fijas para evitar CLS:

```tsx
// src/components/sections/Skills.tsx
<img src={skill.icon} alt={skill.name} loading="lazy" width={24} height={24} />
```

---

### 7. HTML y SEO

#### Meta tags dinámicos

`react-helmet-async` actualiza el `<title>` y meta tags desde los componentes:

```tsx
// src/components/seo/MetaTags.tsx
<Helmet>
  <title>Alejandro Bravo Isajar | Desarrollador de Software</title>
</Helmet>
```

#### Skip to content

El primer elemento del `<body>` permite saltar la navegación con teclado:

```html
<a href="#main-content" class="sr-only focus:not-sr-only">Saltar al contenido</a>
```

#### robots.txt y sitemap.xml

Archivos en `public/` que le indican a los buscadores cómo indexar el sitio.

#### Favicon

Favicon inline en SVG que evita el error 404 del favicon.ico tradicional:

```html
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👨‍💻</text></svg>" />
```
