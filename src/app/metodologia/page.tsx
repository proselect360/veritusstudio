import Header from '@/components/Header'
import Footer from '@/sections/Footer'
import Process from '@/sections/Process' // Este es el componente que quitamos de la Home

export default function MetodologiaPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6">
            Nuestra <span className="text-indigo-500">Metodología.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl font-medium">
            Un proceso de ingeniería refinado para entregar resultados excepcionales en tiempo récord.
          </p>
        </section>

        {/* Aquí reaparece tu sección de pasos */}
        <Process />
      </main>
      <Footer />
    </div>
  )
}