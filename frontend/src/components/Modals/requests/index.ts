import restApi from "../../../services";

export async function createProduct(formData: FormData) {
    const url = '/add-product';
    return restApi.post(url, formData);
}