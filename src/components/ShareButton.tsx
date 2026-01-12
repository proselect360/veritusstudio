"use client"

import { Share2, Check } from 'lucide-react'; // Usamos Lucide para consistencia
import { useState } from 'react';

interface ShareButtonProps {
  titulo: string;
}

export default function ShareButton({ titulo }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    // URL canónica para evitar compartir parámetros de rastreo innecesarios
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: titulo,
          text: `Lee esto en Veritus Studio: ${titulo}`,
          url: shareUrl,
        });
      } catch (err) {
        // No logueamos el error si el usuario simplemente canceló (AbortError)
        if ((err as Error).name !== 'AbortError') {
          console.error('Error al compartir:', err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        // Feedback visual sin usar alert() (Pilar UX/Accesibilidad)
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Error al copiar al portapapeles:', err);
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      aria-label={copied ? "Enlace copiado" : "Compartir este artículo"}
      className={`group relative px-10 py-5 font-bold rounded-full 
                 transition-all duration-300 active:scale-95 shadow-xl
                 ${copied 
                   ? 'bg-emerald-600 text-white shadow-emerald-500/20' 
                   : 'bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white hover:shadow-indigo-500/40'
                 }`}
    >
      <div className="flex items-center gap-3">
        <span className="tracking-widest text-[10px] font-black uppercase">
          {copied ? '¡Enlace Copiado!' : 'Compartir Artículo'}
        </span>
        
        {copied ? (
          <Check size={16} strokeWidth={3} className="animate-in zoom-in duration-300" />
        ) : (
          <Share2 
            size={16} 
            strokeWidth={3} 
            className="transition-transform group-hover:rotate-12 group-hover:-translate-y-1" 
          />
        )}
      </div>
      
      {/* Efecto de brillo sutil para el Pilar de Diseño */}
      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </button>
  );
}