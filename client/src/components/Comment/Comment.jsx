
import React from "react"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Comment.css'


export default function Comment({key,query,date,answers}) {

  return (
    <div>
       
        <div class="wrapperComment">
          <h1 className="commenth1">{query} 😅 - {date}</h1>
             <ul class="sessions">
                 {
                     answers.map(m => 
                        <li className="licomment">
                        <div class="time">{m.date} - {m.user.name}</div>
                          <p className="comentp">{m.query} 🤯🤯</p>
                        </li>
                    )
                 }
            </ul>
        </div>
      
        
    </div>
    

  )
}