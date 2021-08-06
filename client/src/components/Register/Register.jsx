import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert('Las contraseñas no coinciden')
        } else {
            dispatch(register(name, email, password))
        }
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <h1>Create Account</h1>
                </div>
                <div>
                    <label  htmlFor="name">Nombre</label>
                    <input
                    type="name"
                    id="name"
                    placeholder="Ingresa tu nombre"
                    required
                    onChange={e => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label  htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    placeholder="ejemplo@test.com"
                    required
                    onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label  htmlFor="password">Ingresa una contraseña</label>
                    <input
                    type="password"
                    id="password"
                    placeholder="*****"
                    required
                    onChange={e => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label  htmlFor="confirmPassword">Confirma tu contraseña</label>
                    <input
                    type="password"
                    id="password"
                    placeholder="*****"
                    required
                    onChange={e => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
            </form>

        </div>
    )
}