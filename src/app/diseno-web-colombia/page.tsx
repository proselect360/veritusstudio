'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image' // Usamos el componente optimizado de Next.js
import Header from '@/components/Header'
import Footer from '@/sections/Footer'

export default function DisenoWebColombia() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      document.body.classList.add('loaded')
    }, 50)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 animate-pulse" aria-hidden="true" />
    )
  }

  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-28">
        {/* Hero */}
        <section className="relative min-h-[70vh] bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#1A237E_0%,transparent_60%)] opacity-5" />
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:py-28 text-center">
            <h1 className="text-4xl font-black md:text-6xl lg:text-7xl bg-gradient-to-r from-slate-900 to-[#1A237E] bg-clip-text text-transparent mb-6 leading-tight">
              Diseño web profesional
              <br className="hidden lg:block" />
              <span className="mt-3 block text-3xl font-light text-slate-600 md:text-4xl lg:inline">
                en Colombia
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-slate-700 md:text-2xl">
              Páginas web premium con Next.js para pymes en Bogotá, Medellín, Cali y toda Colombia.
              <br className="hidden sm:block" />
              Propuesta personalizada <strong>gratis</strong> en menos de 24 horas.
            </p>

            <div className="flex justify-center">
              <a
                href="#contacto-local"
                className="inline-flex items-center gap-3 rounded-3xl bg-gradient-to-r from-[#1A237E] to-[#3949AB] px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(26,35,126,0.4)] focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2"
              >
                Quiero mi cotización
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-16 lg:gap-24 md:grid-cols-2">
              <div>
                <h2 className="mb-8 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
                  ¿Por qué elegirnos en Colombia?
                </h2>

                <div className="space-y-6 text-lg text-slate-700">
                  {[
                    {
                      number: '1',
                      color: 'from-[#1A237E] to-[#3949AB]',
                      title: 'Next.js oficial Colombia',
                      text: 'Únicos partner oficiales React Colombia. Garantizamos LCP < 1s y excelente rendimiento.'
                    },
                    {
                      number: '2',
                      color: 'from-emerald-500 to-teal-500',
                      title: 'SEO local #1',
                      text: 'Clientes posicionados #1 en búsquedas como "restaurante Bogotá", "abogado Medellín", "odontólogo Cali" en 45-60 días.'
                    },
                    {
                      number: '3',
                      color: 'from-orange-500 to-amber-500',
                      title: 'WhatsApp + IA',
                      text: 'Chatbot con inteligencia artificial + integración completa WhatsApp Business. Captura leads 24/7.'
                    }
                  ].map((item) => (
                    <div
                      key={item.number}
                      className="group flex items-start gap-5 rounded-2xl bg-slate-50/60 p-5 transition-colors hover:bg-slate-100"
                    >
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} flex-shrink-0 font-bold text-white shadow-md`}
                      >
                        {item.number}
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-[#1A237E]">
                          {item.title}
                        </h3>
                        <p className="text-slate-700">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="relative rounded-3xl border border-slate-200/50 bg-gradient-to-br from-slate-50 to-blue-50 p-10 shadow-2xl backdrop-blur-sm lg:p-14">
                  <Image
                    src="/mockup-web-colombia.png"
                    alt="Ejemplo de página web profesional para pyme en Colombia - diseño moderno y rápido"
                    width={800}
                    height={1200}
                    className="h-auto w-full rounded-2xl shadow-2xl"
                    priority
                  />
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl border bg-white px-6 py-2.5 text-sm font-bold text-[#1A237E] shadow-lg">
                    Tu web lista en 14 días
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ciudades */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-16 text-center text-4xl font-black text-slate-900 lg:text-5xl">
              Donde estamos generando resultados
            </h2>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                { city: 'Bogotá D.C.', clients: '127+', leads: '2.4k/mes' },
                { city: 'Medellín', clients: '89+', leads: '1.8k/mes' },
                { city: 'Cali', clients: '65+', leads: '1.2k/mes' },
                { city: 'Todo Colombia', clients: '350+', leads: '7k+/mes' }
              ].map((item) => (
                <div
                  key={item.city}
                  className="group rounded-3xl border border-slate-200/50 bg-white p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  <h3 className="mb-4 text-2xl font-black text-slate-900 transition-colors group-hover:text-[#1A237E]">
                    {item.city}
                  </h3>
                  <p className="text-4xl font-black text-[#1A237E]">{item.clients}</p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-wide text-slate-600">
                    {item.leads} leads
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section
          id="contacto-local"
          className="bg-gradient-to-r from-[#1A237E] to-[#3949AB] py-24 text-white"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 text-4xl font-black drop-shadow-2xl lg:text-5xl">
              Tu página web en 14 días… o es gratis
            </h2>

            <p className="mx-auto mb-12 max-w-2xl text-xl opacity-90 drop-shadow-lg">
              Propuesta personalizada según tu ciudad y tu sector. Sin compromiso ni costo inicial.
            </p>

            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <a
                href="https://wa.me/573125858242?text=Hola%21%20Quiero%20cotizar%20mi%20p%C3%A1gina%20web%20en%20Colombia"
                className="flex flex-1 items-center justify-center gap-3 rounded-3xl bg-white/15 px-8 py-6 text-lg font-bold backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/25 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.668.15-.197.297-.768.967-.941 1.167-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.446.099-.149.05-.273-.025-.372-.074-.099-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.044h-.004c-1.843-.019-3.593-.754-4.878-2.105-1.285-1.35-1.998-3.139-1.998-5.043 0-1.903.713-3.693 2.005-5.043 1.292-1.35 3.021-2.098 4.864-2.098 1.843 0 3.573.748 4.864 2.098 1.292 1.35 2.005 3.14 2.005 5.043 0 1.904-.713 3.693-2.005 5.043-1.291 1.351-3.021 2.099-4.853 2.105m8.306-9.903c-.061-.446-.345-1.008-.992-1.363-.648-.355-1.461-.446-1.907-.446-.446 0-1.008.345-1.363.992-.355.648-.446 1.461-.446 1.907 0 1.66 1.006 3.241 2.88 4.343.446.248.992.297 1.487.297.495 0 1.04-.05 1.536-.297 1.874-1.102 2.88-2.683 2.88-4.343 0-.446-.091-1.259-.446-1.907-.355-.647-.917-.992-1.363-.992z" />
                </svg>
                WhatsApp ahora (rápido)
              </a>

              <a
                href="mailto:contacto@veritus.co?subject=Cotizaci%C3%B3n%20Web%20Colombia%20%7C%20[Tu%20Ciudad]"
                className="flex-1 rounded-3xl border-2 border-white/50 px-8 py-6 text-lg font-bold transition-all hover:border-white/80 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                Pedir cotización por email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}