# PageSpeed 95+ y diseño — Veritus Studio

## Cambios aplicados

### Carga y estabilidad
- **Error boundary** (`app/error.tsx`): si algo falla, se muestra una pantalla de error con "Reintentar" en lugar de pantalla en blanco.
- **Loading** (`app/loading.tsx`): indicador de carga mientras se resuelve la página.
- **Suspense** en home: Portfolio y Blog se cargan en streaming; el Hero y el resto de la página pintan antes.
- **Sanity opcional**: sin variables de entorno la web sigue cargando; portafolio y blog salen vacíos.

### PageSpeed (objetivo 95+)
- **LCP**: preload de la imagen del hero (`/3d-abstract-shape.webp`), `priority` + `fetchPriority="high"` en esa imagen.
- **Fuente**: Inter con `display: 'swap'` para evitar FOIT.
- **GA**: solo se carga si existe `NEXT_PUBLIC_GA_ID`; con `strategy="lazyOnload"` no bloquea LCP.
- **Hero sin Framer en LCP**: animación flotante pasada a CSS (`animate-float`); menos JS en el camino crítico.
- **Formas flotantes**: `GlobalFloatingShape` se carga con `dynamic(ssr: false)` después de la hidratación.
- **Preconnect** a `cdn.sanity.io` para requests a Sanity.

### Diseño
- **Variables CSS**: `--space-section`, `--space-block`, `--primary` unificado (indigo-600).
- **Hero**: tipografía hasta 90px en desktop; trust signals sin motion para carga más limpia; bordes y hovers unificados.
- **globals.css**: simplificado; animación `float` más suave.

## Cómo medir PageSpeed

1. **Producción**: sube a Vercel (o similar) y mide en [PageSpeed Insights](https://pagespeed.web.dev/) con la URL de producción. En local suele salir peor.
2. **Build**: `npm run build && npm run start` y mide contra `http://localhost:3000` (igual no es tan fiable como producción).
3. **Recomendaciones**:
   - Mantén las imágenes en WebP/AVIF y con `sizes` correctos.
   - Si añades analytics, usa `NEXT_PUBLIC_GA_ID` y déjalo en `lazyOnload`.
   - Evita más scripts de terceros en `<head>` sin diferir.

## Si la página no carga en local

- Revisa la **consola del navegador** (F12) y la **terminal** donde corre `npm run dev`.
- Comprueba que exista `.env.local` con al menos:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID` (opcional; si no está, la web carga con portafolio/blog vacíos).
- Abre `http://localhost:3000` (no solo 127.0.0.1) y prueba en ventana de incógnito por si la caché afecta.
