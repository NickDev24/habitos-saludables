export interface Plan {
    id: string;
    name: string;
    price: string;
    discount: string | null;
    description: string;
}

export interface Opinion {
    id: string;
    name: string;
    text: string;
    rating: number;
    date: string;
}

export interface Update {
    id: string;
    slug: string;
    title: string;
    title_plain?: string;
    subtitle?: string;
    category?: string;
    tags?: string[];
    keywords?: string[];
    excerpt: string;
    content: string; // Keep for backward compatibility or internal use
    content_html: string;
    date: string; // Maintain for existing UI
    published_at: string;
    image?: string;
}
