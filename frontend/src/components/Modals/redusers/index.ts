import * as types from './../actionsTypes';

export interface ModalsState {
    isTrashModal: boolean;
    isCreateProductModal: boolean;
}
const modalState: ModalsState = {
    isTrashModal: false,
    isCreateProductModal: false,
};

export default function trashReducer(
    state = modalState,
    action: any = {}
): ModalsState {
    switch (action.type) {
        case (types.CHANGE_TRASH_MODAL): {
            return {
                ...state,
                isTrashModal: !state.isTrashModal
            };
        }

        case (types.CHANGE_CREATE_PRODUCT_MODAL): {
            return {
                ...state,
                isCreateProductModal: !state.isCreateProductModal
            };
        }

        default:
            return state;

    }
}