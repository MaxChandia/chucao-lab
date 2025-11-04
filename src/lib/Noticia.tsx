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

export type { Noticia };