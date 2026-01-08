'use client'

import { useState, useEffect } from 'react'

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000)
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`fixed bottom-6 right-6 z-[99] transition-all duration-700 ${
      isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'
    }`}>
      <a
        href="https://wa.me/573125858242?text=Hola!%20Quiero%20una%20página%20web%20para%20mi%20negocio%20en%20Colombia"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
        aria-label="Chatear por WhatsApp"
      >
        {/* Glow dinámico: Menos intenso en modo oscuro para que se vea elegante */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-40 dark:opacity-20 group-hover:opacity-80 transition-opacity animate-pulse" />
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-lg opacity-30 dark:opacity-10 scale-110 animate-ping" />

        {/* Botón Circular con borde adaptable */}
        <div className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#25D366] rounded-full shadow-2xl transition-all duration-500 hover:scale-110 border-4 border-white/20 dark:border-slate-900/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9 md:w-11 md:h-11 text-white"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </div>

        {/* Tooltip adaptable al tema */}
        <div className="absolute right-full bottom-1/2 translate-y-1/2 mr-5 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-4 group-hover:translate-x-0 hidden md:block">
          <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold px-5 py-3 rounded-2xl whitespace-nowrap shadow-2xl border border-white/10 dark:border-slate-200">
            ¡Chatea con nosotros! 🚀
            <div className="w-3 h-3 bg-slate-900 dark:bg-white rotate-45 absolute -right-1.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </a>
    </div>
  )
}