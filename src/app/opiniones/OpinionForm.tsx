"use client";

import { MessageCircle, Star } from "lucide-react";
import { submitOpinion } from "./actions";
import { useActionState } from "react";

const initialState = {
    error: null as string | null,
    success: false,
};

export function OpinionForm() {
    // @ts-ignore - useActionState type might be tricky with current react versions
    const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
        const result = await submitOpinion(formData);
        if (result.error) return { error: result.error, success: false };
        return { error: null, success: true };
    }, initialState);

    if (state.success) {
        return (
            <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="fill-emerald-500 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">¡Gracias por tu opinión!</h3>
                <p className="text-emerald-700">Tu feedback nos ayuda a seguir mejorando.</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-6 text-sm font-bold text-emerald-600 underline"
                >
                    Enviar otra
                </button>
            </div>
        );
    }

    return (
        <div className="bg-neutral-50 p-8 rounded-[2.5rem] border border-border h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MessageCircle className="mr-2 text-emerald-600" />
                Contanos tu experiencia
            </h2>
            <form action={formAction} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-border focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white transition-all"
                        placeholder="Tu nombre"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Puntuación</label>
                    <select
                        name="rating"
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-border focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white transition-all appearance-none cursor-pointer"
                    >
                        <option value="5">5 estrellas (Excelente)</option>
                        <option value="4">4 estrellas (Muy bueno)</option>
                        <option value="3">3 estrellas (Bueno)</option>
                        <option value="2">2 estrellas (Regular)</option>
                        <option value="1">1 estrella (Malo)</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Tu opinión</label>
                    <textarea
                        name="text"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-2xl border border-border focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white transition-all"
                        placeholder="¿Cómo te sentiste con el método?"
                    ></textarea>
                </div>
                {state.error && <p className="text-red-500 text-sm">{state.error}</p>}
                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isPending ? "Enviando..." : "Enviar opinión"}
                </button>
            </form>
            <p className="mt-6 text-xs text-muted-foreground text-center italic">
                Las opiniones son revisadas antes de ser permanentes.
            </p>
        </div>
    );
}
