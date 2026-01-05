'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import Process from '@/sections/Process'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import TestimonialsSection from '@/components/TestimonialsSection'


export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('loaded')
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}