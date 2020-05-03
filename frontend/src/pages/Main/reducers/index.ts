import * as types from './../actionsTypes';
import {Order, Product} from '../types';

export interface TrashState {
    orders: Order[];
    products: Product[],
}
const trashState: TrashState = {
    orders: [],
    products: []
};

export default function trashReducer(
    state = trashState,
    action: any = {}
): TrashState {
    switch (action.type) {
        case (types.ADD_ORDER): {
            const {order} = action.payload;
            const orders = [...state.orders, order];
            return {
                ...state,
                orders
            };
        }

        case (types.REMOVE_ORDER): {
            const {index} = action.payload;
            const orders = state.orders.filter((order: Order): boolean => order.index !== index);
            return {
                ...state,
                orders
            };
        }

        case (types.CLEAR_ORDER): {
            return {
                ...state,
                orders: []
            }
        }

        case (types.SET_PRODUCTS): {
            const {products} = action.payload;
            return {
                ...state,
                products
            }
        }

        default:
            return state;

    }
}
