import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import Banner from "../Banner/Banner"
import 'semantic-ui-css/semantic.min.css'
import { useSelector } from "react-redux";


const Navbar = () => {

    const stateComponent = useSelector(state => state.reducersActivities.stateComponent)

    return (
        <div>
            {stateComponent === true ? (
                <div className="NavBarContainer">
                    <Link to="/" className="Links">Inicio</Link>
                    <Link to="/Actividades" className="Links">Paquete de actividades</Link>
                    <Link to="/Miagenda" className="Links">Mi Agenda</Link>
                </div>
            ) : null}
        </div>
    )
}

export default Navbar
