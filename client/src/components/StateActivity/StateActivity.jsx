import React from 'react'
//import { useState } from 'react'
import axios from 'axios'
import { BsThreeDots, BsFillTrashFill } from "react-icons/bs";
import { CgPlayTrackNext } from "react-icons/cg"
import ContactUs from '../ContactUs/ContactUs';
import {useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
//import "./userActivities.css"
import {searchUserEmail} from '../../store/actions/searchUserEmail'

const StateActivity = ({id,name,description,date,price,places,duration,initialTime,images,country,city,estado}) => {
    const [status, setStatus] = useState(estado)
    const [deleted, setDeleted] = useState(false)
    const [state, setState] = useState({
        updateState: ''
    })
     
    const dispatch = useDispatch()
    console.log('estadi',state.updateState)
    const userEmail = useSelector(store => store.reducerUserSeller.userUpdate);
    console.log('datos del email', userEmail)
    const handleOnClickStatus = async (e) => {  
        setStatus(!status)
        //await axios.put(`http://localhost:3001/suppliers/${idUser}/${idPost}/${!status}`)
    }

    const cambiarEstado = async (s) => {
        setStatus(!status)
        await axios.put(`http://localhost:3001/suppliers/1/${id}/${s}`)
    }
    const handleDelete = async () => {
        /*let eliminar = window.confirm("Estas seguro de borrar esta publicacion? esta accion es PERMANENTE")
        if (eliminar) {
            setDeleted(true)
            await axios.delete(`http://localhost:3001/suppliers/${idUser}/${idPost}`)

        } else {
            return
        }*/
    }

    function handlerChange(e) {
        setState({
            ...state,
            //le paso la propiedad que cambie
            [e.target.name] : e.target.value //cuando name no es el nombre se usa corchtes
           })
        if (e.target.value === 'TRUE') {
            //await axios.put(`http://localhost:3001/suppliers/${idUser}/${idPost}/TRUE`)
            //alert('aprobada')
            setStatus('TRUE')
            cambiarEstado('TRUE')
        }
        if (e.target.value === 'pendiente'){
           //alert('pendiente')
           dispatch(searchUserEmail(id))
        } 
        if (e.target.value === 'FALSE')
        {
            //setStatus('FALSE')
            setStatus('FALSE')
            cambiarEstado('FALSE')
        } 
    }

    return (
        <>
            {deleted ? <div className="returnDelete">
                Esta publicacion ha sido borrada de manera exitosa
            </div> : < div className="userActivitiesInfo" >
                <div className="namePicture">
                    <h3>{name}</h3>
                    <img src={`${images[0]}`} height="60" alt="img" />
                    <span className="moneyDetail">${price}</span>
                </div>
                <div className="detailActivities">
                <p><span className={status ? "postActive" : "postDisabled"}> {status ? "Activada" : "Cancelada"}</span></p>
                </div>
                <div className='uploadStatus'>
                    <div>
                     <select placeholder="Select" name="updateState" onChange={handlerChange}>
                       <option  value=""> Seleccione Opcion </option>
                       <option  value="TRUE">Aprobada</option>
                       <option  value="pendiente">Pendiente</option>
                       <option  value="FALSE">Cancelada</option>
                      </select>
                    </div>
                    <p></p>
                    <a href={`/suppliers/post/`}><BsThreeDots /></a>
                </div>
            </div >}
            {
              state.updateState === 'pendiente'? (
                  <ContactUs  idAct={id}
                    email={userEmail.email}
                    name={userEmail.name}></ContactUs>
              ):null
            }

        </>
    )
}

export default StateActivity