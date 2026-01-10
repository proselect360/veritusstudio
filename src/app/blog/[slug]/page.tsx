// src/app/blog/[slug]/page.tsx
import BlogPostClient from '@/sections/BlogPostClient'

// Convertimos la función en async para poder usar await
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  // Desvolvemos la promesa de params
  const { slug } = await params;

  // Ahora el slug es seguro de usar
  return <BlogPostClient slug={slug} />
}