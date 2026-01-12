// src/app/blog/[slug]/page.tsx
import BlogPostClient from '@/sections/BlogPostClient'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    // Forzamos el fondo oscuro y texto claro aquí para evitar el "pantallazo blanco"
    <main className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
      <BlogPostClient slug={slug} />
    </main>
  )
}