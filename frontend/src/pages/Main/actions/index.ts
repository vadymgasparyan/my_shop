import {Order} from '../types';
import * as types from './../actionsTypes';
import * as requests from './../requests';


export function addOrder(order: Order) {
    return function (dispatch: any){
        dispatch({
            type: types.ADD_ORDER,
            payload: {
                order,
            }
        });
    }
}

export function removeFromOrder(index: string) {
    return function (dispatch: any){
        dispatch({
            type: types.REMOVE_ORDER,
            payload: {
                index,
            }
        });
    }
}

export function getProducts() {
    return function (dispatch: any) {
        requests.getProducts().then(res => {
            dispatch({
                type: types.SET_PRODUCTS,
                payload: {
                    products: res.data
                }
            })
        });
    }

}

export function clearOrder() {
    return function (dispatch: any){
        dispatch({
            type: types.CLEAR_ORDER,
        });
    }
}