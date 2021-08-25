import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BsThreeDots, BsFillTrashFill } from "react-icons/bs";
import { CgPlayTrackNext } from "react-icons/cg"
import "./userActivities.css"

const UserActivities = ({ activity, active, price, idPost, idUser, images }) => {
    const [status, setStatus] = useState(active)
    const [deleted, setDeleted] = useState(false)
    
    const handleOnClickStatus = async (e) => {
        
    }
    const handleDelete = async () => {
       
    }

    return (
        <>
            {deleted ? <div className="returnDelete">
                Esta publicacion ha sido borrada de manera exitosa
            </div> : < div className="userActivitiesInfo" >
                <div className="namePicture">
                    <h3>{activity}</h3>
                    <img src={`${images[0]}`} height="60" alt="img" />
                    <span className="moneyDetail">${price}</span>
                </div>
                <div className="detailActivities">
                    <p><span className={status ? "postActive" : "postDisabled"}> {status ? "Activa" : "Pausada"}</span></p>
                </div>
                <div className='uploadStatus'>
                    <div>
                        <button onClick={handleOnClickStatus}><CgPlayTrackNext /></button>
                    </div>
                    <button onClick={handleDelete}><BsFillTrashFill /></button>
                    <a href={`/suppliers/post/`}><BsThreeDots /></a>
                </div>
            </div >}

        </>
    )
}

export default UserActivities