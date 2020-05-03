import React from 'react';

import {Button, Tooltip, Typography, Space} from 'antd';

import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './styles.css';

const { Text } = Typography;

interface IntegerProps {
    count: number;
    addCount: () => void;
    minusCount: () => void;
    isDisabled: boolean;
    isSelect: boolean;
}

const Integer = (props: IntegerProps): JSX.Element => {
    return (
        <div className="integer">
            <Space>
                <Tooltip title="text">
                    <Button disabled={props.isDisabled || props.isSelect} onClick={props.minusCount} type="primary" shape="circle" icon={<MinusOutlined />} />
                </Tooltip>

                <Text>{props.count}</Text>

                <Tooltip title="test">
                    <Button disabled={props.isSelect} onClick={props.addCount} type="primary" shape="circle" icon={<PlusOutlined />} />
                </Tooltip>
            </Space>
        </div>
    )
};

export default Integer;