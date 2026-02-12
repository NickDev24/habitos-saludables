import { getUpdates } from "@/lib/kv";
import Link from "next/link";
import { Update } from "@/types";
import { Calendar, ArrowRight, Tag } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ActualizacionesPage() {
    const updates: Update[] = await getUpdates();

    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl mb-6">
                        Actualizaciones
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Novedades, recetas rápidas y consejos diarios para mantener tu camino hacia un {process.env.NEXT_PUBLIC_SITE_NAME || "Hábito Saludable"}.
                    </p>
                </div>

                {updates.length === 0 ? (
                    <div className="max-w-md mx-auto p-12 text-center bg-neutral-50 rounded-3xl border border-dashed border-neutral-300">
                        <p className="text-muted-foreground">Pronto compartiremos novedades por aquí.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {updates.map((update) => (
                            <Link
                                key={update.id}
                                href={`/actualizaciones/${update.slug}`}
                                className="group flex flex-col bg-white rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                            >
                                {update.image ? (
                                    <div className="aspect-video w-full overflow-hidden">
                                        <img
                                            src={update.image}
                                            alt={update.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ) : (
                                    <div className="aspect-video w-full bg-emerald-50 flex items-center justify-center">
                                        <span className="text-emerald-200 font-bold text-lg">{update.category || "Hábito"}</span>
                                    </div>
                                )}
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center text-xs text-muted-foreground">
                                            <Calendar size={14} className="mr-1" />
                                            {new Date(update.published_at || update.date).toLocaleDateString("es-AR")}
                                        </div>
                                        {update.category && (
                                            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded-full">
                                                {update.category}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                                        {update.title}
                                    </h3>
                                    {update.subtitle && (
                                        <p className="text-sm font-medium text-muted-foreground mb-3 line-clamp-1">
                                            {update.subtitle}
                                        </p>
                                    )}
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                        {update.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center text-emerald-600 font-bold text-sm">
                                        Leer más
                                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
