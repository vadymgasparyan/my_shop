import React from "react";
import './styles.css';
import Text from "antd/es/typography/Text";
import {ClockCircleOutlined} from '@ant-design/icons';

const Header = (): JSX.Element => {
    return (
        <div className="header">
            <ClockCircleOutlined style={{fontSize: 30}}/>
            <div className="header-work">
                <Text>Пн - Чт: 11:00 - 19:00</Text>
                <Text>Пn - Вс: 11:00 - 21:00</Text>
            </div>
        </div>
    )
};

export default Header;