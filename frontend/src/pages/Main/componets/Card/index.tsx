import React, {useEffect, useState} from "react";

import {Button, Card} from 'antd';

import { Typography } from 'antd';

import Integer from './components/Integer';

import './styles.css';
import useTrashActions from '../../hooks';
import {useSelector} from "react-redux";

const { Text } = Typography;

// const name = 'Люля кебаб';
// const price = 100;
// const weight = 200;

interface CardProps {
    name: string;
    price: number;
    weight: number;
    attachment: string;
    index: string;
}

const CardItem = (props: CardProps): JSX.Element => {
    const {name, price, weight, index, attachment} = props;

    const {addOrder, removeFromOrder} = useTrashActions();
    const [count, setCount] = useState<number>(0);
    const [isDisabled, setDisabled] = useState<boolean>(true);
    const [isSelect, setSelect] = useState<boolean>(false);

    const {trashState} = useSelector((state: any) => state);

    const addCount = (): void => {
        setCount(count + 1);
    };

    const minusCount = (): void => {
        if(count > 0){
            setCount(count - 1);
        }
    };

    const handleAddOrder = (): void => {
        if(count > 0 && !isSelect) {
            setSelect(true);
            addOrder({
                index,
                name: `${name} ${weight}гр.`,
                count,
                price,
            });
        }else {
            setSelect(false);
            setCount(0);
            removeFromOrder(index);
        }
    };


    useEffect(() => {
        setDisabled(count === 0);
    }, [count]);

    useEffect(() => {
        const {orders} = trashState;
        if (orders.length === 0) {
            setSelect(false);
        }
    }, [trashState]);

    return (
        <div className="card">
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img src={`http://localhost:3001${attachment}`} />}
            >
                <Text strong>{name} {weight}гр.</Text>
                <br />
                <Text strong>Цена: {price}.00 грн.</Text>
                <Integer
                    count={count}
                    addCount={addCount}
                    minusCount={minusCount}
                    isDisabled={isDisabled}
                    isSelect={isSelect}/>
                <Button
                    disabled={isDisabled}
                    onClick={handleAddOrder}
                    type="primary"
                    className="card-select-button"
                    danger={isSelect}
                >
                    {isSelect ? 'Отмена' : 'Закать'}
                </Button>
            </Card>
        </div>
    );
};

export default CardItem;