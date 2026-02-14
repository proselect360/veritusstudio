# Análisis: Espaciado y secciones — Veritus Studio

## 1. Estructura actual

- **Contenedor de secciones** (`HomeClient.tsx`): `flex flex-col gap-0` → no hay espacio entre bloques; todo el aire lo dan los `padding` internos de cada sección.
- **Orden**: Hero → Servicios → Testimonios → Portafolio (children) → Blog (children) → Contacto → Garantía → Footer.

---

## 2. Padding vertical por sección (inconsistencias)

| Sección        | Padding vertical actual              | Observación                    |
|----------------|--------------------------------------|--------------------------------|
| Hero           | `pt-32 pb-16` (+ h-screen)           | Coherente con header fijo      |
| Servicios      | `py-32`                              | Fijo, sin breakpoints          |
| Testimonios    | `py-24 md:py-32 lg:py-56`            | Salto muy grande en lg         |
| Contacto       | `py-20 md:py-32 lg:py-56`            | lg:py-56 muy alto              |
| Garantía       | Contenedor: `pb-20` + línea `mb-20`; sección: `py-16 md:py-32` | Doble margen inferior posible  |
| Portafolio     | `py-24 lg:py-40`                     | Ok                             |
| Blog (wrapper) | `py-12 lg:py-20` (page) + BlogClient `py-32` | Dos capas de padding; puede verse cargado |
| Footer         | `py-16 lg:py-24`                     | Ok                             |

**Problemas principales:**
- Mezcla de escalas: `py-16`, `py-20`, `py-24`, `py-32`, `py-40`, `py-56`.
- `lg:py-56` en Testimonios y Contacto hace que en desktop las secciones queden muy altas y el ritmo sea desigual.
- Garantía: separador con `mb-20` + `pb-20` en el wrapper puede sumar demasiado espacio al final.

---

## 3. Ancho máximo (max-width)

- **Mayoría**: `max-w-7xl` (1280px).
- **Servicios**: `max-w-[120rem]` (1920px) → mucho más ancho que el resto.
- **Garantía**: `max-w-[100rem]` (1600px).

**Recomendación:** Unificar a `max-w-7xl` para contenido de texto y bloques principales; si se quiere más ancho en alguna sección concreta, usar una segunda variable (p. ej. `max-w-7xl` + excepciones documentadas).

---

## 4. Padding horizontal

- Casi todo: `px-6 lg:px-12`.
- Garantía: `px-4 md:px-12` → en móvil tiene menos aire que el resto.

**Recomendación:** Unificar a `px-6 lg:px-12` en todas las secciones.

---

## 5. Scroll margin (scroll-mt)

- Hero: `scroll-mt-20`
- Servicios, Testimonios, Contacto, Garantía: `scroll-mt-24`
- Blog (BlogClient): `scroll-mt-32`

**Recomendación:** Unificar a `scroll-mt-24` (o el valor que use el header al hacer scroll) para que los anclas no queden tapados por la barra fija.

---

## 6. Otros detalles

- **Contact.tsx**: `lg:text-1xl` es un typo; debería ser `lg:text-7xl` (o el tamaño que se desee para el título).
- **Sección dinámica (children):** `py-0` → el contenido inyectado (Portafolio, Blog) define su propio padding; correcto, pero conviene que Portafolio y Blog sigan la misma escala de espaciado que el resto.

---

## 7. Resumen de mejoras propuestas

1. **Escala de espaciado vertical**  
   Definir una escala única para secciones “estándar” y “hero/contacto”:
   - Estándar: p. ej. `py-20 md:py-28 lg:py-36` (evitar `py-56` salvo hero/contacto si se desea).
   - Contacto/Testimonios: reducir `lg:py-56` a algo como `lg:py-40` o `lg:py-36` para igualar el ritmo.

2. **Unificar max-width**  
   Usar `max-w-7xl` en todas las secciones salvo que se documente una excepción (p. ej. Servicios con grid muy ancho).

3. **Unificar padding horizontal**  
   `px-6 lg:px-12` en todas las secciones (incl. Garantía).

4. **Unificar scroll-mt**  
   `scroll-mt-24` en todas las secciones con ancla.

5. **Garantía**  
   Simplificar: un solo contenedor con padding claro; quitar o reducir `mb-20` del separador o `pb-20` del wrapper para no duplicar espacio.

6. **Corregir typo**  
   En Contact: `lg:text-1xl` → `lg:text-7xl`.

7. **Opcional: gap entre secciones**  
   Si se prefiere que el espacio entre bloques sea explícito, cambiar `gap-0` a `gap-8` o `gap-12` y bajar un poco el `py` de algunas secciones para no sumar demasiado espacio total.

Implementando estas mejoras se gana consistencia visual y una lectura más clara del layout.
