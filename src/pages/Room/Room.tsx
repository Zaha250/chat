import React, {ChangeEventHandler, KeyboardEventHandler, useEffect, useState} from 'react';
import socket from "../../socket";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { Input } from 'antd';
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";
import Message from "../../components/Message/Message";
import {getUserState} from '../../store/user/selectors';
import {MessageTypes, UserTypes } from '../../types';
import classes from './room.module.scss';
import { setUser } from '../../store/user/userSlice';

const { TextArea } = Input;

const Room:React.FC = () => {
    const [users, setUsers] = useState<UserTypes[]>([]);
    const [content, setContent] = useState<string>('');
    const [allMessages, setAllMessages] = useState<MessageTypes[]>([
        {content: 'привет, как дела?', userName: 'Alisa', own: false, timestamp: 1647135916602 },
        {content: 'привет, нормально', userName: 'Alex', own: true, timestamp: 1647135916602 },
        {content: 'Как твои?', userName: 'Alex', own: true, timestamp: 1647135919602 },
        {content: 'Тоже все в порядке, какие планы на день?', userName: 'Alex', own: false, timestamp: 1643135919602 },
    ]);
    const user = useSelector(getUserState);
    const dispatch = useDispatch();

    useEffect(():void => {
        const storageUser = localStorage.getItem('authUser');
        if(storageUser) {
            dispatch(setUser(JSON.parse(storageUser)));
        }
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
        e.preventDefault();
        if(!content.trim().length) return;

        const newMessage:MessageTypes = {
            userName: user.name,
            timestamp: new Date().getTime(),
            own: true,
            content
        }
        setAllMessages(prev => ([...prev, newMessage]));
        setContent('');
        // const message = {userName: name, content, roomId: id};
        // socket.emit('newMessage', message);
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
                        autoSize={true}
                    />
                </main>
            </div>
        </div>
    );
};

export default Room;