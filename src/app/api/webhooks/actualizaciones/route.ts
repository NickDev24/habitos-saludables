import { getUpdates, setUpdates } from "@/lib/kv";
import { revalidatePath } from "next/cache";
import { Update } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import DOMPurify from "isomorphic-dompurify";

const MAX_CONTENT_HTML_SIZE = 250 * 1024; // 250KB

const sanitizeOptions = {
    ALLOWED_TAGS: [
        'p', 'h2', 'h3', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'strong', 'em', 'a'
    ],
    ALLOWED_ATTR: ['href', 'rel', 'target']
};

export async function POST(req: NextRequest) {
    try {
        const secret = req.headers.get("x-webhook-secret");
        if (secret !== process.env.WEBHOOK_SECRET) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { type, mode, posts } = body;

        if (type !== "actualizaciones") {
            return NextResponse.json({ error: "Invalid type" }, { status: 400 });
        }

        if (!Array.isArray(posts)) {
            return NextResponse.json({ error: "Posts must be an array" }, { status: 400 });
        }

        // Validate content_html size and sanitize
        for (const post of posts) {
            if (post.content_html && post.content_html.length > MAX_CONTENT_HTML_SIZE) {
                return NextResponse.json({ error: `Content too large for slug: ${post.slug}` }, { status: 413 });
            }
            if (post.content_html) {
                post.content_html = DOMPurify.sanitize(post.content_html, sanitizeOptions);
            }
        }

        const currentUpdates = await getUpdates();
        let newUpdates: Update[] = [];

        if (mode === "replace_all") {
            newUpdates = posts.map(mapPost);
        } else {
            // upsert_many
            const postsMap = new Map<string, Update>();
            currentUpdates.forEach((u: Update) => postsMap.set(u.slug, u));

            posts.forEach(p => {
                postsMap.set(p.slug, mapPost(p));
            });

            newUpdates = Array.from(postsMap.values());
        }

        // Sort by published_at desc
        newUpdates.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

        await setUpdates(newUpdates);

        revalidatePath("/actualizaciones");
        revalidatePath("/actualizaciones/[slug]", "page");

        return NextResponse.json({ ok: true, upserted: posts.length });
    } catch (error) {
        console.error("Webhook error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const secret = req.headers.get("x-webhook-secret");
        if (secret !== process.env.WEBHOOK_SECRET) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const slug = searchParams.get("slug");

        if (!slug) {
            return NextResponse.json({ error: "Slug required" }, { status: 400 });
        }

        const currentUpdates = await getUpdates();
        const newUpdates = currentUpdates.filter((u: Update) => u.slug !== slug);

        await setUpdates(newUpdates);

        revalidatePath("/actualizaciones");
        revalidatePath(`/actualizaciones/${slug}`);

        return NextResponse.json({ ok: true, deleted: slug });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

function mapPost(p: any): Update {
    return {
        id: p.id || Math.random().toString(36).substring(2, 9),
        slug: p.slug,
        title: p.title,
        title_plain: p.title_plain,
        subtitle: p.subtitle,
        category: p.category,
        tags: p.tags || [],
        keywords: p.keywords || [],
        excerpt: p.excerpt || "",
        content: p.content || "", // For backward compat
        content_html: p.content_html,
        date: p.published_at, // For existing UI compat
        published_at: p.published_at,
        image: p.image || undefined,
    };
}
