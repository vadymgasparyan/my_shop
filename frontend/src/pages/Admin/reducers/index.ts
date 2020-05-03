import * as types from './../actionsTypes';
import {Order, Product} from "../../Main/types";

export interface AdminState {
    orders: Order[];
    products: Product[];
}

const adminState: AdminState = {
    orders: [],
    products: []
};

export default function AdminReducer(
    state = adminState,
    action: any = {}
): AdminState {
    switch (action.type) {
        case (types.ADMIN_SET_PRODUCT): {
            const {products} = action.payload;
            return {
                ...state,
                products,
            };
        }

        case (types.ADMIN_SET_ORDERS): {
            const {orders} = action.payload;
            return {
                ...state,
                orders,
            };
        }

        case (types.ADMIN_REMOVE_PRODUCT): {
            const {_id} = action.payload;
            const products = state.products.filter((product: Product): boolean => product._id !== _id);
            return {
                ...state,
                products,
            };
        }

        case (types.ADMIN_CHANGE_ORDER_STATUS): {
            const {order} = action.payload;
            const orders = state.orders.reduce((newOrders: Order[], orderNew: Order): Order[] => {
                if(order._id === orderNew._id){
                    return [...newOrders, order];
                }
                return [...newOrders, orderNew];
            }, []);
            return {
                ...state,
                orders,
            };
        }

        case (types.ADMIN_CANCELL_ORDER): {
            const {order} = action.payload;

            const orders = state.orders.reduce((newOrders: Order[], orderNew: Order): Order[] => {
                if(order._id === orderNew._id){
                    return [...newOrders, order];
                }
                return [...newOrders, orderNew];
            }, []);
            return {
                ...state,
                orders,
            };
        }

        case (types.ADMIN_ADD_PRODUCT): {
            const {product} = action.payload;
            const products = [...state.products, product];
            return {
                ...state,
                products,
            };
        }

        default:
            return state;

    }
}
