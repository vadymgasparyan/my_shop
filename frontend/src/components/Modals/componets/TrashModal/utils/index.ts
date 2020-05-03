import {Order} from "../../../../../pages/Main/types";

export const getOrdersRow = (orders: Order[]) => {
    return orders.map((order: Order, index: number) => ({
        key: index,
        name: order.name,
        count: order.count,
        price: order.price,
        total: `${order.count * order.price} грн.`,
    }));
}