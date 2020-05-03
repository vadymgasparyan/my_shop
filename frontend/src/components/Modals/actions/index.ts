import * as types from './../actionsTypes';
import {ADMIN_ADD_PRODUCT} from './../../../pages/Admin/actionsTypes';
import {sendOrderRequest} from '../componets/TrashModal/requests';
import {OrderSetRequest, ProductInterface} from '../types';

import * as requests from './../requests';

export function changeTrashModalStatus () {
    return function (dispatch: any) {
        dispatch({
            type: types.CHANGE_TRASH_MODAL,
        })
    }
}

export function changeCreateProductModal () {
    return function (dispatch: any) {
        dispatch({
            type: types.CHANGE_CREATE_PRODUCT_MODAL,
        })
    }
}

export function sendOrder(orderRequest: OrderSetRequest) {
    return async function () {
        await sendOrderRequest(orderRequest);
    }
}

export function createProduct(product: ProductInterface) {
    return async function(dispatch: any){
        const formData = new FormData();
        let fileClean: any = product.file[0] && product.file[0];
        fileClean = fileClean.uploadedData;
        const file = new Blob([fileClean], {type: fileClean.type});
        formData.append('file', file, fileClean.name);
        formData.append('product', product.product);
        formData.append('price', product.price);
        formData.append('weight', product.weight);
        const productResponse = await requests.createProduct(formData);
        dispatch({
            type: ADMIN_ADD_PRODUCT,
            payload: {
                product: productResponse.data
            }
        })
    }
}