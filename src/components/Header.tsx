'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  // 1. Añadimos el link del Blog a la lista de navegación
  const navLinks = [
    { href: '/#services', label: 'Servicios' },
    { href: '/#process', label: 'Proceso' },
    { href: '/blog/cuanto-cuesta-pagina-web-colombia', label: '¿Cuánto cuesta?', highlight: true },
    { href: '/#warranty', label: 'Garantía' },
    { href: '/#contact', label: 'Contacto' },
  ]

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-out
          ${scrolled
            ? 'bg-white/90 backdrop-blur-2xl shadow-lg border-b border-slate-200/50 py-3'
            : 'bg-transparent border-b border-transparent py-5'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Veritus Studio - Inicio"
            >
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <div className="absolute inset-0 bg-indigo-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                <div className="relative h-full bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <span className="text-xl lg:text-2xl font-black text-white">V</span>
                </div>
              </div>
              <span className={`hidden sm:block font-black text-xl lg:text-2xl tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                Veritus Studio
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ href, label, highlight }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-bold transition-all duration-300 ${
                    highlight 
                      ? 'text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full hover:bg-indigo-600 hover:text-white' 
                      : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  {label}
                </Link>
              ))}

              <Link
                href="/#contact"
                className="ml-4 px-6 py-3 bg-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-indigo-600/40 transition-all active:scale-95"
              >
                Empezar ahora
              </Link>
            </nav>

            {/* Botón móvil */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-900 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      {mobileOpen && (
        <>
          <div 
            className="fixed inset-0 bg-slate-950/20 backdrop-blur-sm z-[110] lg:hidden"
            onClick={closeMobileMenu}
          />
          
          <div 
            className="fixed inset-x-4 top-24 z-[120] bg-white rounded-[2.5rem] shadow-3xl border border-slate-100 overflow-hidden lg:hidden"
          >
            <nav className="p-6 space-y-1">
              {navLinks.map(({ href, label, highlight }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className={`block py-4 px-6 text-lg font-bold rounded-2xl transition-all ${
                    highlight 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/#contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-600/20"
                >
                  Empezar ahora
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}