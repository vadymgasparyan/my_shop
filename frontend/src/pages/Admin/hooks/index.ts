import {useDispatch} from 'react-redux';
import {changeCreateProductModal} from './../../../components/Modals/actions';
import {getProducts, removeProduct, getOrders, changeOrderStatus, cancelOrder} from "../actions";

export default function useModalActions() {
    const dispatch = useDispatch();
    return {
        changeCreateProductModal: () => dispatch(changeCreateProductModal()),
        getProducts: () => dispatch(getProducts()),
        removeProduct: (_id: string) => dispatch(removeProduct(_id)),
        getOrders: () => dispatch(getOrders()),
        changeOrderStatus: (_id: string) => dispatch(changeOrderStatus(_id)),
        cancelOrder: (_id: string) => dispatch(cancelOrder(_id)),
    }
}