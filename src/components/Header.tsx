'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, ArrowRight, MessageCircle } from 'lucide-react'
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

  // Enlaces Verificados y Optimizados para Conversión
  const navLinks = [
    { href: '/#services', label: 'Servicios' },
    { href: '/#process', label: 'Proceso' },
    { href: '/#projects', label: 'Proyectos' }, // Recomendado: Demuestra autoridad
    { href: '/blog/cuanto-cuesta-pagina-web-colombia', label: '¿Cuánto cuesta?', highlight: true },
    { href: '/#faq', label: 'FAQs' }, // Recomendado: Reduce fricción de venta
  ]

  if (!mounted) return null

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled 
            ? 'py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border-b border-slate-200/50 dark:border-white/5 shadow-xl shadow-slate-900/5' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-3 outline-none">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-50 transition-opacity" />
              <div className="relative h-full w-full bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-[14px] flex items-center justify-center shadow-lg transition-transform group-hover:shadow-indigo-500/20">
                <span className="text-xl font-black text-white">V</span>
              </div>
            </motion.div>
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
                className={`relative px-4 py-2 text-[13px] font-bold tracking-tight transition-all group ${
                  link.highlight 
                    ? 'text-indigo-600 dark:text-indigo-400' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {link.label}
                {!link.highlight && (
                  <motion.div className="absolute bottom-1.5 left-4 right-4 h-[2px] bg-indigo-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                )}
              </Link>
            ))}

            <div className="h-4 w-px bg-slate-200 dark:bg-white/10 mx-4" />

            {/* THEME TOGGLE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors mr-2"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div key="sun" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}><Sun size={18} className="text-amber-400" /></motion.div>
                ) : (
                  <motion.div key="moon" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}><Moon size={18} /></motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <Link
              href="/#contact"
              className="px-6 py-2.5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black text-[11px] uppercase tracking-[0.15em] rounded-full hover:scale-105 transition-all shadow-lg active:scale-95"
            >
              Contactar
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-600/20"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MENU MÓVIL REINVENTADO */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-[110] lg:hidden"
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-[120] bg-white dark:bg-slate-950 rounded-t-[3rem] shadow-2xl border-t border-slate-200 dark:border-white/10 p-8 lg:hidden"
            >
              <div className="w-12 h-1.5 bg-slate-200 dark:bg-white/10 rounded-full mx-auto mb-8" />
              
              <div className="flex flex-col gap-1 mb-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between py-4 px-6 rounded-2xl font-bold text-lg transition-colors ${
                        link.highlight 
                        ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' 
                        : 'text-slate-800 dark:text-slate-200 active:bg-slate-100 dark:active:bg-white/5'
                      }`}
                    >
                      {link.label}
                      <ArrowRight size={18} className="opacity-30" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Acciones Rápidas en Móvil */}
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="https://wa.me/573125858242"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-emerald-500/10 text-emerald-600 font-bold text-sm"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center py-4 rounded-2xl bg-indigo-600 text-white font-bold text-sm"
                >
                  Empezar Proyecto
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}