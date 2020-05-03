import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import { Modal, Table } from 'antd';
import {MobileOutlined, UserOutlined} from '@ant-design/icons';
import {Field, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';

import useModalActions from './../../hooks';

import './styles.css';
import FormInput from '../../../FormInput';
import {Order} from "../../../../pages/Main/types";
import {getOrdersRow} from "./utils";

interface TrashInterface {
    name: string;
    phone: string;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Введите имя'),
    phone: Yup.string()
        .required('Введите номер телефона')
        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Введите номер телефона')
});


const TrashModal = (): JSX.Element => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const {closeTrashModal, clearOrders, sendOrder} = useModalActions();
    const {isTrashModal} = useSelector((state: any) => state.modalState);
    const {orders} = useSelector((state: any) => state.trashState);

    const initialValues: TrashInterface = {
        name: '',
        phone: ''
    };

    const columns = [
        {
            title: 'Продуцкия',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Количество',
            dataIndex: 'count',
            key: 'count',
            width: '120px'
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
            width: '80px'
        },
        {
            title: 'Тотал',
            dataIndex: 'total',
            key: 'total',
            width: '100px'
        }
    ];

    const ordersRow: any = getOrdersRow(orders);

    const handleCancel = (resetFrom: () => void): void => {
        resetFrom();
        closeTrashModal();
    };

    const handleOk = (value: TrashInterface, {resetForm}: FormikHelpers<TrashInterface>) => {
        setLoading(true);
        sendOrder({
            ...value,
            orders,
        }).then(() => {
            setLoading(false);
            clearOrders();
            handleCancel(resetForm);
        }).catch(() => {
            setLoading(false);
        });
    };

    const getTotal = (): number => {
        const total = orders.reduce((number: number, order: Order) => {
            return number + (order.price * order.count);
        }, 0);

        return total;
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleOk}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={validationSchema}
        >
            {({handleSubmit, resetForm}) => (

                <Modal
                    title="Ваш Заказ"
                    visible={isTrashModal}
                    okButtonProps={{
                        loading: isLoading
                    }}
                    okText='Заказать'
                    cancelText='Отмена'
                    onOk={() => handleSubmit()}
                    onCancel={() => handleCancel(resetForm)}
                >
                    <Field
                        name="name"
                        type="input"
                        placeholder="Фамилия Имя"
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        as={FormInput}
                    />

                    <Field
                        name="phone"
                        type="input"
                        placeholder="Телефон"
                        prefix={<MobileOutlined className="site-form-item-icon" />}
                        as={FormInput}
                    />

                    <Table
                        columns={columns}
                        dataSource={ordersRow}
                        scroll={{
                            y: 300,
                        }}
                        pagination={false}
                        footer={() => (
                            <div style={{textAlign: 'end'}}>
                                Всего к оплате: {getTotal()}.00 грн.
                            </div>
                        )}
                    />
                </Modal>
            )}
        </Formik>
    );
}

export default TrashModal;