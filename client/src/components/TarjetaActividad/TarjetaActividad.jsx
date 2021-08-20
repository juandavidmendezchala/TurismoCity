import './TarjetaActividad.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeedback, getAllCommentsOfUser } from '../../store/actions/feedBack'
import swal from 'sweetalert'

export default function TarjetaActividad(props) {
    const [state, setState] = useState({
        commentary: '',
        score: ''
    })
    const[comment, setComment] = useState({})
    
    const userId = useSelector(state => state.userSignin.userInfo.id)
    const commentsOfUser = useSelector(state => state.reducerFeedBack.commentsOfUser)
    const dispatch = useDispatch()

  
   
    useEffect(async() => {
        await dispatch(getAllCommentsOfUser(userId))
        console.log('ESTE ES EL VALOR QUE BUSCO',commentsOfUser)
    }, [])

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


                                <img className="imagenFuera" src={props.images} alt="otra imagen" />

                            </div>

                            <div class="card-front__bt">
                                <p class="card-front__text-view card-front__text-view--camping">
                                    {props.name}
                                </p>
                            </div>
                        </div>
                        <div class="card-back">
                            <img className="imagenDentro" src={props.images} alt="no esta la imagen" />
                        </div>
                    </div>
                </div>

                <div class="inside-page">
                    <div class="inside-page__container">
                        <h3 class="inside-page__heading inside-page__heading--camping">
                            FeedBack
                        </h3>
                        {commentsOfUser?.find(comment => comment.activityId === props.idAct) ?
                        <div>
                            <strong>Tu comentario sobre esta actividad:</strong>
                            <div className='commentaryStyle'>{commentsOfUser[0].commentary}</div>
                            <div className='commentaryStyle'><strong>Puntuación: </strong>{ commentsOfUser[0].score}&#11088;</div>
                        </div>
                        
                        : <div>
                        <p class="inside-page__text">

                            Comentario:
                            <textarea name="commentary" value={state.commentary} onChange={handlerChange} id="" rows="1"></textarea>
                            Puntuacion:
                            <input name="score" value={state.score} onChange={handlerChange} type="number" />
                        </p>

                        <button class="inside-page__btn inside-page__btn--camping" onClick={() => addFeed(userId, props.idAct)}>Aceptar</button>
                    </div>}
                            

                        

                    </div>
                </div>
            </div>
        </div>


    )
}