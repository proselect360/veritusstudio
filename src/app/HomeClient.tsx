'use client'

import { useEffect, ReactNode } from 'react'
import Header from '@/components/Header'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import TestimonialsSection from '@/components/TestimonialsSection'
import Warranty from '@/sections/Warranty'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import PageSpeedCTA from '@/components/PageSpeedCTA'
import { motion } from 'framer-motion'

export default function HomeClient({ children }: { children: ReactNode }) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('loaded')
    }, 100) 
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      
      <main className="relative overflow-x-hidden bg-slate-950 min-h-screen flex flex-col selection:bg-indigo-500/30">
        
        {/* --- CAPA DE ILUMINACIÓN PREMIUM (Background Glows) --- */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[120px]" />
        </div>

        {/* --- SECCIÓN HERO --- */}
        <section id="inicio" className="scroll-mt-20 flex-1 relative z-10">
          <Hero />
        </section>
        
        <div className="flex flex-col gap-0 relative z-10">
          
          {/* --- SERVICIOS --- */}
          <section id="servicios" className="scroll-mt-24 border-t border-white/[0.02]">
            <Services />
          </section>
        
         


          {/* --- TESTIMONIOS --- */}
          <section id="testimonios" className="scroll-mt-24">
            <TestimonialsSection />
          </section>

          {/* --- CONTENIDO DINÁMICO (SANITY/OTROS) --- */}
          {children && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              id="dinamico" 
              className="py-0 bg-slate-950 transition-colors duration-500"
            >
              {children}
            </motion.div>
          )}

          {/* --- CONTACTO --- */}
          <section id="contacto" className="scroll-mt-24 bg-gradient-to-b from-slate-950 to-black">
            <Contact />
          </section>
         
          {/* --- GARANTÍA --- */}
          <section id="garantia" className="scroll-mt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />
              <Warranty />
            </div>
          </section>
          
        </div>
      </main>

      <Footer />
    </>
  )
}