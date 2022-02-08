import React from 'react';
import classes from './aside.module.scss';
import {UserTypes} from "../../types";

type AsideProps = {
    users: UserTypes[]
}

const Aside:React.FC<AsideProps> = ({users}) => {
    return (
        <aside className={classes.aside}>
            <strong>Пользователи:</strong>
            <ul>
                { users && users.map(user => (
                    <li key={user.id + user.name}>{user.name}</li>
                )) }
            </ul>
        </aside>
    );
};

export default React.memo(Aside);