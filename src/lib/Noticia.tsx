interface Noticia {
    id: string;
    title: string;
    slug: string;
    author: string;
    categories: string[];
    publishedAt: string;
    mainImage: string;
    upperBody: any;
    body: any;
}

export type { Noticia };