'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/#services', label: 'Servicios' },
    { href: '/#projects', label: 'Proyectos' }, // Enlace estratégico añadido
    { href: '/#process', label: 'Proceso' },
    { href: '/blog/cuanto-cuesta-pagina-web-colombia', label: '¿Cuánto cuesta?', highlight: true },
    { href: '/#contact', label: 'Contacto' },
  ]

  // Previene el Layout Shift (CLS) devolviendo un contenedor con la misma altura que el header final
  if (!mounted) return <div className="h-[76px] lg:h-[88px] w-full" />

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/10 shadow-sm' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* LOGO - Dimensiones fijas para evitar CLS */}
          <Link href="/" className="group flex items-center gap-3 outline-none min-w-[140px]" aria-label="Veritus Studio Home">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-indigo-600 rounded-[12px] blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative h-full w-full bg-indigo-600 rounded-[12px] flex items-center justify-center shadow-lg">
                <span className="text-xl font-black text-white">V</span>
              </div>
            </div>
            <span className="hidden sm:block font-black text-xl tracking-tighter text-slate-900 dark:text-white uppercase">
              Veritus<span className="text-indigo-600">.</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">
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

            <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-4" />

            {/* THEME TOGGLE - Corregido para Accesibilidad */}
            <button
              aria-label="Cambiar modo de color"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link
              href="/#contact"
              className="ml-4 px-6 py-2.5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black text-[11px] uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              Empezar
            </Link>
          </nav>

          {/* MOBILE TOGGLE - Aria Labels para Lighthouse */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 rounded-2xl bg-indigo-600 text-white shadow-lg"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU - Optimización de rendimiento de salida */}
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
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 z-[120] bg-white dark:bg-slate-950 rounded-t-[2.5rem] shadow-2xl p-8 lg:hidden border-t border-slate-200 dark:border-white/10"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-4 px-6 text-lg font-bold rounded-2xl ${
                        link.highlight 
                        ? 'bg-indigo-600 text-white' 
                        : 'text-slate-800 dark:text-slate-200 active:bg-slate-100 dark:active:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}