import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
    return (
        <footer className="bg-white border-t border-border mt-20">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-xl font-bold text-emerald-600">
                            Hábito Saludable
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                            {siteConfig.description}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Legal</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/legal/aviso" className="text-sm text-muted-foreground hover:text-emerald-600">
                                    Aviso Legal
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/privacidad" className="text-sm text-muted-foreground hover:text-emerald-600">
                                    Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/descargo" className="text-sm text-muted-foreground hover:text-emerald-600">
                                    Descargo de Salud
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contacto</h3>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Argentina
                        </p>
                        <p className="text-sm text-muted-foreground">
                            WhatsApp: +{siteConfig.whatsapp.number}
                        </p>
                    </div>
                </div>
                <div className="mt-12 border-t border-border pt-8 text-center">
                    <p className="text-sm text-muted-foreground italic">
                        "No reemplaza profesionales de salud. Si tenés medicación, enfermedad, embarazo o trastornos alimentarios: consultá a un profesional."
                    </p>
                    <p className="mt-4 text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Hábito Saludable. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
