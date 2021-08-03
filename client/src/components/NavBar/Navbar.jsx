import React from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="NavBarContainer">
            <Link to="/" className="Links">Inicio</Link>
            <Link to="/Actividades" className="Links">Paquete de actividades</Link>
            <Link to="/Miagenda" className="Links">Mi Agenda</Link>
        </div>
    )
}

export default Navbar