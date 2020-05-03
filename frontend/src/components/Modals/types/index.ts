import {Order} from '../../../pages/Main/types';

export interface OrderSetRequest{
    orders: Order[];
    name: string;
    phone: string;
}

export interface ProductInterface {
    product: string;
    weight: string;
    price: string;
    file: File[];
}