'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function GlobalFloatingShape() {
  const { scrollYProgress } = useScroll()

  // Movimiento ultra suave
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20
  })

  // Ajustamos el rango: 
  // y: que empiece en 10% y baje hasta el 80% de la pantalla
  const y = useTransform(smoothProgress, [0, 1], ["10vh", "80vh"])
  const rotate = useTransform(smoothProgress, [0, 1], [0, 180])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.5, 0.8, 0.5, 0])

  return (
    // Subimos el z-index a 1 para asegurar que esté sobre el fondo base pero bajo el texto
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      <motion.div
        style={{ 
          top: y,
          rotate,
          opacity
        }}
        className="absolute right-[-5%] lg:right-[10%] w-[80%] md:w-[50%] lg:w-[35%] aspect-square"
      >
        <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full" />
        <Image
          src="/3d-abstract-shape.webp"
          alt="Floating Shape"
          width={1000}
          height={1000}
          className="relative z-10 object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>
    </div>
  )
}