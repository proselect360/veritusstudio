"use client"

interface ShareButtonProps {
  titulo: string;
}

export default function ShareButton({ titulo }: ShareButtonProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: titulo,
          text: `Lee esto en Veritus Studio: ${titulo}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error al compartir', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        // Podrías usar un toast aquí en lugar de un alert para más nivel
        alert('¡Enlace copiado al portapapeles!');
      } catch (err) {
        console.error('Error al copiar', err);
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="group relative px-10 py-5 bg-slate-950 text-white font-bold rounded-full 
                 transition-all duration-300 active:scale-95 hover:bg-blue-600 
                 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] shadow-xl shadow-slate-200"
    >
      <div className="flex items-center gap-3">
        <span className="tracking-widest text-[10px] font-black uppercase">Compartir Artículo</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="transition-transform group-hover:rotate-12"
        >
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
          <polyline points="16 6 12 2 8 6"/>
          <line x1="12" y1="2" x2="12" y2="15"/>
        </svg>
      </div>
    </button>
  );
}