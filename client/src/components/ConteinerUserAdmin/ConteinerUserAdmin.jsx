import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
//import UserActivities from '../NavBarSupplier/userActivities/userActivities';
import axios from "axios"
import { useState } from 'react';
//import "../NavBarSupplier/userActivities/userActivities.css"
//import "./ContanierUserAct.css"
import { BsThreeDots } from "react-icons/bs";
import UserSeller from '../userSeller/userSeller';
import {searchUserSeller} from '../../store/actions/searchUserSeller'

export const ContainerUserAdmin = ({ sidebar }) => {
  
    const user = useSelector((state) => state.reducerUserSeller.userSeller)
    const dispatch = useDispatch()
    console.log('lista de usuarios SELLER',user)

    // console.log(user)
    const [loading, setLoading] = useState(true)
    //const [data, setData] = useState()

    useEffect(() => {
        const dispatchDiet = () => dispatch(searchUserSeller())
        dispatchDiet();
      }, [])
    /*if (loading) {
        return (
            <p>Cargando ...</p>
        )
    }*/
    //console.log(sidebar)
    return (
        <div className={sidebar ? "sidebarAbierta" : "sidebarCerrada"}>
            <h2>Habilitar Usuario</h2>
            <div className="postsTable">
                <div className="namePicture">
                    <p>Imagen</p>
                    <p>Nombre</p>
                    <p>Email</p>
                </div>
                <div className="detailActivities">
                    <p>Estado de Usuario</p>
                </div>
                <div className='uploadStatus'>
                    <p>Cambiar Estado Usuario</p>
                    <p>Eliminar Usuario</p>
                    <p>Mas detalles</p>
                </div>
            </div>
            {
                user.map(e =>
                    <UserSeller id={e.id} name={e.name} date={e.birthday} state={e.state} type={e.type} email={e.email}/>
                )
            }
        </div>
    )
}

/**
  {
                data.map(e =>
                    <UserActivities activity={e.name} active={e.active} city={e.city} price={e.price} idPost={e.id} idUser={e.userId} images={e.images} />
                )
            }
 */