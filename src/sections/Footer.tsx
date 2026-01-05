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
                  <div className="h-4 bg-slate-100 rounded animate-pulse" />
                  <div className="h-4 bg-slate-100 rounded animate-pulse w-4/5" />
                  <div className="h-4 bg-slate-100 rounded animate-pulse w-3/5" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t border-slate-200/50">
            <div className="h-4 bg-slate-100 rounded animate-pulse max-w-xs mx-auto" />
          </div>
        </div>
      </footer>
    )
  }

const services = [
  { href: '/landing-page', label: 'Landing Pages Estratégicas' },
  { href: '/web-corporativa', label: 'Sitios Web Corporativos' },
  { href: '/tienda-online', label: 'Tiendas Online Profesionales' },

]

  const legalLinks = [
    { href: '/terminos', label: 'Términos y Condiciones' },
    { href: '/privacidad', label: 'Política de Privacidad' },
  ]

  
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-16">
          
          {/* Logo + Descripción */}
          <div className="lg:col-span-1">
            <Link 
              href="/" 
              className="group inline-flex items-center gap-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/30 rounded-2xl mb-6"
            >
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 rounded-3xl shadow-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="relative h-full bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl shadow-2xl ring-8 ring-white/70 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-3xl transition-all duration-700">
                  <span className="text-3xl font-black text-white tracking-tighter drop-shadow-2xl">
                    V
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-700 bg-clip-text text-transparent">
                  Veritus Studio
                </h3>
                <p className="text-sm text-slate-600 font-semibold mt-1">
                  Diseño web profesional en Colombia
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
              Creamos sitios web premium con Next.js que generan clientes reales para pymes colombianas.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-700 hover:text-indigo-700 text-base font-medium transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto + Legal */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">
              Contacto
            </h4>
            <div className="space-y-3 mb-8">
              <p className="text-base font-medium text-slate-800">
                contacto@veritus.co
              </p>
              <p className="text-base font-medium text-slate-700">
                +57 312 585 8242
              </p>
            </div>

            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-700 hover:text-indigo-700 text-base font-medium transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Badge + Redes */}
          <div className="lg:text-right">
            <div className="inline-block bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-indigo-600/5 backdrop-blur-sm border border-indigo-600/20 rounded-3xl px-8 py-6 shadow-xl mb-8">
              <p className="text-lg font-black text-indigo-900">
                +300 clientes
              </p>
              <p className="text-sm text-slate-700 font-semibold mt-2">
                en Bogotá, Medellín, Cali y toda Colombia
              </p>
            </div>

            <div className="flex items-center gap-4 lg:justify-end">
              <span className="text-sm text-slate-600 font-medium">Síguenos:</span>
              <div className="flex gap-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com/veritusstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/veritusstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200/60 text-center">
          <p className="text-sm text-slate-600 font-medium">
            © {currentYear} <span className="font-bold text-slate-800">Veritus Studio</span>. 
            Todos los derechos reservados. 
            <span className="block mt-2 md:inline md:mt-0">Hecho con ❤️ en Colombia</span>
          </p>
        </div>
      </div>
    </footer>
  )
}