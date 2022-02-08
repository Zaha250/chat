import React from 'react';
import classes from './header.module.scss';

type headerProps = {
    count: string | number,
    roomId: string | number
}

const Header:React.FC<headerProps> = ({count, roomId}) => {
    return (
        <header className={classes.header}>
            <h1>Room: {roomId}</h1>
            <h2>Онлайн: {count}</h2>
        </header>
    );
};

export default React.memo(Header);