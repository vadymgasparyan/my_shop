import React, {useEffect} from "react";
import {Table} from "antd";
import {useSelector} from "react-redux";
import {getOrdersSelector} from "../../selectors";
import useAdminActions from "../../hooks";
import {generateOrderRow} from "../../utils";

const OrdersPage = (): JSX.Element => {
    const {getOrders, changeOrderStatus, cancelOrder} = useAdminActions();
    useEffect(() => {
        getOrders();
    }, []);
    const orders = useSelector(getOrdersSelector);
    const productsData = generateOrderRow(orders, changeOrderStatus, cancelOrder);
    const columns = [
        {
            title: 'Пользователь',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Заказ',
            dataIndex: 'order',
            key: 'order',
        },
        {
            title: 'Всего',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Действие',
            dataIndex: 'actions',
            key: 'actions',
        }
    ];

    return (
        <div>
            <Table columns={columns} dataSource={productsData} />
        </div>
    )
}

export default OrdersPage;