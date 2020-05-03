import {AdminState} from "../reducers";


export const getProductsSelector = ({adminState}: {adminState: AdminState}) => adminState.products;
export const getOrdersSelector = ({adminState}: {adminState: AdminState}) => adminState.orders;