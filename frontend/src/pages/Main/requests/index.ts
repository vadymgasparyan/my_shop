import restApi from "../../../services";

export function getProducts() {
    const url = '/get-product';
    return restApi.get(url);
}

export function getOrders() {
    const url = '/get-orders';
    return restApi.get(url);
}

export function removeProducts(_id: string) {
    const url = '/remove-product';
    return restApi.post(url, {
        _id
    });
}

export function cancelOrder(_id: string) {
    const url = '/cancel-order';
    return restApi.post(url, {
        _id
    });
}

export function changeOrderStatus(_id: string) {
    const url = '/change-order-status';
    return restApi.post(url, {
        _id
    });
}