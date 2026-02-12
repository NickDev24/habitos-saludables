import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { Check, ArrowRight } from "lucide-react";

export default function PlanesPage() {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                        Planes de Acompañamiento
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground">
                        Elegí la duración que mejor se adapte a tu compromiso.
                    </p>
                    <p className="mt-2 text-sm font-medium text-emerald-600 bg-emerald-50 inline-block px-4 py-1 rounded-full border border-emerald-100">
                        Pago por transferencia. Activación manual el mismo día.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {siteConfig.plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative flex flex-col p-8 bg-white border border-border rounded-3xl shadow-sm hover:shadow-md transition-shadow ${plan.discount ? "border-emerald-200 ring-2 ring-emerald-100" : ""
                                }`}
                        >
                            {plan.discount && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                    Ahorrás {plan.discount}
                                </span>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed h-12">
                                    {plan.description}
                                </p>
                                <div className="mt-6 flex items-baseline">
                                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                                        {plan.price}
                                    </span>
                                    <span className="ml-1 text-sm font-medium text-muted-foreground">/total</span>
                                </div>
                            </div>

                            <ul className="mb-8 space-y-4 flex-1">
                                {[
                                    "Acompañamiento diario",
                                    "Plan alimentario flexible",
                                    "Rutina de movimiento",
                                    "Seguimiento por WhatsApp",
                                    "Comunidad de apoyo",
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                                        <Check className="mr-3 h-5 w-5 text-emerald-500 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(`Hola! Quiero info para el plan: ${plan.name}`)}`}
                                className={`mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-full shadow-sm text-white ${plan.discount ? "bg-emerald-600 hover:bg-emerald-700" : "bg-emerald-500 hover:bg-emerald-600"
                                    } transition-colors`}
                            >
                                Elegir Plan
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-20 max-w-2xl mx-auto p-8 bg-neutral-50 rounded-3xl border border-border text-center">
                    <h3 className="text-xl font-bold mb-4">Aclaración Importante</h3>
                    <p className="text-muted-foreground">
                        El pago se realiza por transferencia bancaria. Una vez enviado el comprobante por WhatsApp, la activación de tu plan se realiza en el mismo día.
                    </p>
                </div>
            </div>
        </div>
    );
}
