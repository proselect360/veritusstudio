'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 bg-slate-100 rounded-lg animate-pulse" />
                <div className="space-y-3">
                  <div className="h-4 bg-slate-100 rounded animate-pulse w-4/5" />
                  <div className="h-4 bg-slate-100 rounded animate-pulse w-3/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    )
  }

  const services = [
    { href: '#services', label: 'Landing Pages' },
    { href: '#services', label: 'Sitios Corporativos' },
    { href: '#services', label: 'Tiendas E-commerce' },
  ]

  // Nueva sección para potenciar el SEO
  const resources = [
    { href: '/blog/cuanto-cuesta-pagina-web-colombia', label: 'Guía de Precios 2026' },
    { href: '#process', label: 'Metodología de Trabajo' },
    { href: '#contact', label: 'Solicitar Cotización' },
  ]

  const legalLinks = [
    { href: '#warranty', label: 'Garantía Veritus' },
    { href: '/terminos', label: 'Términos' },
    { href: '/privacidad', label: 'Privacidad' },
  ]

  return (
    <footer className="border-t border-slate-200/70 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Columna 1: Logo y Eslogan */}
          <div className="space-y-6">
            <Link href="/" className="group inline-flex items-center gap-4">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative h-full bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl transition-transform group-hover:scale-105">
                  V
                </div>
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tight">Veritus Studio</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              Expertos en desarrollo con Next.js. Creamos herramientas digitales de alto rendimiento que impulsan el crecimiento de empresas colombianas.
            </p>
            <div className="flex gap-4">
               {/* Instagram */}
               <a href="https://instagram.com/veritusstudio" target="_blank" className="text-slate-400 hover:text-pink-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
               {/* LinkedIn */}
               <a href="https://linkedin.com/company/veritusstudio" target="_blank" className="text-slate-400 hover:text-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
            </div>
          </div>

          {/* Columna 2: Recursos (SEO) */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Recursos Educativos</h4>
            <ul className="space-y-4">
              {resources.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-600 hover:text-indigo-600 text-sm font-semibold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Servicios</h4>
            <ul className="space-y-4">
              {services.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-slate-600 hover:text-indigo-600 text-sm font-semibold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Hablemos</h4>
              <p className="text-sm font-bold text-slate-800 tracking-tight underline decoration-indigo-500 underline-offset-4">contacto@veritus.studio</p>
              <p className="text-sm font-bold text-slate-800 mt-2">+57 312 585 8242</p>
            </div>
            
            <div className="pt-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Legal</h4>
              <div className="flex flex-wrap gap-4">
                {legalLinks.map(({ href, label }) => (
                  <Link key={label} href={href} className="text-xs font-bold text-slate-500 hover:text-indigo-600 uppercase">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
            © {currentYear} Veritus Studio — Medellín & Bogotá, Colombia.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-black text-slate-700 uppercase tracking-widest">Disponibles para nuevos proyectos</span>
          </div>
        </div>
      </div>
    </footer>
  )
}