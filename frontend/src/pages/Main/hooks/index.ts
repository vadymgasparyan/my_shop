import {useDispatch} from 'react-redux';
import {Order} from '../types';
import {addOrder, getProducts, removeFromOrder} from '../actions';
import {changeTrashModalStatus} from './../../../components/Modals/actions';


export default function useTrashActions() {
    const dispatch = useDispatch();
    return {
        addOrder: (order: Order) => dispatch(addOrder(order)),
        removeFromOrder: (index: string) => dispatch(removeFromOrder(index)),
        openTrashModal: () => dispatch(changeTrashModalStatus()),
        getProducts: () => dispatch((getProducts()))
,    }
}