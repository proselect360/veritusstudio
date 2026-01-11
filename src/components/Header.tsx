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
    { href: '/#process', label: 'Proceso' },
    { href: '/blog/cuanto-cuesta-pagina-web-colombia', label: '¿Cuánto cuesta?', highlight: true },
    { href: '/#contact', label: 'Contacto' },
    { href: '/#warranty', label: 'Garantía' },
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
            ? 'py-3 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* LOGO ANIMADO */}
          <Link href="/" className="group flex items-center gap-3 outline-none">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-50 transition-opacity" />
              <div className="relative h-full w-full bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-black text-white">V</span>
              </div>
            </motion.div>
            <span className="hidden sm:block font-black text-xl tracking-tighter text-slate-900 dark:text-white">
              Veritus<span className="text-indigo-600">.</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-bold transition-colors group ${
                  link.highlight 
                  ? 'text-indigo-600 dark:text-indigo-400 ml-2' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {link.label}
                {!link.highlight && (
                  <motion.div className="absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                )}
              </Link>
            ))}

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-4" />

            {/* THEME TOGGLE ANIMADO */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl text-slate-700 dark:text-yellow-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><Sun size={18} /></motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><Moon size={18} /></motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <Link
              href="/#contact"
              className="ml-4 px-7 py-3 bg-indigo-600 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-600/20 transition-all active:scale-95"
            >
              Empezar
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU CON ANIMACIÓN OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-md z-[110] lg:hidden"
            />
            <motion.div 
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-x-4 top-24 z-[120] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 p-6 overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.href}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-4 px-6 text-xl font-bold rounded-2xl ${
                        link.highlight 
                        ? 'bg-indigo-600 text-white' 
                        : 'text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
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