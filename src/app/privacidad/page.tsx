import Link from 'next/link'

export const metadata = {
  title: "Política de Privacidad - Veritus Studio",
  description: "Cómo manejamos tus datos personales de acuerdo con la Ley 1581 de 2012 en Colombia.",
}

export default function PrivacidadPage() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/60 p-10 md:p-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 text-center">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <p className="text-center text-slate-600">
              Última actualización: 5 de enero de {currentYear}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Responsable del tratamiento</h2>
              <p>
                Veritus Studio, representado legalmente en Colombia, es el responsable del tratamiento de tus datos personales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Datos que recolectamos</h2>
              <p>
                Recolectamos información básica para prestar nuestros servicios: nombre, correo electrónico, teléfono, nombre de empresa y detalles del proyecto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Finalidad del tratamiento</h2>
              <p>
                Usamos tus datos únicamente para:
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Elaborar propuestas personalizadas</li>
                  <li>Comunicarnos durante el desarrollo del proyecto</li>
                  <li>Enviar facturas y recordatorios de pago</li>
                  <li>Ofrecer soporte técnico</li>
                  <li>Enviarte información relevante sobre nuestros servicios (solo con tu consentimiento)</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Tus derechos</h2>
              <p>
                Según la Ley 1581 de 2012, tienes derecho a conocer, actualizar, rectificar y suprimir tus datos personales. Puedes ejercerlos enviando un correo a contacto@veritus.co.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Seguridad</h2>
              <p>
                Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
              <p>
                Este sitio utiliza cookies esenciales para mejorar la experiencia de usuario y Google Analytics para medir tráfico (anonimizado).
              </p>
            </section>

            <div className="text-center mt-12">
              <Link
                href="/"
                className="inline-flex items-center gap-3 text-indigo-700 font-bold hover:text-indigo-900 transition-colors"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}