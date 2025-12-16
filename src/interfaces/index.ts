export interface ProductCategory {
    id: number;
    images: string[];
    title: string;
    description: string;
}

export interface Client {
    id: number;
    name: string;
    logo: string;
}

export interface MenuSection {
    id: number;
    href: string;
    title: string;
}