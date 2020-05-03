import React, {useEffect} from 'react';

import Card from './componets/Card';

import './styles.css';
import Trash from './componets/Trash';
import {useSelector} from 'react-redux';
import {getProductsSelector, showTrash} from './selectors';
import useMainActions from './hooks';
import Header from "./componets/Header";

const Main = (): JSX.Element => {
    const isShowTrash = useSelector(showTrash);
    const products = useSelector(getProductsSelector);
    const {getProducts} = useMainActions();

    useEffect(() => {
        getProducts();
    }, []);
    return <div className='main-page'>
        <Header/>
        {
            products.map((product: any) => <Card
                key={product._id}
                index={product._id}
                price={product.price}
                weight={product.weight}
                name={product.product}
                attachment={product.attachment}
            />)
        }
        { isShowTrash && <Trash /> }
    </div>
}

export default Main;