import React from 'react';
import classes from './message.module.scss';
import {MessageTypes} from "../../types";

interface IMessageProps {
    message: MessageTypes
}

const Message:React.FC<IMessageProps> = ({message}) => {
    return (
        <div className={classes.item}>
            <div className={[classes.content, classes.message, message.own ? classes.own : ''].join(' ')}>{message.content}</div>
        </div>
    );
};

export default React.memo(Message);