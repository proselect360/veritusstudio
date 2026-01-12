'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function GlobalFloatingShape() {
  const { scrollYProgress } = useScroll()

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    restDelta: 0.001
  })

  // Movimiento: De arriba hacia abajo cubriendo casi todo el scroll
  const yRight = useTransform(smoothProgress, [0, 1], ["0vh", "120vh"])
  const yLeft = useTransform(smoothProgress, [0, 1], ["10vh", "100vh"])
  
  const rotateRight = useTransform(smoothProgress, [0, 1], [0, 220])
  const rotateLeft = useTransform(smoothProgress, [0, 1], [0, -180])


  // Opacidad: Empieza suave, se intensifica y desaparece al final (footer)
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.3, 0.6, 0.4, 0])

  return (
    /* IMPORTANTE: z-[1] para estar justo encima del fondo del body 
       pero debajo del main (que debe ser z-10) 
    */
    <div className="fixed inset-0 z-[1] pointer-events-none select-none overflow-hidden">
      
      {/* SHAPE DERECHA */}
      <motion.div
        style={{ y: yRight, rotate: rotateRight, opacity }}
        className="absolute -right-[10%] top-0 w-[45%] md:w-[35%] aspect-square"
      >
        {/* Resplandor (Glow) */}
        <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] rounded-full" />
        <Image
          src="/3d-abstract-shape.webp" 
          alt="Abstract Shape Right"
          width={800}
          height={800}
          className="relative z-10 object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* SHAPE IZQUIERDA */}
      <motion.div
        style={{ y: yLeft, rotate: rotateLeft, opacity }}
        className="absolute -left-[10%] top-[20%] w-[40%] md:w-[30%] aspect-square"
      >
        {/* Resplandor (Glow) */}
        <div className="absolute inset-0 bg-blue-500/15 blur-[120px] rounded-full" />
        <Image
          src="/3d-abstract-shape.webp" 
          alt="Abstract Shape Left"
          width={800}
          height={800}
          className="relative z-10 object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>

    </div>
  )
}
