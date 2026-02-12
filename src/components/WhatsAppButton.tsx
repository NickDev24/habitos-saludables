import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function WhatsAppButton() {
    const url = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 hover:scale-110 transition-all duration-300 group"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={28} className="fill-current" />
            <span className="absolute right-16 bg-white text-foreground text-xs font-semibold px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                ¡Hablemos!
            </span>
        </a>
    );
}
