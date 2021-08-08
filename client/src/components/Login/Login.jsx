import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Login.css'
import { signin } from '../../store/actions/userActions';
import { Link } from 'react-router-dom'
import { Input } from 'semantic-ui-react'


export default function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/'

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo, Loading, error } = userSignin

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, userInfo, redirect])

    return (
        <div className="ContainerFormLogin">

            <form className="formLogin" onSubmit={submitHandler}>
                <div>
                    <h2 className="ColorTextLoginTitle">Haz regresado!</h2>
                </div>
                <div className="EmailModify">
                    <label className="ColorTextLogin">Ingresa tu email</label>
                    <Input
                        className="InputLogin"
                        class="ui input"
                        type="email"
                        id="email"
                        placeholder="Ingresa tu email"
                        required
                        onChange={e => setEmail(e.target.value)}
                    ></Input>
                </div>
                <div className="PasswordModify">
                    <label className="ColorTextLogin">Ingresa tu contraseña</label>
                    <Input
                        className="InputLogin"
                        class="ui input"
                        type="password"
                        id="password"
                        placeholder="Ingresa tu contraseña"
                        required
                        onChange={e => setPassword(e.target.value)}
                    ></Input>
                </div>
                <div>
                    <label />
                    <div className="AcomodoButton"></div>
                    <button class="ui red inverted button" type="submit" >
                        Ingresar
                    </button>
                </div>
                <label className="ColorTextRegister">¿No tienes una cuenta aún? <Link to="/register">¡Registrate acá!</Link></label>
            </form>
        </div>
    )
}