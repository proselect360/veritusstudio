import Link from 'next/link';
import { Target, MousePointer2, Zap, ArrowUpRight, MessageCircle } from 'lucide-react';

// Pilar SEO: Metadatos específicos para capturar tráfico de pauta
export const metadata = {
  title: "Landing Pages de Alta Conversión | Veritus Studio",
  description: "Diseñamos terminales de venta digital optimizados con Next.js 15. Velocidad extrema y arquitectura para maximizar leads. Desde $1.800.000 COP.",
  alternates: { canonical: '/servicios/landing-pages' },
}

const Advantage = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-colors">
    <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
    <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm tracking-tight">{text}</span>
  </div>
);

export default function LandingPageService() {
  const specs = [
    "Diseño UI/UX orientado a conversión",
    "Optimización de Core Web Vitals",
    "Integración con CRM y WhatsApp API",
    "Copywriting persuasivo (Ventas)",
    "SEO Local y marcado de datos",
    "Infraestructura Edge Serverless"
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-slate-950 selection:bg-indigo-900 selection:text-white">
      {/* Hero: Minimalismo y Autoridad */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        {/* Pilar Diseño: Decoración sutil de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-slate-100 text-xs font-bold tracking-widest uppercase">
              <Target className="w-3 h-3 text-indigo-400" />
              Focus on conversion
            </span>
          </div>
          
          <h1 className="text-balance text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 italic">
            Menos ruido, <br />
            <span className="text-indigo-600 not-italic">más clientes.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Creamos landing pages de alto impacto que transforman el tráfico en ingresos. Diseño único, velocidad extrema y arquitectura pensada para vender.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Panel de Oferta (Izquierda) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 border border-slate-200 dark:border-slate-800 relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 p-8">
                <MousePointer2 className="w-12 h-12 text-slate-100 dark:text-slate-800 group-hover:text-indigo-50 dark:group-hover:text-slate-700 transition-colors duration-500 -rotate-12" />
              </div>
              
              <p className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">Investment</p>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
                $1.8M <span className="text-xl text-slate-400 font-normal tracking-normal">COP</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {specs.map((s, i) => <Advantage key={i} text={s} />)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-500/5 p-6 rounded-[2rem] border border-indigo-100 dark:border-indigo-500/20">
                <p className="text-xs font-bold text-indigo-400 uppercase mb-2 italic">Timeline</p>
                <p className="text-2xl font-black text-indigo-900 dark:text-indigo-100 italic">10 Días</p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-500/5 p-6 rounded-[2rem] border border-emerald-100 dark:border-emerald-500/20">
                <p className="text-xs font-bold text-emerald-400 uppercase mb-2 italic">Performance</p>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-500" />
                  <p className="text-2xl font-black text-emerald-900 dark:text-emerald-100 tracking-tighter">99/100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Panel de Casos de Uso (Derecha) */}
          <div className="lg:col-span-5 bg-slate-900 rounded-[2.5rem] p-10 lg:p-14 text-white flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-10">Strategic Applications</h3>
              <ul className="space-y-8">
                {[
                  { t: "Lead Gen", desc: "Captura de contactos cualificados para servicios profesionales." },
                  { t: "Lanzamientos", desc: "Páginas de preventa para productos digitales o físicos." },
                  { t: "Ads Optimization", desc: "Destinos de pauta optimizados para maximizar el ROI de campañas." }
                ].map((item, i) => (
                  <li key={i} className="group border-l border-white/10 pl-5 hover:border-indigo-500 transition-colors">
                    <p className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                      {item.t}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-16 flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-sm italic flex-shrink-0">VS</div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Cada terminal de venta es auditado bajo estándares de <span className="text-white font-bold">PageSpeed Insights</span> antes de su implementación final.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mt-20 flex flex-col items-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
            <a
              href="https://wa.me/573125858242?text=Hola!%20Quiero%20cotizar%20una%20Landing%20Page%20Estratégica"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-3 group"
            >
              Iniciar mi proyecto
              <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
            </a>
            
            <Link
              href="/servicios"
              className="px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center"
            >
              Explorar otros planes
            </Link>
          </div>
          <p className="mt-8 text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em] animate-pulse">
            Limited development slots available
          </p>
        </div>
      </section>
    </main>
  );
}