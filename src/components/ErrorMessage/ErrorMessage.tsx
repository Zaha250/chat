import React from 'react';
import {WarningOutlined} from '@ant-design/icons';
import {Space} from "antd";

type ErrorMessageProps = {
    message: string
}

const ErrorMessage:React.FC<ErrorMessageProps> = ({message}) => {
    return (
        <Space>
            <WarningOutlined />
            <p>{message}</p>
        </Space>
    );
};

export default ErrorMessage;