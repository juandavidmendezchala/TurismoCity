import './MyActivities.css'
import React from "react"
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SubMenuActivities from '../SubMenuActivities/SubMenuActivities'
import FavoritesActivities from '../FavoritesActivities/FavoritesActivities'

import FeedBack from '../Feedback/FeedBack'
import TarjetaActividad from '../TarjetaActividad/TarjetaActividad'

import {searchUserActivities} from '../../store/actions/searchUserActivities'


export default function MyActivities(props){
   const activitie = useSelector(state => state.reducerMyActivities.activityPurchase)
   const dispach = useDispatch();

   useEffect(() => {
    const dispatchActivitie = () => dispach(searchUserActivities("2"))
    dispatchActivitie();
}, [])
  
   return(
     <div>
        My Activities 
        <SubMenuActivities/>
        <div className="contenCardSub">
           {activitie.map((c) => 
                     <TarjetaActividad 
                        key={c.id}
                        id = {c.id}
                        idAct = {c.activityId}
                        description ={c.activity.description}
                        name ={c.activity.name}
                        images={c.activity.images}
                        
                     />
                  )}
            
        </div>
        
     
     </div>
       
   )
}

/*
   <FavoritesActivities sidebar={props.sidebar}/>
*/