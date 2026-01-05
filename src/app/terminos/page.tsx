import Link from 'next/link'

export const metadata = {
  title: "Términos y Condiciones - Veritus Studio",
  description: "Términos legales para el uso de los servicios de diseño web de Veritus Studio en Colombia.",
}

export default function TerminosPage() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/60 p-10 md:p-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 text-center">
            Términos y Condiciones
          </h1>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <p className="text-center text-slate-600">
              Última actualización: 5 de enero de {currentYear}
            </p>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Aceptación de los términos</h2>
              <p>
                Al contratar cualquiera de nuestros servicios o utilizar nuestro sitio web, aceptas plenamente estos Términos y Condiciones. Si no estás de acuerdo, por favor no utilices nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Servicios ofrecidos</h2>
              <p>
                Veritus Studio ofrece diseño y desarrollo de sitios web (landing pages, sitios corporativos y tiendas online) utilizando tecnologías modernas como Next.js. Todos los proyectos incluyen dominio .com.co por 1 año, hosting premium, certificado SSL y soporte inicial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Proceso y plazos de entrega</h2>
              <p>
                Nos comprometemos a entregar tu proyecto en un plazo máximo de 14 días hábiles desde la aprobación del diseño y recepción del contenido. Cualquier retraso por parte del cliente (falta de contenido, feedback, etc.) extenderá el plazo proporcionalmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Pagos y facturación</h2>
              <p>
                El pago se realiza 50% al inicio del proyecto y 50% al finalizar. Aceptamos transferencias bancarias, PSE y tarjetas de crédito. Todos los precios incluyen IVA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Propiedad intelectual</h2>
              <p>
                Una vez realizado el pago completo, los derechos de uso del sitio web pasan al cliente. Veritus Studio conserva el derecho de mostrar el proyecto en su portafolio como caso de éxito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Garantías y soporte</h2>
              <p>
                Ofrecemos 30 días de soporte gratuito post-entrega para correcciones menores. Mantenimiento mensual opcional disponible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán publicados en esta página.
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