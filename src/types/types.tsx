export interface ProductProps {
    _id: string;
    category: string;
    title: string;
    images: string[];
    comments: any[];
    price: number;
    sale: number;
    description: string;
    colors: any[];
    sizes: [{
        name: string;
        quantity: number;
    }];
    toltalQuantity: number;
    tag: string;
}