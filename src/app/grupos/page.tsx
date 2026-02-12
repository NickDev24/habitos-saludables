import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Users, Shield, Target, MessageSquare } from "lucide-react";

export default function GruposPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl mb-6">
                        Grupos de Apoyo
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        La fuerza de lo colectivo. Grupos reducidos de personas con tus mismos objetivos, moderados y guiados diariamente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-white p-10 rounded-[3rem] border border-border shadow-sm">
                        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                            <Users size={32} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Comunidad Real</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Compartí tus dudas, tus logros y tus platos. Nadie juzga, todos aprendemos. El grupo es ese motor extra para los días en los que la motivación está baja.
                        </p>
                    </div>
                    <div className="bg-white p-10 rounded-[3rem] border border-border shadow-sm">
                        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                            <Shield size={32} />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Moderación Profesional</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            No es un grupo de chat cualquiera. Está gestionado para asegurar que la información sea correcta y que el clima siempre sea de respeto y construcción.
                        </p>
                    </div>
                </div>

                <div className="bg-emerald-900 rounded-[3rem] p-12 sm:p-20 text-white overflow-hidden relative">
                    <div className="max-w-2xl relative z-10">
                        <h2 className="text-3xl font-bold mb-6">¿Cómo me sumo?</h2>
                        <p className="text-emerald-100 text-lg mb-8">
                            Los grupos se abren periódicamente según los caminos. Al elegir tu plan, te asignamos al grupo que mejor se adapte a tu meta actual (Reducir, Mantener o Subir).
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={`https://wa.me/${siteConfig.whatsapp.number}?text=Hola! Quiero sumarme a un grupo.`}
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-emerald-900 bg-emerald-400 hover:bg-emerald-300 transition-all font-bold"
                            >
                                Consultar vacantes
                                <MessageSquare className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                    <Target size={300} className="absolute -right-20 -bottom-20 text-emerald-800 opacity-50" />
                </div>
            </div>
        </div>
    );
}
