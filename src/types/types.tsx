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
    sizes: {
        name: string;
        quantity: number;
    }[];
    totalQuantity: number;
    tag: string;
}

export interface CouponProps {
    _id: string;
    discount: number;
    minimum: number;
    code: string
}