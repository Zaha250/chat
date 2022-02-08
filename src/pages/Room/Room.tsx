import React, {ChangeEventHandler, KeyboardEventHandler, useEffect, useState} from 'react';
import {useParams} from "react-router";
import socket from "../../socket";
import axios from "axios";
import classes from './room.module.scss';
import Header from "../../components/Header/Header";
import { UserTypes } from '../../types';
import Aside from "../../components/Aside/Aside";
import Message from "../../components/Message/Message";
import { Input } from 'antd';

const { TextArea } = Input;

type ParamsTypes = {
    id: string
}

type MessageTypes = {
    userName: string,
    content: string
}

type RoomProps = {
    user: string
}

const Room:React.FC<RoomProps> = ({user}) => {
    const {id} = useParams<ParamsTypes>();
    const [users, setUsers] = useState<UserTypes[]>([]);
    const [content, setContent] = useState<string>('');
    const [allMessages, setAllMessages] = useState<MessageTypes[]>([]);

    useEffect(():void => {
        const getUsers = async ():Promise<object> => {
            const {data} = await axios(`/rooms/${id}`);
            setUsers(data.users);
            setAllMessages(data.messages);
            return data;
        }
        getUsers();
        socket.on('setUsers', (users):void => {
            setUsers(users);
        });
        
        socket.on('sendMessage', (message) => {
            setAllMessages(state => [...state, message]);
        });

    }, []);

    const onChangeMessage:ChangeEventHandler<HTMLTextAreaElement> = (e):void => {
        setContent(e.target.value);
    }

    const onSendMessage:KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
        if(e.key !== 'Enter') return;
        const message = {userName: user, content, roomId: id};
        socket.emit('newMessage', message);
        setAllMessages(state => [...state, message]);
        setContent('');
    }

    return (
        <div className={classes.room}>
            <Aside users={users} />
            <div className={classes.right}>
                <Header roomId={id ? id : ''} count={users.length} />
                <main>
                    <div className={classes.list}>
                        { allMessages.length && allMessages.map((message, i) => (
                            <Message content={message.content} key={i} />
                        )) }
                    </div>

                    <TextArea
                        value={content}
                        onChange={onChangeMessage}
                        onKeyPress={onSendMessage}
                        className={classes.textarea}
                    />
                </main>
            </div>
        </div>
    );
};

export default Room;