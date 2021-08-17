import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { DetailPostSupplier } from '../../detail post supplier/DetailPostSupplier';
import { BsThreeDots, BsFillTrashFill } from "react-icons/bs";
import { CgPlayTrackNext } from "react-icons/cg"
import "./userActivities.css"

const UserActivities = ({ activity, active, price, idPost, idUser, images, city, id, userId, country, description }) => {
    const [status, setStatus] = useState(active)
    const [deleted, setDeleted] = useState(false)
    const [detail, setDetail] = useState(false)
    const handleOnClickStatus = async (e) => {
        setStatus(!status)
        await axios.put(`http://localhost:3001/suppliers/${idUser}/${idPost}/${!status}`)
    }
    const handleOnClickDetail = () => {
        setDetail(!detail)
    }
    const handleDelete = async () => {
        let eliminar = window.confirm("Estas seguro de borrar esta publicacion? esta accion es PERMANENTE")
        if (eliminar) {
            setDeleted(true)
            await axios.delete(`http://localhost:3001/suppliers/${idUser}/${idPost}`)

        } else {
            return
        }
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
                    <button onClick={handleOnClickDetail}><BsThreeDots /></button>
                </div>
            </div >}
            <div className={detail ? "detailActivo" : "detailInactivo"}>
                <DetailPostSupplier activity={activity} active={active} city={city} price={price} idPost={idPost} idUser={userId} images={images} country={country} description={description} />
            </div>

        </>
    )
}

export default UserActivities
