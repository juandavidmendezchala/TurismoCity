import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import Banner from "../Banner/Banner"
import 'semantic-ui-css/semantic.min.css'
import { logoutlocal } from "../../store/actions/userActions"
import { useAuth0 } from "@auth0/auth0-react"
import { useDispatch } from "react-redux"





const Navbar = () => {
    const dispatch = useDispatch();

    const { logout } = useAuth0();
    const handleSubmit = () => {
        logout();
        dispatch(logoutlocal())
    }

    return (
        <div className="NavBarContainer">
            <Link to="/" className="Links">Inicio</Link>
            <Link to="/Actividades" className="Links">Paquete de actividades</Link>
            <Link to="/profile" className="Links">Perfil</Link>
            {/* <button className="ButtonNavBarLogOut" onClick={handleSubmit}>log out</button> */}

        </div>
    )
}

export default Navbar
