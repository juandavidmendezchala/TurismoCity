import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import "./Profile.css"
import { useAuth0 } from '@auth0/auth0-react'
import { userInfo } from '../TriggerLogin/TriggerLogin.jsx'

export default function Profile(props) {

    const userSingin = useSelector(state => state.userSignin)
    const { userInfo } = userSingin

    useEffect(() => {
        if(!userInfo) {
            props.history.push('/')
        }
    }, [])
    
    return (
        <div className="SuperContainerProfile">
            <div className="ContainerProfile">
                <p className="DatesProfile">Hola, {userInfo?.name}!</p>
                <h2 className="DescriptionProfile">Estamos por traerte nuevas funcionalidades para poder acompañarte mejor</h2>
                <h3 className="InformacionPersonal">Informacion Personal</h3>
                <p className="EmailProfile">Email: {userInfo?.email}</p>
                <p className="EmailProfile"> Fecha de nacimiento: </p>
            </div>
        </div>
    )
}