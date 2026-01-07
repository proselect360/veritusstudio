import Link from 'next/link';
import { CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react'; // Necesitas instalar lucide-react

export const metadata = {
  title: "Sitio Web Corporativo Premium | Veritus Studio",
  description: "Arquitectura digital de alto rendimiento para marcas que lideran su industria. Desde $3.800.000 COP.",
}

// 1. Componente de beneficio extraído para limpieza
const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 group">
    <div className="mt-1 transition-transform duration-300 group-hover:scale-110">
      <CheckCircle2 className="w-5 h-5 text-indigo-600" />
    </div>
    <span className="text-slate-600 font-medium leading-relaxed">{text}</span>
  </li>
);

export default function WebCorporativaService() {
  const features = [
    "Arquitectura multi-página escalable",
    "Blog profesional con CMS integrado",
    "Estrategia de SEO Técnico (Core Web Vitals)",
    "Dashboard de analítica avanzada",
    "Infraestructura Edge (Carga instantánea)",
    "Despliegue optimizado en 14 días hábiles"
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-indigo-100 selection:text-indigo-900">
      {/* Hero Section con Grainy Gradient */}
      <section className="relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full border border-indigo-100">
            Soluciones Enterprise
          </span>
          <h1 className="text-balance text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8">
            Autoridad Digital <br /> 
            <span className="text-indigo-600 font-serif italic font-normal">sin compromisos</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Diseñamos plataformas corporativas con Next.js que no solo se ven bien, sino que están construidas para convertir visitantes en clientes de alto valor.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tarjeta de Valor / Precio */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 lg:p-12 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-500 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Propuesta de Valor</h3>
              <div className="flex flex-col gap-8">
                <div className="space-y-2">
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-tighter">Inversión Base</p>
                  <p className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tighter">
                    $3.8M<span className="text-xl text-slate-400 font-normal ml-2">COP</span>
                  </p>
                </div>
                
                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                  {features.map((f) => <FeatureItem key={f} text={f} />)}
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 shadow-sm" />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium italic">
                Únete a más de 20 empresas que confían en nuestra infraestructura.
              </p>
            </div>
          </div>

          {/* Tarjeta de Segmentación */}
          <div className="lg:col-span-5 bg-indigo-600 rounded-[2.5rem] p-8 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden group">
            {/* Elemento decorativo */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700"></div>
            
            <div className="relative">
              <h3 className="text-sm font-bold text-indigo-200 uppercase tracking-widest mb-8">Perfil Ideal</h3>
              <p className="text-2xl font-semibold leading-snug mb-8">
                Diseñado específicamente para firmas legales, consultorías de élite y clínicas especializadas.
              </p>
              
              <ul className="space-y-4">
                {["Pymes en fase de expansión", "Profesionales de autoridad", "Empresas B2B", "Sector Salud y Legal"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-indigo-100/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
                    <span className="text-sm font-medium tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              href="/portafolio" 
              className="relative mt-12 flex items-center justify-between p-4 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
            >
              <span className="text-sm font-bold">Ver casos de estudio</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mt-20 text-center space-y-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">¿Listo para elevar el estándar de su marca?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/573125858242?text=Hola!%20Quiero%20cotizar%20un%20Sitio%20Web%20Corporativo"
              className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-slate-200 flex items-center justify-center gap-3 group"
            >
              Iniciar Consultoría
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </a>
            <p className="text-sm text-slate-400 font-medium">
              Respuestas en menos de 2 horas hábiles.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
