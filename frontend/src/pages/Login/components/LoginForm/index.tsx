import React from 'react';
import {Field, Formik} from 'formik';
import {Button, Form} from 'antd';

import {useHistory} from "react-router-dom";

import {MailOutlined, LockOutlined} from '@ant-design/icons';

import FormInput from '../../../../components/FormInput';
import {FormikHelpers} from 'formik/dist/types';
import * as Yup from 'yup';
import useLoginActions from '../../hooks';
import {LoginInterface} from '../../types/indes';

import './styles.css';

const validationSchema = Yup.object({
    email: Yup.string().email('enter correct email address').required('enter email'),
    password: Yup.string()
        .min(6, 'password must contain at least 6 characters')
        .max(12, 'password must be 12 characters maximum')
        // .matches(/^(?=.*[a-z])[a-z\d]{6,12}$/, 'password must contain letters and numbers')
        .required('enter password'),
});

const LoginForm = () => {
    const history = useHistory();
    const {login} = useLoginActions();
    const initialValues: LoginInterface = {
        email: '',
        password: '',
    };

    const submit = (value: LoginInterface, formikBag: FormikHelpers<LoginInterface>) => {
        login(value).then(() => {
            console.log(history);
            history.push('/admin');
        }).catch((err: any) => {
            formikBag.setSubmitting(false);
            formikBag.setFieldError('email', 'check your email');
            formikBag.setFieldError('password', 'check your password');
        });
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submit}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({handleSubmit}) => {
                return (
                    <Form className={'form_style'}>
                        <Field
                            name="email"
                            type="input"
                            placeholder="Email"
                            prefix={<MailOutlined className="site-form-item-icon" />}
                            as={FormInput}
                        />
                        <Field
                            name="password"
                            type="password"
                            placeholder="Password"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            as={FormInput}
                        />

                        <div className={'form_footer'}>
                            <Button type="primary" onClick={() => handleSubmit()} className="login-form-button">
                                Log in
                            </Button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default LoginForm;
