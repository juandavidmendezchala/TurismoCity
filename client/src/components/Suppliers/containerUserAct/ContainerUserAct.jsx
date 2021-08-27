import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import UserActivities from '../NavBarSupplier/userActivities/userActivities';
import axios from "axios"
import { useState } from 'react';
import "../NavBarSupplier/userActivities/userActivities.css"
import "./ContanierUserAct.css"
import { BsThreeDots } from "react-icons/bs";
import { REACT_APP_API } from '../../../store/Consts/Consts';
import { useHistory } from 'react-router-dom';

export const ContainerUserAct = ({ sidebar }) => {
    const dispatch = useDispatch
    const user = useSelector((state) => state.userSignin.userInfo.id)

    const userSingin = useSelector(state => state.userSignin)
    const { userInfo } = userSingin

    const history = useHistory()

    useEffect(() => {
        if(userInfo?.isAdmin === false) {
            history.push('/')
        }
    }, [])    

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(async () => {
        const actividades = await axios.get(`${REACT_APP_API}/suppliers/${user}`);
        console.log('ACTIVIDADES.DATA ------>',actividades.data)
        setData(actividades.data)
        setLoading(false)
    }, [])
    if (loading) {
        return (
            <p>Cargando ...</p>
            )
        }
        
    console.log('DATA -------> :',data)
    console.log(sidebar)
    return (
        <div className={sidebar ? "sidebarAbierta" : "sidebarCerrada"}>
            <h2>Actividades publicadas</h2>
            <div className="postsTable">
                <div className="namePicture">
                    <p>Titulo</p>
                    <p>Imagen</p>
                    <p>Precio</p>
                </div>
                <div className="detailActivities">
                    <p>Estado de la publicacion</p>
                </div>
                <div className='uploadStatus'>
                    <p>Cambiar estado de la publicacion</p>
                    <p>Eliminar publicacion</p>
                    <p>Mas detalles</p>
                </div>
            </div>
            {
                data.map(e =>
                    <UserActivities activity={e.name} active={e.active} city={e.city} price={e.price} idPost={e.id} idUser={e.userId} images={e.images} country={e.country} description={e.description} />
                )
            }
        </div>
    )
}
