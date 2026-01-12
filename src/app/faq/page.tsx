import Header from '@/components/Header'
import Footer from '@/sections/Footer'
import FAQSection from '@/sections/FAQSection' // Importamos la sección que sacamos de la Home

export default function FAQPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6">
            Preguntas <span className="text-indigo-500">Frecuentes.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl font-medium">
            Todo lo que necesitas saber sobre trabajar con Veritus Studio.
          </p>
        </section>

        {/* Aquí reaparece tu acordeón de preguntas */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}