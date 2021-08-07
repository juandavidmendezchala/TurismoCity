import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {

    const userSingin = useSelector(state => state.userSignin)
    const {userInfo} = userSingin

    return(
        <div>
            <h4>Nombre</h4>
            <p>{userInfo.name}</p>
            <h4>Correo Electronico</h4>
            <p>{userInfo.email}</p>
            <h4>Fecha de nacimiento</h4>
            <p>{userInfo.birthdate}</p>
        </div>
    )
}