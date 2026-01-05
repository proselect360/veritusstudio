import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diseño web en Medellín | Veritus Studio",
  description:
    "Servicio profesional de diseño web en Medellín. Webs rápidas, escalables y optimizadas para buscadores.",
}

export default function DisenoWebMedellinPage() {
  return (
    <main className="px-6 py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold">
        Diseño web profesional en Medellín
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        Ofrecemos diseño web en Medellín enfocado en resultados reales:
        posicionamiento, velocidad y conversión.
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">
          Diseño web para empresas en Medellín
        </h2>
        <p className="mt-4 text-gray-600">
          Creamos páginas web modernas y estratégicas para negocios que
          buscan crecer en el entorno digital.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">
          Beneficios de trabajar con Veritus Studio
        </h2>
        <ul className="mt-6 space-y-3 text-gray-600">
          <li>Arquitectura moderna con Next.js</li>
          <li>SEO técnico avanzado</li>
          <li>Diseño orientado a conversión</li>
        </ul>
      </section>
    </main>
  )
}

