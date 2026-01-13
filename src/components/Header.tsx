'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Menu, X, Zap, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    setMounted(true)
    window.addEventListener('scroll', handleScroll, { passive: true })
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll, mobileOpen])

  const navLinks = [
    { href: '/servicios', label: 'Servicios' },
    { href: '/metodologia', label: 'Proceso' },
    { href: '/test', label: 'Test Speed', highlight: true },
    { href: '/faq', label: 'FAQ' }
  ]

  if (!mounted) return <div className="h-[88px] w-full bg-transparent" />

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled ? 'py-4 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-3 outline-none z-[120]">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500 rounded-[12px] blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
              <div className="relative h-full w-full bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[12px] flex items-center justify-center shadow-lg border border-white/20">
                <span className="text-xl font-black text-white">V</span>
              </div>
            </div>
            <span className="font-black text-xl tracking-tighter text-white uppercase flex items-center">
              Veritus<span className="text-blue-500">.</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`px-4 py-2 text-[13px] font-bold tracking-tight transition-all flex items-center gap-2 ${link.highlight ? 'text-blue-400' : 'text-slate-200 hover:text-white'}`}>
                    {link.highlight && <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="#contact" className="px-8 py-3 bg-white text-slate-950 font-black text-[11px] uppercase tracking-[0.2em] rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-blue-500/10">
              Empezar
            </Link>
          </nav>

          {/* BOTÓN HAMBURGUESA (SÓLO ABRE) */}
          {!mobileOpen && (
            <div className="flex lg:hidden z-[120]">
              <button
                onClick={() => setMobileOpen(true)}
                className="p-3 rounded-xl bg-blue-600 text-white shadow-blue-500/30 shadow-lg active:scale-90 transition-transform"
              >
                <Menu size={22} strokeWidth={3} />
              </button>
            </div>
          )}
        </div>

        <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" style={{ scaleX }} />
      </motion.header>

      {/* MENÚ MÓVIL FULLSCREEN */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[150] bg-slate-950 flex flex-col px-8"
          >
            {/* CABECERA DEL MENÚ (Logo + Botón Salir) */}
            <div className="h-[88px] flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[12px] flex items-center justify-center border border-white/20">
                        <span className="text-xl font-black text-white">V</span>
                    </div>
                    <span className="font-black text-xl tracking-tighter text-white uppercase">Veritus<span className="text-blue-500">.</span></span>
                </div>

                {/* BOTÓN SALIR DENTRO DEL MENÚ */}
                <button
                    onClick={() => setMobileOpen(false)}
                    className="p-3 rounded-xl bg-white text-slate-950 shadow-xl active:scale-90 transition-transform flex items-center gap-2"
                >
                    <span className="text-[10px] font-black uppercase tracking-widest pl-1">Cerrar</span>
                    <X size={22} strokeWidth={3} />
                </button>
            </div>

            {/* CONTENIDO DEL MENÚ */}
            <div className="flex-1 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
                
                <nav className="relative z-10 space-y-4">
                    <p className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em] mb-8 border-l-2 border-blue-500 pl-4">Navegación</p>
                    <ul className="space-y-2">
                        {navLinks.map((link, i) => (
                            <motion.li key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`group text-4xl font-black tracking-tighter uppercase flex items-center justify-between py-4 transition-all ${link.highlight ? 'text-blue-500' : 'text-white'}`}
                                >
                                    {link.label}
                                    <ArrowRight className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-all" />
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="pt-12 mt-8 border-t border-white/10">
                        <Link
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-center gap-4 w-full py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[2rem] font-black uppercase text-[11px] tracking-[0.3em] shadow-2xl shadow-blue-600/20"
                        >
                            Contactar Proyecto <Zap size={18} fill="currentColor" />
                        </Link>
                    </div>
                </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}