import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Register.css"
import { Link } from 'react-router-dom';
import { register } from '../../store/actions/userActions';
import LoadingBox from '../Boxes/LoadingBox';
import MessageBox from '../Boxes/MessageBox';
import { Input } from 'semantic-ui-react'


export default function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/'

    const userRegister = useSelector(state => state.userRegister);
    const { userInfo, loading, error } = userRegister

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden')
        } else {
            dispatch(register(name, email, password, birthdate))
        }
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, userInfo, redirect])

    const alertRegister = () => {
        alert('¡Te has registrado exitosamente!')
    }

    return (
        <div className="ContainerTodoRegister">
            <form className="formContainerRegister" onSubmit={submitHandler}>
                <div className="ContainerTitleRegister">
                    <h1 className="TitleRegister"> Unite a nosotros!</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div className="ContainerLabelInputRegister">
                    <label className="LabelRegister" htmlFor="name">Ingresa tu nombre</label>
                    <Input

                        type="name"
                        id="name"
                        placeholder="Ingresa tu nombre"
                        required
                        onChange={e => setName(e.target.value)}
                    ></Input>
                </div>
                <div className="ContainerLabelInputRegister">
                    <label className="LabelRegister" htmlFor="email">Ingresa tu Email</label>
                    <Input
                        class="ui input"
                        type="email"
                        id="email"
                        placeholder="ejemplo@test.com"
                        required
                        onChange={e => setEmail(e.target.value)}
                    ></Input>
                </div>
                <div className="ContainerLabelInputRegister">
                    <label className="LabelRegister" htmlFor="date">Ingresa fecha de nacimiento</label>
                    <Input
                        class="ui input"
                        type="date"
                        id="birthday"
                        placeholder="AAAA/MM/DD"
                        required
                        onChange={e => setBirthdate(e.target.value)}
                    ></Input>
                </div>
                <div className="ContainerLabelInputRegister">
                    <label className="LabelRegister" htmlFor="password">Ingresa una contraseña</label>
                    <Input
                        class="ui input"
                        type="password"
                        id="password"
                        placeholder="*****"
                        required
                        onChange={e => setPassword(e.target.value)}
                    ></Input>
                </div>
                <div className="ContainerLabelInputRegister">
                    <label className="LabelRegister" htmlFor="confirmPassword">Confirma tu contraseña</label>
                    <Input
                        class="ui input"
                        type="password"
                        id="password"
                        placeholder="*****"
                        required
                        onChange={e => setConfirmPassword(e.target.value)}
                    ></Input>
                </div>
                <div className="ContainerLabelInputRegister">
                    <label />
                    <div className="ContenedorButton">
                        <button class="ui red inverted button" type="submit" onClick={alertRegister}>
                            Registrarse
                        </button>
                    </div>

                </div>
            </form>

        </div>
    )
}