export interface Order {
        name: string;
        count: number;
        index: string;
        price: number;
        _id?: string;
}

export interface Product {
        product: string;
        weight: number;
        price: number;
        attachment: string;
        _id: string;
}