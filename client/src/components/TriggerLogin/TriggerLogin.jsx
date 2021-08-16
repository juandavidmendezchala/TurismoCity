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

<<<<<<< HEAD
    console.log(userSingin)

    useEffect(() => {
        dispatch(register(user.given_name, user.email, user.family_name, "2021-08-13"))
    }, [])

    const trigger = (
        <span className="SpanNameLogin">
            <Icon name='Localuser' /> Hola, {userSingin.userInfo.name}
        </span>
    )

    const options = [
        {
            key: 'Localuser',
            text: (
                <span>
                    Perfil de <strong>{userSingin.userInfo.name}</strong>
                </span>
            ),
            disabled: true,
        },
        { key: 'profile', text: 'Your Profile', href: "profile" },
        { key: 'sign-out', text: 'Sign Out', onClick: (() => logout()), href: '/' },
    ]
=======
    // useEffect(() => {
    //     dispatch(register(user.given_name, user.email, user.family_name, "2021-08-14"))
    // }, [])

    // const trigger = (
    //     <span className="SpanNameLogin">
    //         <Icon name='Localuser' /> Hola, {user.given_name}
    //     </span>
    // )

    // const options = [
    //     {
    //         key: 'Localuser',
    //         text: (
    //             <span>
    //                 Perfil de <strong>{user.given_name}</strong>
    //             </span>
    //         ),
    //         disabled: true,
    //     },
    //     { key: 'profile', text: 'Tu Perfil', href: '/profile' },
    //     { key: 'experiences', text: 'Tus actividades', href: '/yourActivities' },
    //     { key: 'experiences', text: 'Ofrecé experiencias', href: '/experiences' },
    //     { key: 'sign-out', text: 'Sign Out', onClick: (() => logout()), href: '/' },
    // ]
>>>>>>> a49c5b504077e68d6c0ee06510b99fd424682fe8

    return (
        <div className='triggerClass'>
            {/* <Dropdown trigger={trigger} options={options} /> */}
        </div>
    )
}

export default DropdownTriggerExample


