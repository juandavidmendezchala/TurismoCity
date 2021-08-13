import React, { useEffect } from 'react'
import * as AiIcons from "react-icons/ai"
import "./userActivities.css"
const UserActivities = ({ activity, active, price }) => {
    const handleOnClick = () => {

    }
    return (

        <div className="userActivitiesInfo">
            <p>{activity}</p>
            <div className="detailActivities">
                <p><span className="moneyDetail">$</span> {price}</p>
                <p>Estado de la publicacion: <span className={active ? "postActive" : "postDisabled"}> {active ? "Activa" : "Pausada"}</span></p>
            </div>
            <div >
                <span>Pausar Publicacion</span>
                <button ><AiIcons.AiOutlineClose /></button>
            </div>

        </div>
    )
}

export default UserActivities
