import React, { useEffect } from 'react'
import * as AiIcons from "react-icons/ai"
import "./userActivities.css"
const UserActivities = ({ activity, active, city }) => {

    return (

        <div className="userActivitiesInfo">
            <p>{activity}</p>
            <p>Esta activo: {active ? "Si" : "No"}</p>
            <div>
                <span>Pausar Publicacion</span>
                <button ><AiIcons.AiOutlineClose /></button>
            </div>

        </div>
    )
}

export default UserActivities
