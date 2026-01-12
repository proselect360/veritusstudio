'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll()
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20
    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
  }, [])

  useEffect(() => {
    setMounted(true)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // --- RUTAS ACTUALIZADAS ---
  const navLinks = [
    { href: '/servicios', label: 'Servicios' },
    { href: '/#projects', label: 'Proyectos' },
    { href: '/metodologia', label: 'Proceso' }, // Ahora apunta a la nueva página
    { href: '/blog/cuanto-cuesta-pagina-web-colombia', label: '¿Cuánto cuesta?', highlight: true },
    { href: '/#contact', label: 'Contacto' },
    {href: '/faq', label: 'FAQ' }
  ]

  if (!mounted) return <div className="h-[88px] w-full bg-transparent" aria-hidden="true" />

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-sm' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-3 outline-none min-w-[140px]">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-indigo-600 rounded-[12px] blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative h-full w-full bg-indigo-600 rounded-[12px] flex items-center justify-center shadow-lg">
                <span className="text-xl font-black text-white">V</span>
              </div>
            </div>
            <span className="hidden sm:block font-black text-xl tracking-tighter text-white uppercase">
              Veritus<span className="text-indigo-600">.</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-[13px] font-bold tracking-tight transition-colors group relative block ${
                      link.highlight 
                      ? 'text-indigo-400' 
                      : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {!link.highlight && (
                      <span className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-4 w-px bg-white/10 mx-4" />

            <Link
              href="/#contact"
              className="ml-4 px-6 py-2.5 bg-white text-slate-950 font-black text-[11px] uppercase tracking-widest rounded-full hover:shadow-indigo-500/20 hover:shadow-xl active:scale-95 transition-all"
            >
              Empezar
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center lg:hidden">
            {/* MOBILE TOGGLE */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                // AÑADIMOS ESTO PARA ACCESIBILIDAD:
                aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileOpen}
                className="p-3 rounded-2xl bg-indigo-600 text-white shadow-lg active:scale-90 transition-transform"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-blue-400 origin-left"
          style={{ scaleX }}
        />
      </motion.header>

      {/* MOBILE MENU */}
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
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-[120] bg-slate-950 rounded-t-[2.5rem] shadow-2xl p-8 lg:hidden border-t border-white/10"
            >
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
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
                        ? 'bg-indigo-600 text-white shadow-lg' 
                        : 'text-slate-200 active:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}