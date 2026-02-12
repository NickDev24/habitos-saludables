import { getUpdates } from "@/lib/kv";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const updates = await getUpdates();
    const update = updates.find((u) => u.slug === slug);

    if (!update) return {};

    return {
        title: `${update.title} | ${process.env.NEXT_PUBLIC_SITE_NAME || "Hábito Saludable"}`,
        description: update.excerpt,
        openGraph: {
            title: update.title,
            description: update.excerpt,
            images: update.image ? [{ url: update.image }] : [],
        },
    };
}

export default async function UpdateDetailPage({ params }: Props) {
    const { slug } = await params;
    const updates = await getUpdates();
    const update = updates.find((u) => u.slug === slug);

    if (!update) notFound();

    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <Link
                    href="/actualizaciones"
                    className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 mb-12 group"
                >
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Volver a actualizaciones
                </Link>

                <article>
                    <div className="mb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="flex items-center text-sm text-emerald-600 font-bold uppercase tracking-wider">
                                <Calendar size={16} className="mr-2" />
                                {new Date(update.published_at || update.date).toLocaleDateString("es-AR", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric"
                                })}
                            </div>
                            {update.category && (
                                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase rounded-full">
                                    {update.category}
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
                            {update.title}
                        </h1>
                        {update.subtitle && (
                            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                                {update.subtitle}
                            </p>
                        )}
                    </div>

                    {update.image && (
                        <div className="mb-12 rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src={update.image}
                                alt={update.title}
                                className="w-full object-cover max-h-[600px]"
                            />
                        </div>
                    )}

                    <div
                        className="prose prose-emerald prose-lg max-w-none 
                                   prose-headings:font-extrabold prose-p:text-muted-foreground 
                                   prose-p:leading-relaxed prose-img:rounded-3xl
                                   prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline
                                   prose-strong:text-foreground prose-table:border prose-table:rounded-xl 
                                   prose-th:bg-neutral-50 prose-th:px-4 prose-td:px-4"
                        dangerouslySetInnerHTML={{ __html: update.content_html || update.content }}
                    />

                    {(update.tags && update.tags.length > 0) && (
                        <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-2">
                            {update.tags.map((tag: string) => (
                                <span key={tag} className="flex items-center text-xs font-bold text-muted-foreground bg-neutral-100 px-3 py-1 rounded-full capitalize">
                                    <Tag size={12} className="mr-1" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </article>
            </div>
        </div>
    );
}
