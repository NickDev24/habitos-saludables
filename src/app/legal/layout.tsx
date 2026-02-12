import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 mb-12 group"
                >
                    <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Volver al inicio
                </Link>
                <div className="prose prose-emerald prose-lg max-w-none prose-headings:font-extrabold prose-p:text-muted-foreground">
                    {children}
                </div>
            </div>
        </div>
    );
}
