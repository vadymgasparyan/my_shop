import React, {useEffect} from "react";
import {Button, Space, Table} from "antd";
import {useSelector} from "react-redux";
import {getProductsSelector} from "../../selectors";
import {generateRow} from "../../utils";
import useAdminActions from "../../hooks";

const ProductsPage = (): JSX.Element => {
    const {getProducts, removeProduct, changeCreateProductModal} = useAdminActions();
    useEffect(() => {
        getProducts();
    }, []);
    const products = useSelector(getProductsSelector);
    const productsData = generateRow(products);
    const columns = [
        {
            title: 'Продуцкия',
            dataIndex: 'attachment',
            key: 'attachment',
        },
        {
            title: 'Продуцкия',
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Вес',
            dataIndex: 'weight',
            key: 'count',
        },
        {
            title: 'Действие',
            dataIndex: 'actions',
            key: 'actions',
            render: (actions: any) => {
                return (
                    <Space>
                        <Button onClick={() => removeProduct(actions)} type="primary" danger>Удалить</Button>
                    </Space>
                )
            }
        }
    ];

    return (
        <div>

            <Table columns={columns} dataSource={productsData} />

            <div className="create-product-button">
                <Button onClick={changeCreateProductModal} type="primary" >Создать</Button>
            </div>
        </div>
    )
}

export default ProductsPage;