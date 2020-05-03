import restApi from './../../../services';
import {ProductSetRequest} from '../types';

export async function sendProductRequest(request: ProductSetRequest) {
    const url = '/add-product';
    return restApi.post(url, request);
}

export async function fetchMe() {
    const url = '/me';
    return restApi.get(url);
}