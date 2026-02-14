"use client"

import Link from "next/link"

interface StudioLogoProps {
  className?: string
  onClick?: () => void
}

export function StudioLogo({ className = "", onClick }: StudioLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`group flex items-center gap-4 outline-none z-[120] select-none ${className}`}
    >
      {/* Isotipo: El "Sello" de Veritus */}
      <div className="relative flex items-center justify-center">
        <div className="w-9 h-9 bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 rounded-sm flex items-center justify-center shadow-2xl group-hover:border-indigo-500/30 transition-colors">
          <span className="text-white font-light text-[10px] tracking-[0.2em] ml-1">VS</span>
        </div>
        <div className="absolute -right-2 h-6 w-[1px] bg-slate-700" />
      </div>

      {/* Logotipo: Tipografía de Alta Gama */}
      <div className="flex flex-col justify-center">
        <h2 className="text-white text-sm font-black tracking-[0.25em] leading-none mb-1">
          VERITUS <span className="text-indigo-400 opacity-90">STUDIO</span>
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-[7px] text-slate-500 uppercase tracking-[0.5em] font-bold">
            Digital Studio
          </span>
          <span className="w-1 h-1 rounded-full bg-indigo-500/50 shadow-[0_0_5px_rgba(99,102,241,0.5)]" />
        </div>
      </div>
    </Link>
  )
}

export default StudioLogo
