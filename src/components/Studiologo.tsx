"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface StudioLogoProps {
  className?: string;
  onClick?: () => void;
}

export const StudioLogo = ({ className = "", onClick }: StudioLogoProps) => {
  return (
    <Link 
      href="/" 
      onClick={onClick}
      // Reemplazamos cn() por un template literal estándar de JS
      className={`group flex items-center gap-4 outline-none z-[120] ${className}`}
    >
      {/* CONTENEDOR DEL ICONO */}
      <div className="relative h-12 w-12 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-500/10 rounded-xl rotate-45 transition-all duration-700 group-hover:rotate-90 group-hover:scale-110 group-hover:bg-blue-500/20" />
        
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative z-10"
        >
          <motion.path
            d="M12 10L4 20L12 30"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.path
            d="M28 10L36 20L28 30"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-500"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          />
          <motion.path
            d="M20 8C20 8 16 18 20 28M20 16C24 16 28 20 28 20"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="text-blue-400"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <circle cx="20" cy="32" r="1.5" className="fill-blue-500 animate-pulse" />
        </svg>
      </div>

      {/* TEXTO E IDENTIDAD VISUAL */}
      <div className="flex flex-col">
        <span className="text-2xl font-black tracking-tighter leading-none bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          VERITUS
        </span>
        <div className="flex items-center gap-2">
          <span className="h-[1px] w-4 bg-blue-500/50" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-400/80">
            Digital Studio
          </span>
        </div>
      </div>
    </Link>
  );
};

export default StudioLogo;

