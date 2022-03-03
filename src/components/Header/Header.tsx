import React from 'react';
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import classes from './header.module.scss';
import {useSelector} from "react-redux";
import {getUserState} from "../../store/user/selectors";

const Header:React.FC = () => {
    const { photo, name, lastName } = useSelector(getUserState);

    return (
        <header className={classes.header}>
            <div className={classes.profile}>
                <Avatar className={classes.photo} size={46} src={photo} icon={!photo && <UserOutlined />} />
                <h4 className={classes.name}>{name}<br/>{lastName}</h4>
            </div>
        </header>
    );
};

export default React.memo(Header);