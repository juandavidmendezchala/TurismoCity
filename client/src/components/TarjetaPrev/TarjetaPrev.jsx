import './TarjetaPrev.css'
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addFeedback} from '../../store/actions/feedBack'
import swal from 'sweetalert'

export default function TarjetaPrev(props) {
    const [state, setState] = useState({
        commentary:'',
        score: ''
    })
    const dispatch = useDispatch()

    const mostrarAlerta = () => {
        swal({
          title: "Registrado!",
          text: "Se guardo correctamente tu comentario",
          icon: "success",
          button: "Aceptar"
        })
      }

    function handlerChange(e){ //se encarga de actualizar el estado
        //crea nuevo estado
        //setea el estado previo
        setState({
          ...state,
          //le paso la propiedad que cambie
          [e.target.name] : e.target.value //cuando name no es el nombre se usa corchtes
         })
     }

     function addFeed(idUser, idAct) {
        const {commentary, score} = state
        //console.log('se guardo', idUser)
        //console.log('este es la activ', idAct)
        //idUser, idAct, commentary, score
        dispatch(addFeedback(idUser, idAct,commentary,score))
        mostrarAlerta()
     }
    return(
        <div>         
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--beach">
                              
                                 <img className="imagenFuera" src={props.images[0]} alt="otra imagen" />

                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--beach">
                                       
                                        {props.name}
                                    </p>
                                </div>
                            </div>
                            <div class="card-back">
                                <img className="imagenDentro" src={props.images[0]} alt="no esta la imagen" />
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--beach">
                                Activity Detail
                            </h3>
                            
                            <p class="inside-page__text"> 
                                City: {props.city}
                            </p>
                            <p class="inside-page__text"> 
                               Duration: {props. duration}
                            </p>
                            <p class="inside-page__text"> 
                               InitialTime: {props. initialTime}
                            </p>
                            <p class="inside-page__text"> 
                                price: {props. price}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
       
                
    )
}