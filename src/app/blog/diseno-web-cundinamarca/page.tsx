import React from 'react';
import { Metadata } from 'next';
import Hero from '@/sections/Hero'; // Ajusta según tus nombres de componentes
import Portfolio from '@/sections/Portfolio';
import Contact from '@/sections/Contact';
import { CheckCircle2, Zap, Globe, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diseño Web Cundinamarca | Expertos en Sabana y Sumapaz',
  description: 'Ingeniería web de alto rendimiento para el motor industrial de Cundinamarca. Cobertura en Madrid, Mosquera, Funza y Fusagasugá.',
  keywords: ['Diseño web Cundinamarca', 'Desarrollo web Madrid Mosquera', 'Agencia digital Funza', 'SEO Cundinamarca'],
};

export default function CundinamarcaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTOR - ENFOQUE REGIONAL */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-950">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] uppercase border rounded-full border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
              Infraestructura Digital Regional
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none mb-8">
              Diseño Web de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 italic">
                Alto Rendimiento
              </span> <br />
              en Cundinamarca.
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              No solo creamos páginas; construimos terminales de venta digital optimizadas para las industrias líderes de la 
              <strong> Sabana de Bogotá y el Sumapaz</strong>. Ingeniería web con Next.js 15 para empresas que no aceptan segundos lugares.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID - COBERTURA ESTRATÉGICA */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
              <MapPin className="w-10 h-10 text-indigo-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Sabana Occidente</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Potenciamos el sector logístico e industrial de <strong>Mosquera, Madrid y Funza</strong> con plataformas escalables de e-commerce y gestión de alta velocidad.
              </p>
            </div>
            
            <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
              <Globe className="w-10 h-10 text-purple-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Sabana Centro</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Soluciones exclusivas para el comercio de alto nivel y servicios especializados en <strong>Chía, Cajicá y Zipaquirá</strong>.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5">
              <Zap className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Región del Sumapaz</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Llevamos la transformación digital a <strong>Fusagasugá</strong> y sus alrededores, elevando el estándar de la presencia web local con tecnología global.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. POR QUÉ VERITUS (VENTAJA COMPETITIVA) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 dark:text-white tracking-tight">
                El estándar de ingeniería <br />que tu negocio requiere.
              </h2>
              <ul className="space-y-6">
                {[
                  { t: 'Velocidad Radical', d: 'Webs que cargan en menos de 1 segundo para no perder clientes en la Sabana.' },
                  { t: 'SEO Geo-Localizado', d: 'Aparece cuando tus clientes en Madrid o Funza te busquen en Google.' },
                  { t: 'Seguridad Empresarial', d: 'Arquitectura Next.js 15, la más segura y estable del mercado actual.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold dark:text-white">{item.t}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-[3rem] aspect-square flex items-center justify-center border border-indigo-500/10">
               {/* Aquí puedes poner una imagen de un proyecto o un gráfico de velocidad */}
               <span className="text-indigo-500 font-black text-8xl italic opacity-20">SEO</span>
            </div>
          </div>
        </div>
      </section>

    
      <Contact />
    </div>
  );
}