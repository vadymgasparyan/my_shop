import * as types from './../actionsTypes';
import * as requests from "../../Main/requests";


export function getProducts() {
    return function (dispatch: any) {
        requests.getProducts().then(res => {
            dispatch({
                type: types.ADMIN_SET_PRODUCT,
                payload: {
                    products: res.data
                }
            })
        });
    }
}

export function getOrders() {
    return function (dispatch: any) {
        requests.getOrders().then(res => {
            dispatch({
                type: types.ADMIN_SET_ORDERS,
                payload: {
                    orders: res.data
                }
            })
        });
    }
}

export function changeOrderStatus(_id: string) {
    return function (dispatch: any) {
        requests.changeOrderStatus(_id).then(res => {
            dispatch({
                type: types.ADMIN_CHANGE_ORDER_STATUS,
                payload: {
                    order: res.data
                }
            })
        });
    }
}

export function cancelOrder(_id: string) {
    return function (dispatch: any) {
        requests.cancelOrder(_id).then(res => {
            dispatch({
                type: types.ADMIN_CANCELL_ORDER,
                payload: {
                    order: res.data
                }
            })
        });
    }
}


export function removeProduct(_id: string) {
    return function (dispatch: any) {
        requests.removeProducts(_id).then(res => {
            dispatch({
                type: types.ADMIN_REMOVE_PRODUCT,
                payload: {
                    _id
                }
            })
        });
    }
}
removeProduct