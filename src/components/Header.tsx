'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/#services', label: 'Servicios' },
    { href: '/#process', label: 'Proceso' },
    { href: '/blog/cuanto-cuesta-pagina-web-colombia', label: '¿Cuánto cuesta?', highlight: true },
    { href: '/#contact', label: 'Contacto' },
    { href: '/#warranty', label: 'Garantía' },
  ]

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-in-out
          ${scrolled
            ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 py-3'
            : 'bg-transparent border-b border-transparent py-5'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Logo con Soporte Dark Mode */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Veritus Studio - Inicio"
            >
              <div className="relative w-10 h-10 lg:w-11 lg:h-11">
                <div className="absolute inset-0 bg-indigo-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="relative h-full bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <span className="text-xl lg:text-2xl font-black text-white">V</span>
                </div>
              </div>
              <span className="hidden sm:block font-black text-xl lg:text-2xl tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
                Veritus Studio
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map(({ href, label, highlight }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-bold transition-all duration-300 ${
                    highlight 
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-full hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white dark:hover:text-white border border-indigo-100 dark:border-indigo-500/20' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {label}
                </Link>
              ))}

              {/* Theme Toggle mejorado */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 text-slate-700 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
                aria-label="Cambiar tema"
              >
                {!mounted ? <div className="w-[18px] h-[18px]" /> : (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
              </button>

              <Link
                href="/#contact"
                className="ml-2 px-6 py-3 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all active:scale-95"
              >
                Empezar
              </Link>
            </nav>

            {/* Acciones Móvil */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 border border-slate-200 dark:border-slate-700"
              >
                {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
              </button>
              
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú móvil optimizado */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-[110] lg:hidden" onClick={closeMobileMenu} />
          <div className="fixed inset-x-4 top-24 z-[120] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 p-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ href, label, highlight }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className={`block py-4 px-6 text-lg font-bold rounded-2xl transition-all ${
                    highlight 
                      ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400' 
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={closeMobileMenu}
                className="mt-4 block w-full text-center py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-600/20"
              >
                Cotizar Proyecto
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  )
}