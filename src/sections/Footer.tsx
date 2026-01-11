'use client'

import { useEffect, useState, memo } from 'react'
import Link from 'next/link'

// Memoizamos los links sociales para evitar re-renders
const SocialLink = memo(({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={`Visitar nuestro perfil de ${label}`}
    className="w-11 h-11 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-900/60 text-slate-500 hover:text-white hover:bg-indigo-600 transition-all duration-300 border border-slate-200 dark:border-slate-800 shadow-sm"
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
  </a>
))
SocialLink.displayName = 'SocialLink'

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Skeleton con altura fija para evitar Layout Shift (CLS)
  if (!mounted) {
    return <footer className="min-h-[400px] border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950" />
  }

  const navGroups = [
    {
      title: "Soluciones",
      links: [
        { href: '/#services', label: 'Landing Pages' },
        { href: '/#services', label: 'Sitios Corporativos' },
        { href: '/#services', label: 'Tiendas E-commerce' },
      ]
    },
    {
      title: "Recursos",
      links: [
        { href: '/blog/cuanto-cuesta-pagina-web-colombia', label: 'Guía de Precios 2026' },
        { href: '/#process', label: 'Metodología' },
        { href: '/#faq', label: 'Preguntas Frecuentes' },
      ]
    },
    {
      title: "Legal",
      links: [
        { href: '/#warranty', label: 'Garantía Veritus' },
        { href: '/terminos', label: 'Términos' },
        { href: '/privacidad', label: 'Privacidad' },
      ]
    }
  ]

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/50 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Glow sutil para coherencia visual sin afectar el rendimiento de GPU */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Branding */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="group inline-flex items-center gap-4 outline-none">
              <div className="relative w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:scale-105 transition-transform">
                V
              </div>
              <span className="text-xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                Veritus Studio<span className="text-indigo-600">.</span>
              </span>
            </Link>
            
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-sm font-medium">
              Ingeniería web de alto impacto en Colombia. Transformamos empresas con tecnología <span className="text-indigo-600 dark:text-indigo-400 font-bold">Next.js 15</span>.
            </p>

            <div className="flex gap-3">
              <SocialLink 
                href="https://instagram.com/veritusstudioweb" 
                label="Instagram"
                icon={<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />} 
              />
              <SocialLink 
                href="https://linkedin.com/company/VeritusStudio" 
                label="LinkedIn"
                icon={<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />} 
              />
            </div>
          </div>

          {/* Navegación */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">
                {group.title}
              </p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-semibold transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacto */}
          <div>
            <p className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-6">Hablemos</p>
            <div className="space-y-3">
              <a href="mailto:veritusstudioweb@gmail.com" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-indigo-600 transition-colors block break-all">
                veritusstudioweb@gmail.com
              </a>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">+57 312 585 8242</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest text-center md:text-left">
            © {currentYear} Veritus Studio — Medellín & Bogotá, Colombia.
          </p>
          
          <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest">
              Cupos limitados para Enero
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}