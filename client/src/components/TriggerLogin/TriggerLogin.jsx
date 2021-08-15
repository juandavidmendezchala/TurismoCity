import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import "./TriggerLogin.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { logout, signInAuth0, register } from '../../store/actions/userActions'
import 'semantic-ui-css/semantic.min.css'
import { useAuth0 } from "@auth0/auth0-react";


const DropdownTriggerExample = () => {

    const { user, logout, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

    const userSingin = useSelector(state => state.userSignin)
    // const { userInfo } = user

    const dispatch = useDispatch()

    // const singout = () => {
    //     dispatch(logout())
    // }
    const userHarCode = { name: 'Hard', email: 'hard@gmail.com', id: 2 }

    console.log("local storage", localStorage.userInfo)

    // useEffect(() => {
    //     dispatch(register(user.given_name, user.email, user.family_name, "2021-08-13"))
    // }, [])

    const trigger = (
        <span className="SpanNameLogin">
            <Icon name='Localuser' /> Hola, {userHarCode.name}
        </span>
    )

    const options = [
        {
            key: 'Localuser',
            text: (
                <span>
                    Perfil de <strong>{userHarCode.name}</strong>
                </span>
            ),
            disabled: true,
        },
        { key: 'profile', text: 'Your Profile', href: "profile" },
        { key: 'sign-out', text: 'Sign Out', onClick: (() => logout()), href: '/' },
    ]

    return (
        <div>
            <Dropdown trigger={trigger} options={options} />
        </div>
    )
}

export default DropdownTriggerExample


