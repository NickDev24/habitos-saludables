import { getUpdates } from "@/lib/kv";
import { NextRequest, NextResponse } from "next/server";
import { Update } from "@/types";

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const updates = await getUpdates();
        const post = updates.find((u: Update) => u.slug === slug);

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
