/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Esto es clave
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Fuerza que Turbopack incluya estas clases aunque no las vea en JSX
    'gap-3',
    'gap-4',
    'gap-6',
    'gap-8',
    'inline-flex',
    'items-center',
    'justify-center',
    'px-8',
    'py-4',
    'rounded-3xl',
    'font-bold',
    'shadow-2xl',
    'hover:scale-105',
    'transition-all',
    'duration-500',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}