import React from 'react';
import {Avatar, Popover, Button} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getUserState} from "../../store/user/selectors";
import {setUser} from "../../store/user/userSlice";
import classes from './header.module.scss';

const Header:React.FC = () => {
    const { photo, name, lastName } = useSelector(getUserState);
    const dispatch = useDispatch();
    const history = useNavigate();

    const logout = () => {
        dispatch(setUser({}));
        history('/');
    }

    return (
        <header className={classes.header}>
            <div className={classes.profile}>
                <Popover
                    content={
                        <Button type="link" onClick={logout}>Выйти</Button>
                    }
                >
                    <Avatar className={classes.photo} size={46} src={photo} icon={!photo && <UserOutlined />} />
                </Popover>
                <h4 className={classes.name}>{name}<br/>{lastName}</h4>
            </div>
        </header>
    );
};

export default React.memo(Header);