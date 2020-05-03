import {TrashState} from '../reducers';

export const showTrash = ({trashState}: {trashState: TrashState}) => trashState.orders.length > 0;

export const getProductsSelector = ({trashState}: {trashState: TrashState}) => trashState.products;