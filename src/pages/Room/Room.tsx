import React, {ChangeEventHandler, KeyboardEventHandler, useEffect, useState} from 'react';
import {useParams} from "react-router";
import socket from "../../socket";
import axios from "axios";
import classes from './room.module.scss';
import Header from "../../components/Header/Header";
import {MessageTypes, UserTypes } from '../../types';
import Aside from "../../components/Aside/Aside";
import Message from "../../components/Message/Message";
import { Input } from 'antd';
import {useSelector} from "react-redux";
import {getUserState} from '../../store/user/selectors';

const { TextArea } = Input;

type ParamsTypes = {
    login: string
}

const Room:React.FC = () => {
    const {login} = useParams<ParamsTypes>();
    const [users, setUsers] = useState<UserTypes[]>([]);
    const [content, setContent] = useState<string>('');
    const [allMessages, setAllMessages] = useState<MessageTypes[]>([
        {content: 'привет, как дела?', userName: 'Alisa', own: false },
        {content: 'привет, нормально', userName: 'Alex', own: true },
        {content: 'Как твои?', userName: 'Alex', own: true },
    ]);
    const user = useSelector(getUserState);

    useEffect(():void => {
        /*const getUsers = async ():Promise<object> => {
            const {data} = await axios(`/rooms/${id}`);
            setUsers(data.users);
            setAllMessages(data.messages);
            return data;
        }
        getUsers();*/
        /*socket.on('setUsers', (users):void => {
            setUsers(users);
        });
        
        socket.on('sendMessage', (message) => {
            setAllMessages(state => [...state, message]);
        });*/

    }, []);

    const onChangeMessage:ChangeEventHandler<HTMLTextAreaElement> = (e):void => {
        setContent(e.target.value);
    }

    const onSendMessage:KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
        if(e.key !== 'Enter') return;
        // const message = {userName: name, content, roomId: id};
        // socket.emit('newMessage', message);
        // setAllMessages(state => [...state, message]);
        // setContent('');
    }

    return (
        <div className={classes.room}>
            <Header />
            <div className={classes.body}>
                <Aside users={users} />
                <main className={classes.main}>
                    <div className={classes.list}>
                        { allMessages.length && allMessages.map((message, i) => (
                            <Message message={message} key={i} />
                        )) }
                    </div>

                    <TextArea
                        value={content}
                        onChange={onChangeMessage}
                        onPressEnter={onSendMessage}
                        className={classes.textarea}
                    />
                </main>
            </div>
        </div>
    );
};

export default Room;