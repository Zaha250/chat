import React, {useState} from 'react';
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button } from 'antd';
import classes from './connect.module.scss';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import socket from "../../socket";
import {useNavigate} from "react-router";

type Inputs = {
    roomId: string | number,
    userName: string
}

type ConnectProps = {
    setUser: (userName:string) => void
}

const Connect:React.FC<ConnectProps> = ({setUser}) => {
    const [isLoad, setLoad] = useState<boolean>(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();

    const history = useNavigate();

    const join = (data:Inputs):void => {
        socket.emit('join', data);
    }

    const onSubmit:SubmitHandler<Inputs> = async (data) => {
        setLoad(true);
        const result = await axios.post('/rooms', {...data});
        join(data);
        setLoad(false);
        setUser(data.userName);
        history(`/room/${data.roomId}`);
    }

    return (
        <main className={classes.main}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <Input
                    placeholder='Комната'
                    className={classes.input}
                    {...register('roomId', {required: 'Поле обязательно для заполнения'})}
                    onChange={e => setValue('roomId', e.target.value)}
                />
                { errors?.roomId?.message && <ErrorMessage message={errors.roomId.message} /> }
                <Input
                    placeholder='Имя пользователя'
                    className={classes.input}
                    {...register('userName', {required: 'Поле обязательно для заполнения'})}
                    onChange={e => setValue('userName', e.target.value)}
                />
                { errors?.userName?.message && <ErrorMessage message={errors.userName.message} /> }
                <Button htmlType="submit" loading={isLoad} block>
                    Войти
                </Button>
            </form>
        </main>
    );
};

export default Connect;