import { getUpdates } from "@/lib/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1");
        const limit = parseInt(searchParams.get("limit") || "10");
        const skip = (page - 1) * limit;

        const updates = await getUpdates();

        // Sorting is already handled in the webhook, but we ensure it here just in case
        const sortedUpdates = [...updates].sort((a, b) =>
            new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
        );

        const paginated = sortedUpdates.slice(skip, skip + limit);

        return NextResponse.json({
            items: paginated,
            page,
            limit,
            total: updates.length,
        });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
