import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDialogsState} from "../../store/dialogs/selectors";
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import { setCurrentDialog } from '../../store/dialogs/dialogsSlice';
import {dialogTypes} from "../../types";
import classes from './dialogs.module.scss';

type DialogsProps = {
    dialogs: dialogTypes[]
}

const Dialogs:React.FC<DialogsProps> = ({ dialogs }) => {
    const {currentDialog} = useSelector(getDialogsState);
    const dispatch = useDispatch();

    return (
        <div>
            <ul className={classes.list}>
                { dialogs && dialogs.map(dialog => (
                    <li key={dialog._id} onClick={() => dispatch(setCurrentDialog(dialog._id))}>
                        <div className={`${classes.dialog} ${currentDialog._id === dialog._id ? classes.active : ''}`}>
                            <Avatar className={classes.photo} size={46} src={dialog.avatar} icon={!dialog.avatar && <UserOutlined />} />
                            <h4 className={classes.name}>{dialog.fullName}</h4>
                        </div>
                    </li>
                )) }
            </ul>
        </div>
    );
};

export default Dialogs;