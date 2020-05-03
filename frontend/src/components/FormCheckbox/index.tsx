import React from 'react';
import {Checkbox} from 'antd';

import {FieldInputProps, useField} from 'formik';

interface FormCheckboxProps extends FieldInputProps<string> {
    label: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({label, ...props}): JSX.Element => {
    const [field] = useField(props);
    return (
        <Checkbox {...field} checked={field.value}>
            {label}
        </Checkbox>
    );
};

export default FormCheckbox;
