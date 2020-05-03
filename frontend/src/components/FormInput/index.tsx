import React from 'react';

import {FieldInputProps, useField} from 'formik';

import {Form, Input} from 'antd';

const {Item} = Form;

interface FormInputProps extends FieldInputProps<string> {
    prefix: JSX.Element | undefined;
    placeholder: string;
    type: string | undefined;
    label: string | undefined;
    required: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
    prefix,
    placeholder,
    type,
    label,
    required = true,
    ...props
}): JSX.Element => {
    const [field, meta] = useField(props);

    return (
        <Item label={label} required={required} help={meta.error}>
            <Input {...field} prefix={prefix} type={type || 'text'} placeholder={placeholder} />
        </Item>
    );
};

export default FormInput;
