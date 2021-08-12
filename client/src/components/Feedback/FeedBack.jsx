
import React from "react"
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import "./feedback.css"


export default function FeedBack(){
  
   return(
    <div id="form-main">
    <div id="form-div">
      <form class="form" id="form1"> 
         <label htmlFor="">Comentario</label>
         <input className="feedback-input" type="text" />
         <label htmlFor="">Puntuacion</label>
         <input className="feedback-input" type="text" />
      </form>
    </div>
    </div>
       
   )
}