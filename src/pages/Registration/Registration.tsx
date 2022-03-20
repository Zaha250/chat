import React, {useState} from 'react';
import {useNavigate} from "react-router";
import axios from "axios";
import {Link} from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Button } from 'antd';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import classes from '../Auth/auth.module.scss';

type Inputs = {
    login: string,
    password: string,
    lastName: string,
    name: string,
    secondName: string,
    photo: string
}

const Registration:React.FC = () => {
    const [isLoad, setLoad] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();

    const history = useNavigate();

    const onSubmit:SubmitHandler<Inputs> = async (data) => {
        setLoad(true);
        const response = await axios.post('/api/auth/reg', data);
        console.log(response.data);
        setLoad(false);
        if(response.data.error) {
            setError(response.data.error);
            return;
        }
        history('/auth');
    }

    return (
        <main className={classes.main}>
            <h1>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <Input
                    placeholder='Фамилия'
                    className={classes.input}
                    {...register('lastName', {required: 'Поле обязательно для заполнения'})}
                    onChange={e => setValue('lastName', e.target.value)}
                />
                { errors?.lastName?.message && <ErrorMessage message={errors.lastName.message} /> }
                <Input
                    placeholder='Имя'
                    className={classes.input}
                    {...register('name', {required: 'Поле обязательно для заполнения'})}
                    onChange={e => setValue('name', e.target.value)}
                />
                { errors?.name?.message && <ErrorMessage message={errors.name.message} /> }
                <Input
                    placeholder='Отчество'
                    className={classes.input}
                    {...register('secondName')}
                    onChange={e => setValue('secondName', e.target.value)}
                />
                <Input
                    placeholder='Фото'
                    className={classes.input}
                    {...register('photo')}
                    onChange={e => setValue('photo', e.target.value)}
                />
                <Input
                    placeholder='Логин'
                    className={classes.input}
                    {...register('login', {required: 'Поле обязательно для заполнения'})}
                    onChange={e => setValue('login', e.target.value)}
                />
                { errors?.login?.message && <ErrorMessage message={errors.login.message} /> }
                <Input
                    type='password'
                    placeholder='Пароль'
                    className={classes.input}
                    {...register('password', {
                        required: 'Поле обязательно для заполнения',
                        minLength: {
                            value: 3,
                            message: 'Пароль должен состоять минимум из 3-х символов'
                        }
                    })}
                    onChange={e => setValue('password', e.target.value)}
                />
                { errors?.password?.message && <ErrorMessage message={errors.password.message} /> }
                { error && <ErrorMessage message={error} /> }
                <Button
                    htmlType="submit"
                    loading={isLoad}
                    block
                    type='primary'
                    className={classes.submitBtn}
                >
                    Зарегистрироваться
                </Button>
                <Link to='/auth' className={classes.link}>Войти</Link>
            </form>
        </main>
    );
};

export default Registration;