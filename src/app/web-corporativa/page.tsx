import Link from 'next/link';
import { CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

// Pilar SEO: Metadata para captar leads B2B
export const metadata = {
  title: "Sitio Web Corporativo Premium | Veritus Studio",
  description: "Arquitectura digital de alto rendimiento para marcas que lideran su industria. Desarrollo con Next.js 15 y SEO avanzado. Desde $3.800.000 COP.",
}

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 group">
    <div className="mt-1 transition-transform duration-300 group-hover:scale-110">
      <CheckCircle2 className="w-5 h-5 text-indigo-600" />
    </div>
    <span className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{text}</span>
  </li>
);

export default function WebCorporativaService() {
  const features = [
    "Arquitectura multi-página escalable",
    "Blog profesional (CMS Sanity integrado)",
    "Optimización Core Web Vitals (LCP < 1.2s)",
    "Dashboard de analítica y conversión",
    "Infraestructura Edge Computing",
    "Despliegue optimizado en 14 días"
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-slate-950 selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-500">
      
      {/* Hero Section con Patrón de Ingeniería */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Grid decorativo optimizado */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:[mask-image:linear-gradient(180deg,transparent,rgba(0,0,0,1))] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 mb-6 text-[10px] font-black tracking-[0.3em] text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-500/10 rounded-full border border-indigo-100 dark:border-indigo-500/20">
            Enterprise Solutions
          </span>
          <h1 className="text-balance text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-8">
            Autoridad Digital <br /> 
            <span className="text-indigo-600 dark:text-indigo-500 font-serif italic font-normal">sin compromisos</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Plataformas corporativas que no solo proyectan prestigio, sino que están diseñadas bajo ingeniería de precisión para dominar los resultados de búsqueda.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tarjeta Técnica */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Especificaciones del Sistema</h3>
              <div className="flex flex-col gap-8">
                <div className="space-y-2">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Inversión Base</p>
                  <p className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">
                    $3.8M<span className="text-xl text-slate-400 font-normal ml-2">COP</span>
                  </p>
                </div>
                
                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                  {features.map((f) => <FeatureItem key={f} text={f} />)}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-indigo-100 dark:bg-indigo-900" />
                ))}
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-tight">
                Infraestructura validada <br /> por +20 corporaciones.
              </p>
            </div>
          </div>

          {/* Tarjeta Estratégica */}
          <div className="lg:col-span-5 bg-indigo-600 dark:bg-indigo-700 rounded-[2.5rem] p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-indigo-500/20">
            {/* Blur decorativo */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700"></div>
            
            <div className="relative">
              <h3 className="text-sm font-bold text-indigo-200 uppercase tracking-widest mb-8">Segmentos de Élite</h3>
              <p className="text-2xl font-bold leading-tight mb-8">
                Diseñamos para firmas que compiten por la confianza de clientes de alto nivel.
              </p>
              
              <ul className="space-y-4">
                {["Consultorías de Estrategia", "Firmas Legales & Contables", "Clínicas Especializadas", "Real Estate de Lujo"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
                    <span className="text-sm font-bold tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              href="/proyectos" 
              className="relative mt-12 flex items-center justify-between p-5 bg-white text-indigo-600 rounded-2xl font-black text-sm hover:bg-slate-900 hover:text-white transition-all group"
            >
              Ver casos de estudio
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center space-y-10">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">¿Hablamos de su próximo hito digital?</h2>
            <p className="text-slate-500 font-medium">Consultoría estratégica gratuita por tiempo limitado.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/573125858242?text=Hola!%20Quiero%20solicitar%20una%20consultoría%20para%20un%20Sitio%20Web%20Corporativo"
              className="w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-slate-900 transition-all duration-300 shadow-xl shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-3 group"
            >
              Agendar Consultoría
              <ExternalLink className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}