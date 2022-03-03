import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button } from 'antd';
import classes from './auth.module.scss';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import socket from "../../socket";
import {authState} from "../../store/signIn/selectors";
import {getUserState} from "../../store/user/selectors";
import {signIn} from "../../store/signIn/services";
import { Link } from 'react-router-dom';

type Inputs = {
    login: string
}

const Auth:React.FC = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();
    const { error, isLoad } = useSelector(authState);
    const { login } = useSelector(getUserState);
    const dispatch = useDispatch();

    const history = useNavigate();

    const join = (data:Inputs):void => {
        socket.emit('join', data);
    }

    useEffect(() => {
        if(login) {
            history(`/profile/${login}`);
        }
    }, [login]);

    const onSubmit:SubmitHandler<Inputs> = async (data) => {
        // const result = await axios.post('/rooms', {...data});
        // join(data);
        const res = await dispatch(signIn(data));
        console.log(res);
    }

    return (
        <main className={classes.main}>
            <h1>Войти</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <Input
                    placeholder='Логин'
                    className={classes.input}
                    {...register('login', {required: 'Поле обязательно для заполнения'})}
                    onChange={e => setValue('login', e.target.value)}
                />
                { errors?.login?.message && <ErrorMessage message={errors.login.message} /> }
                { error && <ErrorMessage message={error} /> }
                <Button htmlType="submit" loading={isLoad} block>
                    Войти
                </Button>
                <Link to='/reg'>Зарегистрироваться</Link>
            </form>
        </main>
    );
};

export default Auth;