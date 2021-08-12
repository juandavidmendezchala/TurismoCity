import './Pack.css'
import React from "react"
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'


export default function Pack(){
   
   return(
    
    <div class="cardcontainer">
     
      <div class="card">
        <div class="cardcontent">
          <img className="imagenCard" src="https://www.serargentino.com/public/images/2020/05/Jujuy-para-juje%C3%B1os-773x458.jpeg" alt="nada" />
          <h3 class="cardheader">JUJUY</h3>
          <p class="cardinfo">18 de Agosto de 2021 - 25 de Agosto de 2021</p>
          <div className="divActividad">
            <img className="imgActividad" src="https://agathauraviajes.tur.ar/wp-content/uploads/2020/01/Salinas-Grandes.jpg" alt="" />
            <label className="labelActividad" htmlFor="">Las Salinas Grandes</label>
          </div>
          <div className="divActividad">
            <img className="imgActividad" src="https://farm4.staticflickr.com/3773/14074819238_6c00f7f002_o.jpg" alt="" />
            <label className="labelActividad" htmlFor="">Cerro de Siete Colores</label>
          </div>
          <Link to={`/feedBack/1`}>
          <button class="cardbutton">Feedback</button>
          </Link>
         
        </div>
      </div>
      <div class="card">
        <div class="cardcontent">
          <h3 class="cardheader">Card 3</h3>
          <p class="card__info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button class="cardbutton">Feedback</button>
        </div>
      </div>
    </div>
  
       
   )
}