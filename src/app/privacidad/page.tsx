import Link from 'next/link'
// Eliminamos scale3d y dejamos iconos reales de Lucide
import { ShieldCheck, Eye, Lock, FileText, ArrowLeft, Scale } from 'lucide-react';

export const metadata = {
  title: "Privacidad y Tratamiento de Datos | Veritus Studio",
  description: "Transparencia total sobre el manejo de tus datos bajo la Ley 1581 de 2012 en Colombia.",
}

// Componente para resaltar secciones con iconos sutiles
const PolicySection = ({ icon: Icon, title, children }: { icon: any, title: string, children: React.ReactNode }) => (
  <section className="group py-8 border-b border-slate-100 last:border-0">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h2>
        <div className="text-slate-600 leading-relaxed font-medium max-w-2xl">
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default function PrivacidadPage() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header Minimalista */}
      <nav className="max-w-7xl mx-auto px-6 py-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Regresar a Veritus Studio
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        {/* Encabezado Editorial */}
        <header className="mb-16">
          <span className="text-indigo-600 text-xs font-black uppercase tracking-[0.3em] mb-4 block">
            Legal & Compliance
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Política de <br />
            <span className="text-slate-400 italic font-serif font-normal">Privacidad</span>
          </h1>
          <p className="text-slate-500 font-medium">
            Última actualización: 5 de enero de {currentYear} • Colombia
          </p>
        </header>

        {/* Contenido Estructurado */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-sm">
          <div className="max-w-3xl">
            <PolicySection icon={ShieldCheck} title="1. Responsable del tratamiento">
              <p>
                Veritus Studio, operando bajo la normativa colombiana, es el titular y responsable de la gestión de activos de información y datos personales recolectados a través de esta plataforma.
              </p>
            </PolicySection>

            <PolicySection icon={FileText} title="2. Datos que recolectamos">
              <p>
                Limitamos la recolección al mínimo necesario para establecer una relación comercial de alto valor: 
                <span className="block mt-2 text-slate-900">Nombre, identificación corporativa, canales de contacto y requerimientos técnicos del proyecto.</span>
              </p>
            </PolicySection>

            <PolicySection icon={Eye} title="3. Finalidad del tratamiento">
              <p>Procesamos información con el único fin de elevar la precisión de nuestros servicios:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {["Propuestas comerciales", "Gestión de proyectos", "Soporte especializado", "Facturación electrónica"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection icon={Lock} title="4. Tus derechos">
              <p>
                Bajo la <strong className="text-slate-900 font-bold">Ley 1581 de 2012</strong>, usted mantiene el control absoluto. Puede solicitar acceso, rectificación o eliminación total de su información enviando un requerimiento formal a:
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 inline-block">
                <code className="text-indigo-600 font-bold">contacto@veritus.co</code>
              </div>
            </PolicySection>

            <PolicySection icon={ShieldCheck} title="5. Protocolos de Seguridad">
              <p>
                Implementamos estándares de encriptación y acceso restringido. Su información es tratada como un activo crítico, protegida contra acceso no autorizado mediante infraestructura de última generación.
              </p>
            </PolicySection>
          </div>

          {/* Footer de la página legal */}
          <footer className="mt-16 pt-10 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-400 font-medium italic">
              Al interactuar con nuestra plataforma, usted acepta los términos descritos en este documento. 
              Veritus Studio se reserva el derecho de actualizar esta política para cumplir con nuevas normativas.
            </p>
          </footer>
        </div>
      </div>
    </main>
  )
}