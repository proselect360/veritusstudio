'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // PILAR RENDIMIENTO: Optimización de scroll con useCallback
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20
    if (isScrolled !== scrolled) setScrolled(isScrolled)
  }, [scrolled])

  useEffect(() => {
    setMounted(true)
    window.addEventListener('scroll', handleScroll, { passive: true }) // Passive para mejor rendimiento en móvil
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const navLinks = [
    { href: '/#services', label: 'Servicios' },
    { href: '/#projects', label: 'Proyectos' },
    { href: '/#process', label: 'Proceso' },
    { href: '/blog/cuanto-cuesta-pagina-web-colombia', label: '¿Cuánto cuesta?', highlight: true },
    { href: '/#contact', label: 'Contacto' },
  ]

  // PILAR RENDIMIENTO (CLS): Evita el salto visual reservando el espacio exacto
  if (!mounted) return <div className="h-[88px] w-full bg-transparent" aria-hidden="true" />

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/50 dark:border-white/10 shadow-sm' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* LOGO - Pilar SEO: Nombre de marca claro */}
          <Link href="/" className="group flex items-center gap-3 outline-none min-w-[140px]" aria-label="Veritus Studio - Inicio">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-indigo-600 rounded-[12px] blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative h-full w-full bg-indigo-600 rounded-[12px] flex items-center justify-center shadow-lg">
                <span className="text-xl font-black text-white" aria-hidden="true">V</span>
              </div>
            </div>
            <span className="hidden sm:block font-black text-xl tracking-tighter text-slate-900 dark:text-white uppercase">
              Veritus<span className="text-indigo-600">.</span>
            </span>
          </Link>

          {/* DESKTOP NAV - Pilar Accesibilidad: Roles de navegación */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[13px] font-bold tracking-tight transition-colors group relative ${
                  link.highlight 
                  ? 'text-indigo-600 dark:text-indigo-400' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {link.label}
                {!link.highlight && (
                  <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                )}
              </Link>
            ))}

            <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-4" aria-hidden="true" />

            {/* THEME TOGGLE - Pilar Accesibilidad: Contraste y labels */}
            <button
              aria-label={theme === 'dark' ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link
              href="/#contact"
              className="ml-4 px-6 py-2.5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black text-[11px] uppercase tracking-widest rounded-full hover:shadow-indigo-500/20 hover:shadow-xl active:scale-95 transition-all"
            >
              Empezar
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              aria-label="Cambiar tema"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 rounded-2xl bg-indigo-600 text-white shadow-lg active:scale-90 transition-transform"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU - Pilar Rendimiento: Framer Motion optimizado */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[110] lg:hidden"
            />
            <motion.nav 
              id="mobile-menu"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-[120] bg-white dark:bg-slate-950 rounded-t-[2.5rem] shadow-2xl p-8 lg:hidden border-t border-slate-200 dark:border-white/10"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-4 px-6 text-lg font-bold rounded-2xl ${
                        link.highlight 
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                        : 'text-slate-800 dark:text-slate-200 active:bg-slate-100 dark:active:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}