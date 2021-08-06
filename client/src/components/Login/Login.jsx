import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signin } from '../../store/actions/userActions';


export default function Login(props) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/'

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo, Loading, error} = userSignin

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    }

    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, userInfo, redirect])

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>

            <div>
                <label>Ingresa tu email</label>
                <input
                type="email"
                id="email"
                placeholder="Ingresa tu email"
                required
                onChange={e => setEmail(e.target.value)}
                ></input>
            </div>
            <div>
                <label>Ingresa tu contraseña</label>
                <input
                type="password"
                id="password"
                placeholder="Ingresa tu contraseña"
                required
                onChange={e => setPassword(e.target.value)}
                ></input>
            </div>
            <div>
                <label />
                    <button type="submit">
                        Sign In
                    </button>
            </div>
            </form>
        </div>
    )
}