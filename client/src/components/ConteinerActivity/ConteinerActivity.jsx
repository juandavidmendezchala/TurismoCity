import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
//import UserActivities from '../NavBarSupplier/userActivities/userActivities';
import UserActivities from '../Suppliers/NavBarSupplier/userActivities/userActivities';
import axios from "axios"
import { useState } from 'react';
//import "../NavBarSupplier/userActivities/userActivities.css"
import "./ConteinerActivity.css"
import { BsThreeDots } from "react-icons/bs";
import UserSeller from '../userSeller/userSeller';
//import {searchUserSeller} from '../../store/actions/searchUserSeller'
import {getActivities} from '../../store/actions/activityActions'
import {getActivityAdmin} from '../../store/actions/getActivityAdmin'
import ActivityCard from '../ActivityCard/ActivityCard';
import StateActivity from '../StateActivity/StateActivity';
export const ContainerActivity = ({ sidebar }) => {
  
    //const activity = useSelector((state) => state.activities.activities)
    const dispatch = useDispatch()
    //console.log('lista NUEVA ACTIVIDADES',activity[0].id)
    const Activities = useSelector(store => store.activities);
    const adminActivity = useSelector(store => store.reducerUserSeller. userActivity);
    //reducerUserSeller. userActivity
    console.log('esta es nuea', adminActivity)
    const { activities, loading, error } = Activities;
    console.log('esto trae',activities)
    //const [loading, setLoading] = useState(true)
    //const [data, setData] = useState()

    useEffect(() => {
        const dispatchDiet = () => dispatch(getActivityAdmin())
        dispatchDiet();
      }, [])
    /*if (loading) {
        return (
            <p>Cargando ...</p>
        )
    }*/
    //console.log(sidebar)
    return (
        <div className="correrMenu">
            <h2>Habilitar Actividades</h2>
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
                    <p></p>
                    <p>Mas detalles</p>
                </div>
            </div>
            
                 {
                    adminActivity?.map(a => 
                        <StateActivity key={a.id}
                    id={a.id}
                    name={a.name}
                    description={a.description}
                    date={a.date}
                    price={a.price}
                    places={a.places}
                    duration={a.duration}
                    initialTime={a.initialTime}
                    images={a.images}
                    country={a.country}
                    city={a.city}
                    estado = {a.active}
                    estadoAdmin = {a.estadoAdmin}
                    >
                        
                    </StateActivity>
                        )
                    

                }
            
        </div>
    )
    
}

/**
 * 
 *  
 */
