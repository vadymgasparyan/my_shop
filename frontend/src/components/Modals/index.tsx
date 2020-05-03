import React from 'react';

import TrashModal from './componets/TrashModal';
import CreateProductModal from './componets/CreateProductModal';
import {useSelector} from 'react-redux';

const Modals = (): JSX.Element => {
    const {modalState} = useSelector((state: any) => state);
    return (
        <div>
            {modalState.isTrashModal && <TrashModal/>}
            {modalState.isCreateProductModal && <CreateProductModal />}
        </div>
    )
};

export default Modals;