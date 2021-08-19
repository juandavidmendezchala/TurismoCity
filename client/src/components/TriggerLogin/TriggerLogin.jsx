import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import "./TriggerLogin.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { logout, signInAuth0, register, logoutlocal, signin } from '../../store/actions/userActions'
import 'semantic-ui-css/semantic.min.css'
import { useAuth0 } from "@auth0/auth0-react";



const DropdownTriggerExample = () => {
    const dispatch = useDispatch()
    const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
    const { logout } = useAuth0()

    const userSingin = useSelector(state => state.userSignin)
    const { userInfo } = userSingin

    // const singout = () => {
    //     dispatch(logout())
    // }

    const logoOutWeb = () => {
        // vacio el state userInfo para desloguear
        dispatch(logoutlocal())
        // vacio el user de auth0
        logout()
        // llevo a principal
        window.location.href = "/"
    }

    useEffect(() => {
        // cuando completo form en auth0 envio a registrarme en nuestra db (controlando en back que no se dupliquen los usuarios)
        if (!userInfo) {
            dispatch(register(user.name, user.email, user.birthdate || "1999-07-10"))
            // si se registra hay que loguearse
        }
    }, [])

    const trigger = (
        <span className="SpanNameLogin">
            <Icon name='Localuser' /> Hola, {!userInfo ? "LowHenry" : userInfo.name}
        </span>
    )

    const options = [
        {
            key: 'Localuser',
            text: (
                <span>
                    Perfil de <strong>{!userInfo ? "LowHenry" : userInfo.name}</strong>
                </span>
            ),
            disabled: true,
        },
        //{ key: 'profile', text: 'Tu Perfil', href: "/profile" },
        { key: 'panel', text: 'Tus Actividades', href: "/youractivities/activities" },
        { key: 'experiences', text: 'Ofrecé experiencias', href: "/experiences" },
        { key: 'sign-out', text: 'Salir', onClick: (logout,logoOutWeb) },    
    ]

    return (
        <div>
            <Dropdown trigger={trigger} options={options} />
        </div>
    )
}

export default DropdownTriggerExample
