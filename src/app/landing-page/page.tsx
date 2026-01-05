import Link from 'next/link'

export const metadata = {
  title: "Landing Page Estratégica - Veritus Studio",
  description: "Página única de alto impacto para captar leads y vender 24/7. Desde $1.800.000 COP. Entrega en 10-14 días.",
}

export default function LandingPageService() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-indigo-50 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-700 bg-clip-text text-transparent leading-tight mb-8">
            Landing Page Estratégica
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto font-medium">
            Página única de alto impacto diseñada para captar leads y vender 24/7 con mensajes claros y llamadas a la acción potentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-900/5 to-purple-900/5 rounded-3xl p-8 border border-indigo-900/10">
              <p className="text-4xl md:text-5xl font-black text-indigo-900 mb-4">
                Desde $1.800.000 COP
              </p>
              <p className="text-lg text-slate-700 font-medium">
                Lanzamientos, servicios profesionales, captación de leads
              </p>
            </div>

            <ul className="space-y-6">
              {[
                "Diseño personalizado y único (no plantillas)",
                "Optimizada para móviles y velocidad extrema",
                "Formulario de contacto + integración WhatsApp",
                "SEO local avanzado para tu ciudad",
                "Entrega en 10-14 días",
                "1 revisión incluida"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-700 flex items-center justify-center text-xl font-bold">
                    ✓
                  </div>
                  <span className="text-lg text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-3xl p-12 backdrop-blur-sm border border-indigo-600/20">
            <p className="text-2xl font-bold text-slate-900 mb-6">
              Ideal para:
            </p>
            <ul className="space-y-4 text-lg text-slate-700">
              <li>• Profesionales independientes</li>
              <li>• Lanzamiento de productos o servicios</li>
              <li>• Captación de leads cualificados</li>
              <li>• Ventas directas online</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
            ¿Listo para tener tu landing page que genera clientes reales?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/573125858242?text=Hola!%20Quiero%20cotizar%20una%20Landing%20Page%20Estratégica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xl font-black rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500"
            >
              Cotizar por WhatsApp
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.446l-.232-.139-3.578.505.107-3.817.23-.205a9.86 9.86 0 011.446-5.03l.167-.224 3.815-.106.205.23a9.865 9.86 0 015.032 1.446l.233.139 3.578-.505-.107 3.817-.23.205a9.86 9.86 0 01-1.446 5.03l-.167.224-3.815.106-.205-.23a9.862 9.862 0 01-5.032-1.446z" />
              </svg>
            </a>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-12 py-6 border-4 border-slate-900 text-slate-900 text-xl font-black rounded-3xl hover:bg-slate-900 hover:text-white transition-all duration-500"
            >
              Ver otros servicios
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}