
import React from "react"
//import Popup from 'reactjs-popup';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Comment.css'
import {deleteQuestion} from '../../store/actions/questionAction'
import {getQuestion} from '../../store/actions/questionAction'
import {postAnswer} from '../../store/actions/answerAction'
//import { FaBeer } from "react-icons/all-files/fa/FaBeer";
import * as BIcons from "react-icons/bi";
//import PopUpResp from "../PopUpResp/PopUpResp";
//import Popup from 'react-popup'
//import * as BIcons from "react-icons/bi";
import * as IconName from "react-icons/bs";
//BsChatDots
import Swal from 'sweetalert2'
export default function Comment({key,idQuestion,query,date,answers,userId, userLogeo, userActPres, idAct}) {

  const [isClient, setIsClient] = useState(false)
  const [isProv, setIsProv] = useState(false)
  const dispatch = useDispatch();
  const userSingin = useSelector(state => state.userSignin.userInfo.id)

  useEffect(() => {

     if (userId === userLogeo){
        // si es el cliente
        setIsClient(true)
     }

     if (userActPres === userLogeo){
       // si es el Proveedor de Actividad
        setIsProv(true)
     }
  }, [])
   
  function eliminar (idQuestion) {
    dispatch(deleteQuestion(idQuestion,idAct))
    dispatch(getQuestion(idAct))
    alert('se elimino')
    window.location.reload(false);
    //Popup.alert('I am alert, nice to meet you');

  }


  function responder(date,idQuestion, idUsuario){
    Swal.fire({
      title: 'Respuesta',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      showLoaderOnConfirm: true,
      preConfirm: (rta) => {
        console.log('el dia es',date, 'el id question',idQuestion, 'el usuario', idUsuario)
        dispatch(postAnswer(rta,date,idQuestion,idUsuario))
        window.location.reload(false);
        //uery, date, questionId, userId
      },
      //allowOutsideClick: () => !Swal.isLoading()
    });
     
  
    //alert("responder")
  }
  return (
    <div>
       
        <div class="wrapperComment">
          {
            isClient?<button className="botonComment" onClick={() =>eliminar(idQuestion)}><IconName.BsFillTrashFill/></button>:null
          }
          {
            isClient? <button onClick={() => responder('2021-08-24',idQuestion,userSingin)}><IconName.BsChatFill/></button>
             : null
          }
          {

            isProv? <button onClick={() => responder('2021-08-24',idQuestion,userSingin)}><IconName.BsChatFill /> </button>
            : null
          }

      

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