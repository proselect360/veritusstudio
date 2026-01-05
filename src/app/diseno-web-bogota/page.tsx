import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diseño web en Bogotá | Veritus Studio",
  description:
    "Servicio profesional de diseño web en Bogotá. Sitios rápidos, optimizados para Google y enfocados en conversión.",
}

export default function DisenoWebBogotaPage() {
  return (
    <main className="px-6 py-24 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold">
        Diseño web profesional en Bogotá
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        En Veritus Studio ofrecemos diseño web en Bogotá para empresas,
        marcas personales y startups que buscan posicionarse y vender más.
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">
          Agencia de diseño web en Bogotá
        </h2>
        <p className="mt-4 text-gray-600">
          Diseñamos sitios web rápidos, modernos y optimizados para SEO,
          utilizando tecnologías como Next.js y estrategias de conversión.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">
          ¿Por qué elegirnos en Bogotá?
        </h2>
        <ul className="mt-6 space-y-3 text-gray-600">
          <li>Diseño personalizado y premium</li>
          <li>Optimización SEO desde el inicio</li>
          <li>Atención directa y estratégica</li>
        </ul>
      </section>
    </main>
  )
}
