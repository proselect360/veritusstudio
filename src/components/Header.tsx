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
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Servicios' },
    { href: '#process', label: 'Proceso' },
    { href: '#contact', label: 'Contacto' },
  ]

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out
          ${scrolled
            ? 'bg-white/85 backdrop-blur-2xl shadow-lg shadow-black/5 border-b border-white/40'
            : 'bg-white/40 backdrop-blur-xl border-b border-transparent'
          }
        `}
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="group relative flex items-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/30 rounded-2xl"
              aria-label="Veritus Studio - Inicio"
            >
              <div className="relative w-10 h-10 lg:w-14 lg:h-14">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 rounded-3xl shadow-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="relative h-full bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl shadow-2xl ring-8 ring-white/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-3xl transition-all duration-700">
                  <span className="text-2xl lg:text-4xl font-black text-white tracking-tighter drop-shadow-2xl">
                    V
                  </span>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000 pointer-events-none" />
              </div>

              <span className="hidden sm:block font-black text-xl lg:text-3xl bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-700 bg-clip-text text-transparent tracking-tight">
                Veritus Studio
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12" aria-label="Menú principal">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="group relative text-lg font-bold text-slate-800 hover:text-indigo-700 transition-colors duration-400"
                >
                  {label}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full group-hover:w-full transition-all duration-500 ease-out" />
                  <span className="absolute inset-0 -z-10 bg-indigo-600/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              ))}

              <Link
                href="#contact"
                className="group relative ml-8 px-8 py-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white font-black text-base rounded-full shadow-2xl hover:shadow-3xl hover:shadow-indigo-600/50 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/50"
              >
                <span className="relative z-10">Empezar ahora</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
              </Link>
            </nav>

            {/* Botón móvil */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-3 rounded-2xl bg-white/60 backdrop-blur-xl hover:bg-white/80 shadow-lg hover:shadow-xl transition-all duration-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/40"
              aria-label={mobileOpen ? 'Cerrar menú móvil' : 'Abrir menú móvil'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      {mobileOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          
          <div 
            id="mobile-menu"
            className="fixed inset-x-0 top-16 z-50 bg-white/95 backdrop-blur-2xl shadow-3xl border-t border-white/50 overflow-hidden lg:hidden"
          >
            <nav className="px-8 py-12 space-y-6" aria-label="Menú móvil">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className="group block py-5 px-6 text-2xl font-black text-slate-900 hover:text-indigo-700 hover:bg-indigo-50/60 rounded-3xl transition-all duration-500"
                >
                  <span className="relative">
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full group-hover:w-full transition-all duration-500" />
                  </span>
                </Link>
              ))}

              <div className="pt-8 mt-8 border-t border-slate-200/50">
                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center py-6 px-10 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white font-black text-xl rounded-3xl shadow-2xl hover:shadow-3xl hover:shadow-indigo-600/60 hover:scale-105 transition-all duration-500"
                >
                  Empezar ahora →
                </Link>
              </div>

              <p className="text-center text-base text-slate-600 font-medium mt-10">
                Respuesta inmediata por WhatsApp
              </p>
            </nav>
          </div>
        </>
      )}
    </>
  )
}