import React from 'react';
import {Form, Upload} from 'antd';
import {FieldInputProps, useField} from 'formik';

import {PlusOutlined} from '@ant-design/icons';
import {RcFile, UploadFile} from 'antd/lib/upload/interface';

const {Item} = Form;

const getBase64 = (file: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};

const FileUploader: React.FC<FieldInputProps<File>> = (props: any): JSX.Element => {
    const [field, meta, helpers] = useField(props);
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    const handleChange = (fileUpload: RcFile): boolean | PromiseLike<void> => {
        getBase64(fileUpload).then((url: any) => {
            helpers.setValue([...field.value, {...fileUpload, url, uploadedData: fileUpload}]);
        });
        // accordingly to antd docs disable upload file after select
        return false;
    };
    const handlePreview = async (file: UploadFile<any>): Promise<void> => {
        if (file && !file.url && !file.preview) {
            (file as any).preview = await getBase64(file.originFileObj);
        }
        const filePreviewTab = window.open('', '_blank');
        (filePreviewTab as any).document.write(`<img src='${file.url || file.preview}' />`);
    };

    const handleRemove = (file: UploadFile<File>): void => {
        const files = field.value.filter((fileForUpload: UploadFile<File>) => fileForUpload !== file);
        helpers.setValue(files);
    };

    return (
        <Item label={props.label}>
            <Upload
                beforeUpload={handleChange}
                listType="picture-card"
                fileList={field.value}
                onPreview={handlePreview}
                onRemove={handleRemove}
            >
                {field.value.length < 1 && uploadButton}
            </Upload>
        </Item>
    );
};

export default FileUploader;
