import Header from '@/components/Header'
import Footer from '@/sections/Footer'
import Process from '@/sections/Process' // Este es el componente que quitamos de la Home

export default function MetodologiaPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Header />
      <main className="pt-0 pb-0">
        <Process />
      </main>
      <Footer />
    </div>
  )
}

