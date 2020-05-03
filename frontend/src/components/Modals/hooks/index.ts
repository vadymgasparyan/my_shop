import {useDispatch} from 'react-redux';
import {changeTrashModalStatus, sendOrder, changeCreateProductModal, createProduct} from './../actions';
import {clearOrder} from './../../../pages/Main/actions';
import {OrderSetRequest, ProductInterface} from '../types';

export default function useModalActions() {
    const dispatch = useDispatch();
    return {
        closeTrashModal: () => dispatch(changeTrashModalStatus()),
        clearOrders: () => dispatch(clearOrder()),
        sendOrder: async (orderRequest: OrderSetRequest) => dispatch(sendOrder(orderRequest)),
        closeCreateProductModal: () => dispatch(changeCreateProductModal()),
        createProduct: async (value: ProductInterface) => dispatch(createProduct(value))
    }
}