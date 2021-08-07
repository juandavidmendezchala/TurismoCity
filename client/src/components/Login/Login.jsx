<<<<<<< HEAD
//instalar axios, md5, universal-cookie

import { Component } from "react";
//import ./Login.css
import axios from 'axios'
import Cookies from 'universal-cookie'


const baseUrl = 'http://localhost:3001/users' //El url/nombre de la base de datos o api
const cookies = new Cookies();


class Login extends Component {
    state = {
        form: {
            email: '',
            password: ''
        }
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    iniciarSesion = async () => {
        await axios.get(baseUrl, { params: { username: this.state.form.username, password: this.state.form.password } })
            .then(response => {
                console.log(response.data)
            })
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];
                    cookies.set('id', respuesta.id, { path: '/' })
                    cookies.set('nombre', respuesta.nombre, { path: '/' })
                    cookies.set('apellido', respuesta.apellido, { path: '/' })
                    cookies.set('username', respuesta.username, { path: '/' })
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`)
                    window.location.href = 'http://localhost:3001/home'//aqui va la direccion del home con ./
                } else {
                    alert('El usuario o la contraseña no es correcta')
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount() {
        if (cookies.get('username')) {
            window.location.href = 'http://localhost:3001/home'//aqui va la direccion del home con ./
        }
    }


    render() {
        return (
            <div className='cointainerPrincipal'>
                <div className='contarnerSecundario'>
                    <div className='form-group'>
                        <label>Usuario:</label>
                        <br />
                        <input
                            type='text'
                            className='form-control'
                            name='username'
                            onChange={this.handleChange}
                        />
                        <br />
                        <label>Contraseña:</label>
                        <br />
                        <input
                            type='password'
                            className='form-control'
                            name='password'
                            onChange={this.handleChange}
                        />
                        <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar sesion</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
=======
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Login.css'
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
            <form className="form" onSubmit={submitHandler}>
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
>>>>>>> b1faec0012bd164b595edfabc41e4582e14b1f05
