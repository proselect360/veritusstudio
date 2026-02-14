'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-2xl font-black text-white mb-2">Algo falló</h1>
      <p className="text-slate-400 mb-8 max-w-md">
        No pudimos cargar esta página. Revisa la consola o intenta de nuevo.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-colors"
        >
          Reintentar
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-colors"
        >
          Ir al inicio
        </Link>
      </div>
    </div>
  )
}
