import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ArrowRight, CheckCircle2, MessageSquare, TrendingUp, Zap, MinusCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
              No te falta voluntad. <br />
              <span className="text-emerald-600">Te falta sistema.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-200 transition-all hover:-translate-y-1"
              >
                Quiero empezar por WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/planes"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-all"
              >
                Ver planes
              </Link>
            </div>
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10" />
      </section>

      {/* Cómo funciona */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Cómo funciona</h2>
          <p className="mt-4 text-muted-foreground">Tres pasos simples para transformar tu rutina.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Mini entrevista por WhatsApp",
              desc: "Solo 2 minutos para conocer tu punto de partida y objetivos.",
              icon: <MessageSquare className="w-8 h-8 text-emerald-600" />,
            },
            {
              step: "2",
              title: "Te buscamos un camino + rutina",
              desc: "Diseñamos tu hoja de ruta semanal adaptada a tu vida real.",
              icon: <Zap className="w-8 h-8 text-emerald-600" />,
            },
            {
              step: "3",
              title: "Seguimiento diario",
              desc: "Mensajes cortos y constantes para que nunca pierdas el ritmo.",
              icon: <CheckCircle2 className="w-8 h-8 text-emerald-600" />,
            },
          ].map((item, idx) => (
            <div key={idx} className="relative p-8 bg-white rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Caminos */}
      <section className="bg-emerald-950/5 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Elegí tu camino</h2>
            <p className="mt-4 text-muted-foreground">En Argentina: opciones con alimentos accesibles y cotidianos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Reducir con Calma",
                tagline: "Orden + saciedad + constancia sin extremos.",
                icon: <MinusCircle className="w-10 h-10 text-emerald-600" />,
                color: "bg-orange-50",
              },
              {
                title: "Equilibrio y Energía",
                tagline: "Menos caos, más energía y liviandad.",
                icon: <Zap className="w-10 h-10 text-emerald-600" />,
                color: "bg-emerald-50",
              },
              {
                title: "Subir Fuerte",
                tagline: "Aumento estructurado de ingesta + fuerza progresiva.",
                icon: <TrendingUp className="w-10 h-10 text-emerald-600" />,
                color: "bg-indigo-50",
              },
            ].map((camino, idx) => (
              <div key={idx} className={`p-8 rounded-3xl ${camino.color} border border-black/5 hover:scale-[1.02] transition-transform`}>
                <div className="mb-6">{camino.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{camino.title}</h3>
                <p className="text-muted-foreground text-lg mb-8">{camino.tagline}</p>
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(`Hola! Quiero info para: ${camino.title}`)}`}
                  className="font-bold text-emerald-700 flex items-center group"
                >
                  Me interesa
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 relative z-10">
            ¿Empezamos hoy?
          </h2>
          <p className="text-emerald-50 text-xl mb-10 max-w-xl mx-auto relative z-10">
            Escribí <strong>INFO</strong> por WhatsApp y te guiamos en el primer paso.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp.number}?text=INFO`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-5 text-lg font-bold rounded-full text-emerald-700 bg-white hover:bg-emerald-50 shadow-xl transition-all hover:scale-105 active:scale-95 relative z-10"
          >
            Hablar por WhatsApp
          </a>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
      </section>
    </div>
  );
}
