import Link from 'next/link';
import { ShoppingBag, ShieldCheck, Zap, Globe, ArrowRight, CreditCard } from 'lucide-react';

export const metadata = {
  title: "E-commerce de Alto Rendimiento | Veritus Studio",
  description: "Infraestructura de comercio electrónico escalable, segura y optimizada para el mercado colombiano. Desde $5.500.000 COP.",
}

// Componente reutilizable para las características de la tienda
const ShopFeature = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <li className="flex items-center gap-4 group">
    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600">
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-slate-600 font-semibold tracking-tight">{text}</span>
  </li>
);

export default function TiendaOnlineService() {
  const shopFeatures = [
    { icon: ShoppingBag, text: "Catálogo curado de hasta 50 productos" },
    { icon: CreditCard, text: "Ecosistema de pagos (Wompi, PayU, ePayco)" },
    { icon: Zap, text: "Arquitectura Headless para velocidad extrema" },
    { icon: Globe, text: "Logística integrada a nivel nacional" },
    { icon: ShieldCheck, text: "Certificación SSL y seguridad bancaria" },
    { icon: ArrowRight, text: "Panel de administración intuitivo" }
  ];

  return (
    <main className="min-h-screen bg-[#fcfcfd] selection:bg-indigo-100 selection:text-indigo-900">
      {/* Hero Section - Enfoque en Conversión */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 py-1 px-4 mb-8 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">Listo para escalar ventas</span>
          </div>
          
          <h1 className="text-balance text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-8">
            Tu marca, disponible <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">24/7 en todo el país.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Desarrollamos experiencias de compra fluidas que eliminan la fricción. No es solo una tienda; es una máquina de ventas optimizada con la tecnología de las marcas más grandes del mundo.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Card Principal: Especificaciones Técnicas */}
          <div className="lg:col-span-8 bg-white rounded-[3rem] border border-slate-200 p-8 lg:p-14 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-2">Configuración Premium</h2>
                <p className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Desde $5.5M <span className="text-lg text-slate-400 font-medium tracking-normal">COP</span></p>
              </div>
              <div className="bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase">Tiempo de entrega</p>
                <p className="text-xl font-bold text-slate-900 italic">14 días hábiles</p>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-8 mb-12">
              {shopFeatures.map((f, i) => (
                <ShopFeature key={i} icon={f.icon} text={f.text} />
              ))}
            </ul>

            <div className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex flex-wrap items-center justify-center gap-8">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Compatible con:</span>
              {/* Espacio para logos de pasarelas */}
              <div className="flex gap-6 grayscale opacity-60 hover:opacity-100 transition-all cursor-default font-black text-slate-400">
                <span>PayU</span>
                <span>Wompi</span>
                <span>ePayco</span>
              </div>
            </div>
          </div>

          {/* Card Lateral: Audiencia */}
          <div className="lg:col-span-4 bg-slate-900 rounded-[3rem] p-8 lg:p-12 text-white flex flex-col h-full">
            <div className="space-y-8">
              <h3 className="text-indigo-400 text-sm font-bold uppercase tracking-widest">¿Quiénes califican?</h3>
              <div className="space-y-6">
                {[
                  { title: "Boutiques Premium", desc: "Marcas que cuidan cada detalle visual." },
                  { title: "Direct-to-Consumer", desc: "Creadores de productos que quieren el margen completo." },
                  { title: "Retail Físico", desc: "Negocios locales listos para el mercado nacional." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <p className="text-lg font-bold mb-1 group-hover:text-indigo-400 transition-colors">{item.title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-12">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-indigo-300 font-bold uppercase mb-2">Dato Clave</p>
                <p className="text-sm text-slate-300 leading-snug font-medium">
                  Un sitio web lento pierde el 40% de sus clientes. Nuestra infraestructura es un 300% más rápida que un e-commerce tradicional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mt-24 text-center">
          <div className="inline-block relative">
             <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl rounded-full"></div>
             <a
              href="https://wa.me/573125858242?text=Hola!%20Quiero%20cotizar%20una%20Tienda%20Online"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-4 px-14 py-6 bg-indigo-600 text-white text-xl font-black rounded-full hover:bg-slate-900 hover:scale-105 transition-all duration-500 shadow-2xl group"
            >
              Lanzar mi Tienda
              <ShoppingBag className="w-6 h-6 transition-transform group-hover:-rotate-12" />
            </a>
          </div>
          <p className="mt-8 text-slate-400 font-medium text-sm">
            Disponibilidad para nuevos proyectos: <span className="text-emerald-500 font-bold">Inmediata</span>
          </p>
        </div>
      </section>
    </main>
  );
}