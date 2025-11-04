interface AdditionalImage {
    asset: {
        url?: string;
        _ref: string;
    };
    alt?: string;
    caption?: string;
}

interface Noticia {
    id: string;
    title: string;
    slug: string;
    author: string;
    categories: string[];
    publishedAt: string;
    mainImage: string;
    additionalImages?: AdditionalImage[];
    upperBody: string;
    body: string;
}

export type { Noticia, AdditionalImage };