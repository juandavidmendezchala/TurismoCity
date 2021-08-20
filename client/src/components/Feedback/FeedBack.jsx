import './feed.css'
import React from "react"
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import swal from 'sweetalert'


export default function FeedBack(){

   const mostrarAlerta = () => {
     swal({
       title: "Registrado!",
       text: "Se guardo correctamente tu comentario",
       icon: "success",
       button: "Aceptar"
     })
   }
   return(
     <div className="divFeedBack">
        <label htmlFor="" className="tituloFedBack">FeedBack</label>
       <form action="" className="formFeedBack">
       <div className="divInpurFeed">
         <label className="labelFeed" htmlFor="">Comentario</label>
         <textarea className="inputFeed-css" name="" id="" cols="30" rows="10"></textarea>
         
       </div>
       <div className="divInpurFeed">
         <label className="labelFeed" htmlFor="">Puntuacion</label>
         <input className="inputFeed-css" type="number" min="0" max="10"/>
       </div>
       <div className="divInpurFeed">
         <input onClick={() => mostrarAlerta()} className="buttonFeed" value="Guardar" />
       </div>
       </form>
     
     </div>
       
   )
}