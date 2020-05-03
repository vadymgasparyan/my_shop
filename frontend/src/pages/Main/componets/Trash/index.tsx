import React from 'react';
import './styles.css';
import {Button, Badge} from "antd";
import useTrashActions from '../../hooks';


const Trash = () => {
    const {openTrashModal} = useTrashActions();
    return (
        <div className="trash">
            <Badge count={0}>
                <Button onClick={openTrashModal} shape="circle" icon={<img width={35} src="http://localhost:3001/food-basket.svg" />} />
            </Badge>
        </div>
    )
};

export default Trash;