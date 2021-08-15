import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import Banner from "../Banner/Banner"
import 'semantic-ui-css/semantic.min.css'
import { useAuth0 } from "@auth0/auth0-react"
import {useSelector} from 'react-redux';




const Navbar = () => {
    const { logout } = useAuth0()
    const stateComponent = useSelector(state => state.reducersActivities.stateComponent)

    return (
        <div>
        {stateComponent === true ? (
        <div className="NavBarContainer">
            <Link to="/" className="Links">Inicio</Link>
            <Link to="/Actividades" className="Links">Paquete de actividades</Link>

            <Link to="/profile" className="Links">Perfil</Link>
            <button className="ButtonNavBarLogOut" onClick={logout}>log out</button>
           </div> ) : null}
        </div>
    )
}

export default Navbar
