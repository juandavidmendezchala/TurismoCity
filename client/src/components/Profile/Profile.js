import React from 'react'
import { useSelector } from 'react-redux'
import "./Profile.css"

export default function Profile() {

    const userSingin = useSelector(state => state.userSignin)
    const { userInfo } = userSingin

    return (
        <div className="SuperContainerProfile">
            <div className="ContainerProfile">
                <p className="DatesProfile">Hola, {userInfo.name}!</p>
                <h2 className="DescriptionProfile">Estamos por traerte nuevas funcionalidades para poder acompañarte mejor</h2>
                <h3 className="InformacionPersonal">Informacion Personal</h3>
                <p className="EmailProfile">Email: {userInfo.email}</p>
                <p className="EmailProfile"> Fecha de nacimiento: {userInfo.birthdate}</p>
            </div>
        </div>
    )
}