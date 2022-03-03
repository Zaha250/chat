import React from 'react';
import {UserTypes} from "../../types";
import classes from './chats.module.scss';
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";

type ChatsProps = {
    users: UserTypes[]
}

const items = [
    {name: 'Alex', lastName: 'Koltunov', photo: ''},
    {name: 'Oleg', lastName: 'Koltunov', photo: ''},
    {name: 'Alisa', lastName: 'Koltunova', photo: ''},
]

const Chats:React.FC<ChatsProps> = ({ users }) => {
    return (
        <div>
            <ul className={classes.list}>
                { items && items.map(user => (
                    <li key={user.name}>
                        <div className={classes.chat}>
                            <Avatar className={classes.photo} size={46} src={user.photo} icon={!user.photo && <UserOutlined />} />
                            <h4 className={classes.name}>{user.name} {user.lastName}</h4>
                        </div>
                    </li>
                )) }
            </ul>
        </div>
    );
};

export default Chats;