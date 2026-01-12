'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Scale, Code2, Clock, CreditCard, Copyright, HeartHandshake, RefreshCcw } from 'lucide-react'

// Pilar Rendimiento: Metadata en Client Components debe ir en un archivo layout.ts o ser inyectada.
// Por ahora, mantengamos el enfoque de diseño premium.

const TermCard = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
  <div className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 tracking-tight transition-colors">{title}</h2>
    </div>
    <div className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium transition-colors">
      {children}
    </div>
  </div>
);

export default function TerminosPage() {
  const currentYear = new Date().getFullYear()
  const [mounted, setMounted] = useState(false)

  // Evita errores de hidratación en Next.js 15 al renderizar fechas o temas dinámicos
  useEffect(() => setMounted(true), [])

  if (!mounted) return null; // Retorno preventivo para consistencia de UI

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 selection:bg-indigo-900 selection:text-white transition-colors duration-500">
      
      {/* Navegación sutil */}
      <nav className="max-w-7xl mx-auto px-6 py-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Studio
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        {/* Header de alto impacto */}
        <header className="max-w-3xl mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 italic transition-colors">
            Service <br />
            <span className="text-indigo-600 dark:text-indigo-500 not-italic">Terms.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed transition-colors">
            Nuestros términos garantizan una relación de trabajo transparente, protegiendo la propiedad intelectual y los plazos de entrega de tu ecosistema digital.
          </p>
          <p className="mt-4 text-sm text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.2em]">
            Última revisión: Enero, {currentYear} • Colombia
          </p>
        </header>

        {/* Grid de Términos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TermCard icon={Scale} title="Aceptación">
            Al contratar, aceptas que Veritus Studio ejecute la ingeniería bajo estos términos. La transparencia es la base de nuestro éxito mutuo.
          </TermCard>

          <TermCard icon={Code2} title="Alcance Tech">
            Desarrollo en Next.js 15, dominio por 1 año, hosting de alto rendimiento y SSL. Infraestructura lista para escalar.
          </TermCard>

          <TermCard icon={Clock} title="Plazos Elite">
            Entrega en 14 días hábiles. La puntualidad es un pilar; requerimos el material completo para iniciar el cronómetro.
          </TermCard>

          <TermCard icon={CreditCard} title="Estructura de Pago">
            Modelo 50/50 equilibrado. Precios finales en COP. Procesamiento seguro a través de plataformas bancarias oficiales.
          </TermCard>

          <TermCard icon={Copyright} title="IP & Derechos">
            Tú eres dueño del código y diseño tras el pago final. Veritus se reserva el derecho de exhibir el caso de éxito en su portafolio.
          </TermCard>

          <TermCard icon={HeartHandshake} title="Soporte VIP">
            30 días de garantía técnica post-lanzamiento. Estamos contigo durante la fase crítica de adopción del mercado.
          </TermCard>
        </div>

        {/* Sección de Modificaciones - Call to Action */}
        <div className="mt-12 p-10 bg-slate-900 dark:bg-indigo-950/40 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-transparent dark:border-indigo-500/20 transition-all">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
              <RefreshCcw className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Modificaciones</h3>
              <p className="text-slate-400 text-sm max-w-md mt-1">
                Evolucionamos estos términos para cumplir con nuevas leyes de comercio electrónico en Colombia.
              </p>
            </div>
          </div>
          <Link 
            href="https://wa.me/573125858242?text=Hola!%20Tengo%20una%20duda%20sobre%20los%20términos%20de%20servicio"
            className="px-8 py-4 bg-indigo-600 hover:bg-white hover:text-slate-900 text-white font-bold rounded-2xl transition-all duration-300 whitespace-nowrap"
          >
            Consultar dudas
          </Link>
        </div>

        <footer className="mt-20 text-center">
          <p className="text-slate-400 dark:text-slate-600 text-xs font-bold uppercase tracking-[0.3em]">
            Veritus Studio &copy; {currentYear} • Bogotá, Colombia
          </p>
        </footer>
      </div>
    </main>
  )
}