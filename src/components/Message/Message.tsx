import React from 'react';
import {Popover} from "antd";
import classes from './message.module.scss';
import {MessageTypes} from "../../types";

interface IMessageProps {
    message: MessageTypes
}

const Message:React.FC<IMessageProps> = ({message}) => {
    const date = new Date(message.timestamp);

    return (
        <div className={[classes.item, message.own ? classes.ownItem : classes.strangerItem].join(' ')}>
            <div className={classes.content}>
                {message.content}
            </div>
            <Popover
                content={
                    <span>{
                        `${date.toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric' })},
                         ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                    }</span>
                }
            >
                <div className={classes.time}>
                    {`${date.getHours()}:${date.getMinutes()}`}
                </div>
            </Popover>
        </div>
    );
};

export default React.memo(Message);