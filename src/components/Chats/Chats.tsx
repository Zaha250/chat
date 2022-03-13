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
    {name: 'Alisa', lastName: 'Koltunova', photo: 'https://sun9-20.userapi.com/impf/PflH5NHeDGdPg6Lim3TmZ49Ayc-woyIFVuIoGg/DGqJL1-VXho.jpg?size=1440x2160&quality=95&sign=69b9fbda56be87c28c6681d86b44e6c5&type=album'},
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