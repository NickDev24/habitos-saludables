"use server";

import { addOpinion } from "@/lib/kv";
import { revalidatePath } from "next/cache";
import { Opinion } from "@/types";

export async function submitOpinion(formData: FormData) {
    const name = formData.get("name") as string;
    const text = formData.get("text") as string;
    const rating = Number(formData.get("rating"));

    if (!name || !text || isNaN(rating)) {
        return { error: "Faltan datos obligatorios." };
    }

    const newOpinion: Opinion = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        text,
        rating,
        date: new Date().toISOString(),
    };

    try {
        await addOpinion(newOpinion);
        revalidatePath("/opiniones");
        return { success: true };
    } catch (error) {
        console.error("Opinion Error:", error);
        return { error: "Error al guardar la opinión." };
    }
}
