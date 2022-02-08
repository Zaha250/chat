import React from 'react';
import classes from './message.module.scss';

type MessageProps = {
    content: any
}

const Message:React.FC<MessageProps> = ({content}) => {
    return (
        <div className={classes.item}>
            <div className={classes.content}>{content}</div>
        </div>
    );
};

export default React.memo(Message);