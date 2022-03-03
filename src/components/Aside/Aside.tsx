import React from 'react';
import classes from './aside.module.scss';
import {UserTypes} from "../../types";
import Chats from "../Chats/Chats";

type AsideProps = {
    users: UserTypes[]
}

const Aside:React.FC<AsideProps> = ({users}) => {
    return (
        <aside className={classes.aside}>
            <h2 className={classes.title}>Чаты</h2>
            <Chats users={users} />
        </aside>
    );
};

export default React.memo(Aside);