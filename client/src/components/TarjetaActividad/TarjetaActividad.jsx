import './TarjetaActividad.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeedback } from '../../store/actions/feedBack'
import swal from 'sweetalert'

export default function TarjetaActividad(props) {
    const [state, setState] = useState({
        commentary: '',
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

    function handlerChange(e) { //se encarga de actualizar el estado
        //crea nuevo estado
        //setea el estado previo
        setState({
            ...state,
            //le paso la propiedad que cambie
            [e.target.name]: e.target.value //cuando name no es el nombre se usa corchtes
        })
    }

    function addFeed(idUser, idAct) {
        const { commentary, score } = state
        //console.log('se guardo', idUser)
        //console.log('este es la activ', idAct)
        //idUser, idAct, commentary, score
        dispatch(addFeedback(idUser, idAct, commentary, score))
        mostrarAlerta()
    }
    return (
        <div>
            <div class="card">
                <div class="flip-card">
                    <div class="flip-card__container">
                        <div class="card-front">
                            <div class="card-front__tp card-front__tp--camping">


                                <img className="imagenFuera" src={props.images[0]} alt="otra imagen" />

                            </div>

                            <div class="card-front__bt">
                                <p class="card-front__text-view card-front__text-view--camping">
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
                        <h3 class="inside-page__heading inside-page__heading--camping">
                            FeedBack
                        </h3>

                        <p class="inside-page__text">

                            Comentario:
                            <textarea name="commentary" onChange={handlerChange} id="" rows="2"></textarea>
                            Puntuacion:
                            <input name="score" onChange={handlerChange} type="number" />
                        </p>

                        <button class="inside-page__btn inside-page__btn--camping" onClick={() => addFeed(2, props.idAct)}>Aceptar</button>
                    </div>
                </div>
            </div>
        </div>


    )
}