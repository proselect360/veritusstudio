/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores de contraste optimizados
        slate: {
          // Un negro más profundo para pantallas OLED (Dark Mode)
          950: '#020617', 
          // Un gris para textos secundarios que pasa los tests de accesibilidad WCAG
          400: '#94a3b8', 
        },
        indigo: {
          // Indigo vibrante pero legible sobre fondos oscuros
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        }
      },
      backgroundImage: {
        // Gradientes con mayor rango dinámico
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-light': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
        'glass-dark': 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 0.95))',
      },
      // Tipografía con tracking más limpio para mejorar legibilidad
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.02em',
        widest: '0.25em',
      }
    },
  },
  safelist: [
    'gap-3', 'gap-4', 'gap-6', 'gap-8',
    'inline-flex', 'items-center', 'justify-center',
    'px-8', 'py-4', 'rounded-3xl', 'font-bold',
    'shadow-2xl', 'hover:scale-105', 'transition-all', 'duration-500',
    // Clases de contraste añadidas
    'backdrop-blur-md', 'backdrop-blur-xl',
    'border-white/10', 'border-slate-200',
    'bg-slate-950', 'text-slate-400'
  ],
  plugins: [
    require('@tailwindcss/typography'),
    // Plugin opcional para mejores sombras si lo tienes instalado
  ],
}