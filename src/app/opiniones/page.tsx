import { getOpinions } from "@/lib/kv";
import { Star, MessageCircle } from "lucide-react";
import { submitOpinion } from "./actions";
import { Opinion } from "@/types";

import { OpinionForm } from "./OpinionForm";

export const dynamic = "force-dynamic";

export default async function OpinionesPage() {
    const opinions: Opinion[] = await getOpinions();

    const averageRating = opinions.length > 0
        ? (opinions.reduce((acc, curr) => acc + curr.rating, 0) / opinions.length).toFixed(1)
        : "0.0";

    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* List and Rating */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-12">
                            <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
                                Opiniones
                            </h1>
                            <div className="flex items-center bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-100">
                                <Star className="text-emerald-500 fill-emerald-500 w-5 h-5 mr-2" />
                                <span className="text-emerald-700 font-bold text-xl">{averageRating}</span>
                                <span className="text-emerald-600/60 ml-2 text-sm font-medium">({opinions.length})</span>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {opinions.length === 0 ? (
                                <div className="p-12 text-center bg-neutral-50 rounded-3xl border border-dashed border-neutral-300">
                                    <p className="text-muted-foreground">Todavía no hay opiniones. ¡Sé el primero!</p>
                                </div>
                            ) : (
                                opinions.map((op) => (
                                    <div key={op.id} className="bg-white p-8 rounded-3xl border border-border shadow-sm">
                                        <div className="flex items-center gap-1 mb-4">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star
                                                    key={s}
                                                    size={16}
                                                    className={s <= op.rating ? "text-emerald-500 fill-emerald-500" : "text-neutral-200"}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-foreground text-lg italic mb-6">"{op.text}"</p>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="font-bold text-emerald-700">{op.name}</span>
                                            <span className="text-muted-foreground">{new Date(op.date).toLocaleDateString("es-AR")}</span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-1">
                        <OpinionForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
