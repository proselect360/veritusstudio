'use client'

import dynamic from 'next/dynamic'

const GlobalFloatingShape = dynamic(
  () => import('@/components/GlobalFloatingShape'),
  { ssr: false }
)

export default function LazyFloatingShape() {
  return <GlobalFloatingShape />
}
