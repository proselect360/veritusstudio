'use client'

import Spline from '@splinetool/react-spline'

export default function Scene3D() {
  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center">
      <Spline 
        scene="https://prod.spline.design/TU_ID_DE_ESCENA/scene.splinecode" 
      />
    </div>
  )
}
