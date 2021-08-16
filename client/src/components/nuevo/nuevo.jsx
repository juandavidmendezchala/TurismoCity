import './nuevo.css'
import React from "react"
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Pack from '../Pack/Pack'

export default function Nuevo(){
   const dispatch = useDispatch()
   const user = useSelector(state => state.userSignin.userInfo)
   return(
       <div>
          <p>MIS PAQUETES</p>
          <p>ID: {user.id}</p>
          <p>NAME: {user.name}</p>
          <Pack />
       </div>
       
   )
}