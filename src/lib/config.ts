
export const siteConfig = {
    name: "Hábito Saludable",
    description: "Acompañamiento diario + organización alimentaria + movimiento básico para sostener hábitos sin extremos.",
    whatsapp: {
        number: "5493875828874",
        defaultMessage: "Hola! Quiero info de Hábito Saludable. Mi objetivo es: (Reducir/Equilibrio/Subir).",
    },
    plans: [
        {
            id: "mensual",
            name: "Mensual",
            price: "PLAN_PRICE_MONTHLY",
            discount: null,
            description: "Ideal para probar el método y empezar tu cambio.",
        },
        {
            id: "trimestral",
            name: "3 meses",
            price: "PLAN_PRICE_QUARTERLY",
            discount: "-7%",
            description: "Para quienes buscan consolidar los primeros hábitos.",
        },
        {
            id: "semestral",
            name: "6 meses",
            price: "PLAN_PRICE_SEMIANNUAL",
            discount: "-12%",
            description: "Transformación profunda y acompañamiento extendido.",
        },
        {
            id: "anual",
            name: "Anual",
            price: "PLAN_PRICE_ANNUAL",
            discount: "-22.6%",
            description: "El compromiso total con tu salud a largo plazo.",
        },
    ],
    paths: {
        home: "/",
        planes: "/planes",
        metodo: "/metodo",
        grupos: "/grupos",
        opiniones: "/opiniones",
        actualizaciones: "/actualizaciones",
    },
};
