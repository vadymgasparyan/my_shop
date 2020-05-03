import React, {useEffect} from 'react';

import {Tabs} from "antd";
import ProductsPage from './components/Products';
import './styles.css';
import OrdersPage from "./components/Orders";
import {fetchMe} from "./requests";
import {useHistory} from "react-router";

const { TabPane } = Tabs;

const Admin = (): JSX.Element => {
    const history = useHistory();

    useEffect(() => {
        fetchMe().catch((err: any) => {
            history.push('/admin/login');
        })
    }, []);

    return (
        <div className="admin-page">
            <Tabs defaultActiveKey="1" type="card">

                <TabPane tab="Заказы" key="1">
                    <OrdersPage />
                </TabPane>

                <TabPane tab="Продукция" key="2">
                    <ProductsPage />
                </TabPane>
            </Tabs>

        </div>
    )
};

export default Admin;