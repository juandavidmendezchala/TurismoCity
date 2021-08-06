import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../store/actions/userActions';
import LoadingBox from '../Boxes/LoadingBox';
import MessageBox from '../Boxes/MessageBox';


export default function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/'

    const userRegister = useSelector(state => state.userRegister);
    const {userInfo, loading, error} = userRegister

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert('Las contraseñas no coinciden')
        } else {
            dispatch(register(name, email, password, birthdate))
        }
    }

    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, userInfo, redirect])

    return(
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Create Account</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Nombre</label>
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
                    <label  htmlFor="date">Birthdate</label>
                    <input
                    type="date"
                    id="birthday"
                    placeholder="AAAA/MM/DD"
                    required
                    onChange={e => setBirthdate(e.target.value)}
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
                <div>
                    <label />
                    <button type="submit">
                        Register
                    </button>
                </div>
            </form>

        </div>
    )
}