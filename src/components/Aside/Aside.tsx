import React from 'react';
import classes from './aside.module.scss';
import {UserTypes} from "../../types";

type AsideProps = {
    users: UserTypes[]
}

const Aside:React.FC<AsideProps> = ({users}) => {
    return (
        <aside className={classes.aside}>
            <ul>
                { users && users.map(user => (
                    <li key={user.id + user.name}><strong>{user.name}</strong></li>
                )) }
            </ul>
        </aside>
    );
};

export default React.memo(Aside);