import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Coffee, Utensils, Footprints, MessageCircle, Heart } from "lucide-react";

export default function MetodoPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl mb-8">
                            El Método <br />
                            <span className="text-emerald-600">Hábito Saludable</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            No creemos en dietas restrictivas ni en entrenamientos agotadores de tres horas. Creemos en el poder de los pequeños cambios diarios sostenidos en el tiempo.
                        </p>
                        <Link
                            href="/planes"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-200 transition-all hover:-translate-y-1"
                        >
                            Ver Planes
                        </Link>
                    </div>
                    <div className="bg-emerald-50 rounded-[4rem] p-12 relative">
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { icon: <Utensils />, title: "Organización Alimentaria", text: "Sin pesar comida, aprendiendo a elegir lo que te rodea." },
                                { icon: <Footprints />, title: "Movimiento Básico", text: "Empezar por donde puedas. Caminar, moverte, activar." },
                                { icon: <Heart />, title: "Sin Extremos", text: "Tu vida no gira en torno a la dieta. La dieta se adapta a tu vida." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm">
                                    <div className="text-emerald-600 border border-emerald-100 p-3 rounded-2xl h-fit">{item.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="bg-white rounded-[3rem] border border-border p-12 sm:p-20 shadow-sm overflow-hidden relative">
                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <h2 className="text-3xl font-bold mb-8">¿Por qué funciona?</h2>
                        <div className="space-y-12">
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-emerald-700 mb-2 flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 text-sm">1</span>
                                    Acompañamiento Diario
                                </h3>
                                <p className="text-muted-foreground text-lg ml-11">
                                    Tu mayor obstáculo no es la falta de información, es la soledad en el proceso. Estamos ahí todos los días via WhatsApp.
                                </p>
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-emerald-700 mb-2 flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 text-sm">2</span>
                                    Contexto Argentino
                                </h3>
                                <p className="text-muted-foreground text-lg ml-11">
                                    Usamos alimentos que encontrás en el chino de la vuelta o en la feria del barrio. Sin ingredientes raros ni caros.
                                </p>
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-emerald-700 mb-2 flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-3 text-sm">3</span>
                                    Foco en la Saciedad
                                </h3>
                                <p className="text-muted-foreground text-lg ml-11">
                                    Si pasás hambre, abandonás. Te enseñamos a comer volumen y calidad para que el sistema sea sostenible.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Decorative bits */}
                    <div className="absolute top-0 right-0 p-10 opacity-10 blur-2xl text-emerald-900 pointer-events-none">
                        <Coffee size={200} />
                    </div>
                </section>
            </div>
        </div>
    );
}
