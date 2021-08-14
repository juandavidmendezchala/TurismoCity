import './Pack.css'
import React from "react"
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'


export default function Pack(){
   
   return(
    
    <div class="cardcontainerNadia">
     
      <div class="cardnadia">
        <div class="cardcontentNadia">
          <img className="imagenCardNadia" src="https://www.serargentino.com/public/images/2020/05/Jujuy-para-juje%C3%B1os-773x458.jpeg" alt="nada" />
          <h3 class="cardNadiaheader">JUJUY</h3>
          <p class="cardNadiainfo">18 de Agosto de 2021 - 25 de Agosto de 2021</p>
          <div className="divActividadNadia">
            <img className="imagenActividadNadia" src="https://agathauraviajes.tur.ar/wp-content/uploads/2020/01/Salinas-Grandes.jpg" alt="" />
            <label className="labelActividadNadia" htmlFor="">Las Salinas Grandes</label>
          </div>
          <div className="divActividadNadia">
            <img className="imagenActividadNadia" src="https://farm4.staticflickr.com/3773/14074819238_6c00f7f002_o.jpg" alt="" />
            <label className="labelActividadNadia" htmlFor="">Cerro de Siete Colores</label>
          </div>
          <Link to={`/feedBack/1`}>
          <button class="cardNadiabutton">Feedback</button>
          </Link>
         
        </div>
      </div>
     
    </div>
  
       
   )
}