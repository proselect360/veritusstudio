import Link from 'next/link'
import { ArrowLeft, Scale, Code2, Clock, CreditCard, Copyright, HeartHandshake, RefreshCcw } from 'lucide-react'

export const metadata = {
  title: "Términos y Condiciones | Veritus Studio",
  description: "Acuerdo legal y condiciones de servicio para el desarrollo de software y diseño web.",
}

// Componente para bloques legales con diseño de rejilla
const TermCard = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
  <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-lg font-black text-slate-900 tracking-tight">{title}</h2>
    </div>
    <div className="text-slate-500 text-sm leading-relaxed font-medium">
      {children}
    </div>
  </div>
);

export default function TerminosPage() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-min-h-screen bg-[#fcfcfd] selection:bg-indigo-900 selection:text-white">
      {/* Navegación sutil */}
      <nav className="max-w-7xl mx-auto px-6 py-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Studio
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        {/* Header de alto impacto */}
        <header className="max-w-3xl mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 italic">
            Service <br />
            <span className="text-indigo-600 not-italic">Terms.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Nuestros términos están diseñados para proteger la integridad de tu proyecto y garantizar una relación de trabajo transparente y profesional.
          </p>
          <p className="mt-4 text-sm text-slate-400 font-bold uppercase tracking-[0.2em]">
            Última revisión: 5 de enero de {currentYear}
          </p>
        </header>

        {/* Grid de Términos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <TermCard icon={Scale} title="Aceptación">
            Al contratar nuestros servicios, aceptas plenamente estos términos. Veritus Studio se compromete a la excelencia, y tu aceptación garantiza un flujo de trabajo sincronizado.
          </TermCard>

          <TermCard icon={Code2} title="Alcance Tech">
            Incluimos desarrollo en Next.js, dominio .com.co (1 año), hosting premium y certificado SSL. Todo configurado bajo estándares de alto rendimiento.
          </TermCard>

          <TermCard icon={Clock} title="Plazos Elite">
            Entrega en 14 días hábiles tras recibir el material completo. La puntualidad es nuestro sello; los retrasos externos ajustarán el cronograma proporcionalmente.
          </TermCard>

          <TermCard icon={CreditCard} title="Estructura de Pago">
            Modelo 50/50: Inicio y entrega. Precios con IVA incluido. Aceptamos PSE, tarjetas y transferencia para tu comodidad.
          </TermCard>

          <TermCard icon={Copyright} title="IP & Derechos">
            Tras el pago final, la propiedad total del código y diseño es tuya. Nos reservamos el derecho de exhibir el éxito en nuestro portafolio global.
          </TermCard>

          <TermCard icon={HeartHandshake} title="Soporte VIP">
            30 días de acompañamiento post-lanzamiento para ajustes técnicos menores. Tu tranquilidad tras el "Go Live" es nuestra prioridad.
          </TermCard>
        </div>

        {/* Sección de Modificaciones */}
        <div className="mt-12 p-10 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
              <RefreshCcw className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Modificaciones Contractuales</h3>
              <p className="text-slate-400 text-sm max-w-md mt-1">
                Nos reservamos el derecho de evolucionar estos términos. Cualquier cambio será notificado y publicado de manera inmediata en esta sección.
              </p>
            </div>
          </div>
          <Link 
            href="https://wa.me/573125858242"
            className="px-8 py-4 bg-indigo-600 hover:bg-white hover:text-slate-900 text-white font-bold rounded-2xl transition-all duration-300 whitespace-nowrap"
          >
            Dudas Legales
          </Link>
        </div>

        <footer className="mt-20 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
            Veritus Studio &copy; {currentYear} • Bogotá, Colombia
          </p>
        </footer>
      </div>
    </main>
  )
}