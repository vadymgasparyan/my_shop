import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Modal, Form} from 'antd';
import {Field, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';

import useModalActions from './../../hooks';

// import './styles.css';
import FormInput from '../../../FormInput';
import {ProductInterface} from "../../types";
import FileUploader from '../../../FileUploader';

const validationSchema = Yup.object({
    product: Yup.string().required('Введите название'),
    weight: Yup.string()
        .required('Введите вес'),
    price: Yup.string().required('Введите цену'),
    file: Yup.array().required('Выберете фотографию')
});


const CreateProductModal = (): JSX.Element => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const {closeCreateProductModal, createProduct} = useModalActions();
    const {isCreateProductModal} = useSelector((state: any) => state.modalState);

    const initialValues: ProductInterface = {
        product: '',
        weight: '',
        price: '',
        file: []
    };


    const handleCancel = (resetFrom: () => void): void => {
        resetFrom();
        closeCreateProductModal();
    };

    const handleOk = (value: ProductInterface, {resetForm}: FormikHelpers<ProductInterface>) => {
        setLoading(true);
        createProduct(value).then(() => {
            setLoading(false);
            handleCancel(resetForm);
        }).catch(() => {
            setLoading(false);
        });
    };

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
                    visible={isCreateProductModal}
                    okButtonProps={{
                        loading: isLoading
                    }}
                    okText='Заказать'
                    cancelText='Отмена'
                    onOk={() => handleSubmit()}
                    onCancel={() => handleCancel(resetForm)}
                >
                    <Form>
                        <Field
                            name="product"
                            type="input"
                            placeholder="Продукция"
                            as={FormInput}
                        />

                        <Field
                            name="weight"
                            type="number"
                            placeholder="Вес Порции"
                            as={FormInput}
                        />

                        <Field
                            name="price"
                            type="number"
                            placeholder="Цена"
                            as={FormInput}
                        />

                        <Field name="file" type="file" label="File" as={FileUploader} />
                    </Form>

                </Modal>
            )}
        </Formik>
    );
};

export default CreateProductModal;