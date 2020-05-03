import restApi from './../../../../../services';
import {OrderSetRequest} from '../../../types';

export async function sendOrderRequest(request: OrderSetRequest) {
    const url = '/add-order';
    return restApi.post(url, request);
}