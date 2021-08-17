import './ActivitiesPrev.css'
import React from "react"
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SubMenuActivities from '../SubMenuActivities/SubMenuActivities'
//import {searchUserActivities} from '../../store/actions/searchUserActivities'
import TarjetaPrev from '../TarjetaPrev/TarjetaPrev'
import {searchUserActivitiePrev} from '../../store/actions/searchActivitiePrev'

export default function ActivitiesPrev() {
    const activitie = useSelector(state => state.reducerActivitiesPrev.activityPurchasePrev)
   const dispach = useDispatch();

   useEffect(() => {
    const dispatchActivitie = () => dispach(searchUserActivitiePrev("2"))
    dispatchActivitie();
}, [])
   return(
       <div>
           <h1>Actividades Previas</h1>
           <SubMenuActivities/>
        <div className="contenCardSub">
           {activitie.map((c) => 
                     <TarjetaPrev
                        key={c.id}
                        id = {c.id}
                        idAct = {c.activityId}
                        description ={c.activity.description}
                        name ={c.activity.name}
                        images={c.activity.images}
                        city={c.activity.city}
                        country={c.activity.country}
                        duration={c.activity.duration}
                        initialTime={c.activity.initialTime}
                        price={c.activity.price}
                     />
                  )}
            
        </div>
       </div>
   )
}