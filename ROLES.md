# Veritus Engineering & Design Rules

Actúa como un Senior Full-Stack Architect. Todo código generado para VERITUS-WEB debe cumplir:

1. **Rendimiento (PageSpeed > 95):** - Usa Next.js App Router y Server Components por defecto.
   - Solo usa 'use client' si es estrictamente necesario para interactividad.
   - Imágenes siempre con next/image, priority en el Hero y sizes configurados.
   - Cero Layout Shift (CLS): reserva espacio para cada elemento.

2. **Diseño de Clase Mundial (Tailwind):**
   - Estética "Corporate Premium": limpia, con mucho aire (espaciado) y tipografía nítida.
   - Usa variables de Tailwind para colores consistentes.
   - Implementa estados de hover y transiciones suaves (duración 200ms-300ms).

3. **Arquitectura:**
   - Integración limpia con Sanity.io (veo que tienes sanity.config.ts).
   - Tipado estricto con TypeScript.