import Link from 'next/link';
import { ShoppingBag, ShieldCheck, Zap, Globe, ArrowRight, CreditCard } from 'lucide-react';

// Pilar SEO: Metadata estratégica para E-commerce
export const metadata = {
  title: "E-commerce de Alto Rendimiento | Veritus Studio",
  description: "Desarrollamos tiendas online Headless con Next.js 15. Velocidad extrema, pagos integrados y escalabilidad total. Desde $5.500.000 COP.",
  keywords: ["E-commerce Colombia", "Tiendas Next.js", "Ventas online Bogotá", "Desarrollo Headless"],
}

const ShopFeature = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <li className="flex items-center gap-4 group">
    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 dark:text-indigo-400">
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-slate-600 dark:text-slate-300 font-semibold tracking-tight">{text}</span>
  </li>
);

export default function TiendaOnlineService() {
  const shopFeatures = [
    { icon: ShoppingBag, text: "Catálogo curado (Hasta 50 productos)" },
    { icon: CreditCard, text: "Pasarelas: Wompi, PayU, ePayco" },
    { icon: Zap, text: "Arquitectura Headless (Velocidad extrema)" },
    { icon: Globe, text: "Logística integrada a nivel nacional" },
    { icon: ShieldCheck, text: "Certificación SSL y seguridad bancaria" },
    { icon: ArrowRight, text: "Panel de administración intuitivo" }
  ];

  return (
    <main className="min-h-screen bg-[#fcfcfd] dark:bg-slate-950 selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        {/* Decoración de fondo técnica */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 py-1 px-4 mb-8 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-full border border-emerald-100 dark:border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">Listo para escalar ventas</span>
          </div>
          
          <h1 className="text-balance text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-8">
            Tu marca, disponible <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent italic">24/7 en todo el país.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Desarrollamos experiencias de compra fluidas que eliminan la fricción. Implementamos tecnología **Headless Commerce** para que tu tienda cargue en milisegundos.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Panel Técnico */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 p-8 lg:p-14 shadow-sm backdrop-blur-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <h2 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-2">Configuración Premium</h2>
                <p className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Desde $5.5M <span className="text-lg text-slate-400 font-medium tracking-normal">COP</span></p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 px-6 py-3 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase">Tiempo de entrega</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white italic">14 días hábiles</p>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-8 mb-12">
              {shopFeatures.map((f, i) => (
                <ShopFeature key={i} icon={f.icon} text={f.text} />
              ))}
            </ul>

            <div className="p-6 bg-indigo-50/50 dark:bg-indigo-500/5 rounded-2xl border border-indigo-100 dark:border-indigo-500/20 flex flex-wrap items-center justify-center gap-8">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Integraciones de pago:</span>
              <div className="flex gap-6 grayscale opacity-60 hover:opacity-100 transition-all font-black text-slate-400 dark:text-slate-500 text-sm">
                <span>PAYU</span>
                <span>WOMPI</span>
                <span>EPAYCO</span>
                <span>STRIPE</span>
              </div>
            </div>
          </div>

          {/* Panel Estratégico */}
          <div className="lg:col-span-4 bg-slate-900 rounded-[3rem] p-8 lg:p-12 text-white flex flex-col h-full shadow-2xl">
            <div className="space-y-8">
              <h3 className="text-indigo-400 text-sm font-bold uppercase tracking-widest">¿Para quién es esto?</h3>
              <div className="space-y-6">
                {[
                  { title: "Boutiques Premium", desc: "Marcas de moda y diseño con alto valor visual." },
                  { title: "Direct-to-Consumer", desc: "Fabricantes que buscan eliminar intermediarios." },
                  { title: "Digital Goods", desc: "Venta de activos digitales y suscripciones automatizadas." }
                ].map((item, i) => (
                  <div key={i} className="group border-l-2 border-white/5 pl-4 hover:border-indigo-500 transition-colors">
                    <p className="text-lg font-bold mb-1 group-hover:text-indigo-400 transition-colors">{item.title}</p>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-12">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-indigo-300 font-bold uppercase mb-2 italic">Infraestructura Veritus</p>
                <p className="text-sm text-slate-300 leading-snug font-medium">
                  Utilizamos **Next.js 15 + Sanity** para que tu catálogo sea administrable sin depender de nosotros.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl rounded-full animate-pulse"></div>
            <a
              href="https://wa.me/573125858242?text=Hola!%20Quiero%20cotizar%20un%20E-commerce%20de%20Alto%20Rendimiento"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-4 px-14 py-6 bg-indigo-600 text-white text-xl font-black rounded-full hover:bg-slate-900 hover:scale-105 active:scale-95 transition-all duration-500 shadow-2xl group"
            >
              Lanzar mi Tienda
              <ShoppingBag className="w-6 h-6 transition-transform group-hover:-rotate-12" />
            </a>
          </div>
          <p className="mt-8 text-slate-400 font-bold text-[10px] uppercase tracking-[0.4em]">
            Limited availability for Q1 {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </main>
  );
}