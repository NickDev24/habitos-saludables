import Link from "next/link";
import { siteConfig } from "@/lib/config";

const navigation = [
    { name: "Planes", href: siteConfig.paths.planes },
    { name: "Método", href: siteConfig.paths.metodo },
    { name: "Grupos", href: siteConfig.paths.grupos },
    { name: "Opiniones", href: siteConfig.paths.opiniones },
    { name: "Actualizaciones", href: siteConfig.paths.actualizaciones },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full glass border-b border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-emerald-600 tracking-tight">
                            Hábito Saludable
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-emerald-600 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center">
                        <Link
                            href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all"
                        >
                            WhatsApp
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
