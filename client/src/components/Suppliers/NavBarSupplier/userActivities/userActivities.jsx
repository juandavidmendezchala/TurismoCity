import React from 'react'
import axios from 'axios'
import "./userActivities.css"
import { useState } from 'react'
const UserActivities = ({ activity, active, price, idPost, idUser, images }) => {
    const [status, setStatus] = useState(active)
    console.log(typeof status)
    const handleOnClick = async (e) => {
        setStatus(!status)
        await axios.put(`http://localhost:3001/suppliers/${idUser}/${idPost}/${!status}`)
    }
    return (

        <div className="userActivitiesInfo">
            <div className="namePicture">
                <h3>{activity}</h3>
                <img src={`${images[0]}`} height="60" alt="img" />
                <p>Precio publicado<span className="moneyDetail">$</span> {price}</p>
            </div>
            <div className="detailActivities">
                <p>Estado de la publicacion: <span className={status ? "postActive" : "postDisabled"}> {status ? "Activa" : "Pausada"}</span></p>
            </div>
            <div className='uploadStatus'>
                <span>Pausar Publicacion</span>
                <button onClick={handleOnClick}>x</button>
            </div>
        </div>

    )
}

export default UserActivities
