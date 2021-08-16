import './SubMenuActivities.css'
import React from "react"
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from "react-router-dom"


export default function SubMenuActivities(props){
   const [stateButton, setStateButton] = useState(
       
     'anteriores'
   ) 
   //console.log('hola',props.window.location.search)
  
   function buttonMenu(str) {
      setStateButton (str)
   }
   return(
     <div>
      <nav className="navSubMenu">
     
	   <a className={stateButton === 'anteriores'?('anteriores'):null} onClick={()=>buttonMenu('anteriores')} href="/activities">Anteriores</a>
	   <a className={stateButton === 'proximos'?('proximos'):null} onClick={()=>buttonMenu('proximos')} href="activities/next">Proximos</a>
	 
	  <div class="animation start-home"></div>
       </nav>
     
     </div>
       
   )
}