import React from "react";
import {Order, Product} from "../../Main/types";
import {Button, Typography, Space} from "antd";
import {number} from "yup";

const {Text} = Typography;

export const generateRow = (products: Product[]): any => {
    return products.map((product: Product) => ({
            attachment: <img className="table-image" src={`http://localhost:3001${product.attachment}`} />,
            product: product.product,
            price: product.price,
            weight: product.weight,
            actions: product._id,
            key: product._id
        }
    ));
};

const generateOrderList = (orders: Order[]) => {
    return orders.map((order: Order, index: number) =>
        <div key={index}>
            <Text>{order.name}: {order.count}</Text>
        </div>
    );
};

const generateTotal = (orders: Order[]) => {
    return orders.reduce((total: number, order: Order) => {
        return total + (order.count * order.price);
    }, 0);
}

export const generateOrderRow = (orders: any[], changeOrderStatus: (value: string) => void, cancelOrder: (value: string) => void): any => {
    return orders.map((order: any) => ({
            key: order._id,
            name: order.name,
            phone: order.phone,
            order: <div>{generateOrderList(order.orders)}</div>,
            total: `${generateTotal(order.orders)}.00 грн.`,
            status: ((order.isProcessing && !order.isFinished) && 'В процессе') || (order.isFinished && 'Выполнен') || (order.isCanceled && 'Отменен') || 'Новый заказ',
            actions: <Space>
                <Button disabled={order.isFinished || order.isCanceled} onClick={() => changeOrderStatus(order._id)} type="primary">Изменить статус</Button>
                <Button disabled={order.isFinished || order.isCanceled} onClick={() => cancelOrder(order._id)} type="primary" danger>Отменить</Button>
            </Space>

        }
    ));
};