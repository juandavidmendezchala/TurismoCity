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
import { REACT_APP_API } from '../../store/Consts/Consts';

const StateActivity = ({id,name,description,date,price,places,duration,initialTime,images,country,city,estado,estadoAdmin}) => {
    const [status, setStatus] = useState(estadoAdmin)
    const [deleted, setDeleted] = useState(false)
    const [state, setState] = useState({
        updateState: ''
    })
     
    const dispatch = useDispatch()
    console.log('estadi',state.updateState)
    const userEmail = useSelector(store => store.reducerUserSeller.userUpdate);
    console.log('datos del email', userEmail)

    const cambiarEstado = async (s) => {
        await axios.put(`${REACT_APP_API}/activity/admin/${id}/${s}`)
    }
    const handleDelete = async () => {
        /*let eliminar = window.confirm("Estas seguro de borrar esta publicacion? esta accion es PERMANENTE")
        if (eliminar) {
            setDeleted(true)
            await axios.delete(`http://local*host:3001/suppliers/${idUser}/${idPost}`)

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
        if (e.target.value === 'ACE') {
            
            setStatus('ACE')
            cambiarEstado('ACE')
        }
        if (e.target.value === 'PEN'){
           //alert('pendiente')
           setStatus('PEN')
           cambiarEstado('PEN')
           dispatch(searchUserEmail(id))
        } 
        if (e.target.value === 'CAN')
        {
            //setStatus('FALSE')
            setStatus('CAN')
            cambiarEstado('CAN')
        } 
    }

    return (
        <>
            {deleted ? <div className="returnDelete">
                Esta publicacion ha sido borrada de manera exitosa
            </div> : < div className="userActivitiesInfo" >
                <div className="namePicture">
                    <h3>{name}</h3>
                    <img src={`${images}`} height="60" alt="img" />
                    <span className="moneyDetail">${price}</span>
                </div>
                <div className="detailActivities">
                <p><span className={status==='ACE' ? "postActive" :(status==='CAN'?"postDisabled":"postPendig")}> {status==='ACE' ? "Activada" : (status==='CAN'?"Cancelada":"Pendiente")}</span></p>
                </div>
                <div className='uploadStatus'>
                    <div>
                     <select placeholder="Select" name="updateState" onChange={(e)=>handlerChange(e)}>
                       <option  value=""> Seleccione Opcion </option>
                       <option  value="ACE">Aprobada</option>
                       <option  value="PEN">Pendiente</option>
                       <option  value="CAN">Cancelada</option>
                      </select>
                    </div>
                    <p></p>
                    <a href={`/suppliers/info`}><BsThreeDots /></a>
                </div>
            </div >}
            {
              state.updateState === 'PEN'? (
                  <ContactUs  idAct={id}
                    email={userEmail.email}
                    name={userEmail.name}></ContactUs>
              ):null
            }

        </>
    )
}

export default StateActivity