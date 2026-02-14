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
      // Mapeo directo a variables CSS para una paleta corporativa estricta
      colors: {
        veritus: {
          DEFAULT: 'var(--primary)',
          soft: 'var(--primary-soft)',
        },
        'bg': 'var(--bg)',
        'bg-card': 'var(--bg-card)',
        'text-header': 'var(--text-header)',
        'text-body': 'var(--text-body)',
        muted: 'var(--text-muted)',
        slate: {
          950: '#020617',
          400: '#94a3b8',
        },
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-light': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
        'glass-dark': 'linear-gradient(to bottom right, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 0.95))',
      },
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
    'shadow-2xl', 'hover:scale-105', 'transition-all', 'duration-300',
    'backdrop-blur-md', 'backdrop-blur-xl',
    'border-white/10', 'border-slate-200',
    'bg-slate-950', 'text-slate-400'
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}