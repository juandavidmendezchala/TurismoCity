import './TarjetaActividad.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeedback, getAllCommentsOfUser, removeFeedback } from '../../store/actions/feedBack'
import swal from 'sweetalert'
import './Estrellitas.css';
import { useHistory } from 'react-router-dom'

export default function TarjetaActividad(props) {
    const [state, setState] = useState({
        commentary: '',
        score: ''
    })
    const [comment, setComment] = useState({})

    const userId = useSelector(state => state.userSignin.userInfo.id)
    const commentsOfUser = useSelector(state => state.reducerFeedBack.commentsOfUser)
    const dispatch = useDispatch()
    const history=useHistory();
    

    useEffect(async () => {
        await dispatch(getAllCommentsOfUser(userId))
        console.log('ESTE ES EL VALOR QUE BUSCO', commentsOfUser)
    }, [])

    const mostrarAlerta = (title,text) => {
        swal({
            title: title,
            text: text,
            icon: "success",
            button: "Aceptar"
        })
        .then(value =>{
            window.location.reload(false);
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

    async function addFeed(idUser, idAct) {
        const { commentary, score } = state
        //console.log('se guardo', idUser)
        //console.log('este es la activ', idAct)
        //idUser, idAct, commentary, score
        dispatch(addFeedback(idUser, idAct, commentary, score))
        await mostrarAlerta("Registrado!","Se guardo correctamente tu comentario")
        
    }
    function removeFeed(id) {
        console.log('ESTE ES EL ID DEL COMENTARIO',id)
        dispatch(removeFeedback(id))
        //await mostrarAlerta2("Este comentario va a eliminarse","Está seguro que quiere eliminar su comentario?")
        swal({
            title: "Estás seguro?",
            text: "Una vez borrado este comentario, no podrás volver a recuperarlo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Tu comentario fue borrado con éxito!", {
                icon: "success",
              })
              .then(value => window.location.reload(false))
            } else {
              swal("Tu comentario está a salvo!");
            }
          });
        
        //await mostrarAlerta("Borrado!","Su comentario fue borrado exitosamente")
    }

    return (
        <div style={{ margin: 15 }}>
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
                        {console.log('ESTE ES EL ID DE LA ACTIVIDAD', props.idAct)}
                        {commentsOfUser?.find(comment => comment.activityId === props.idAct) ?
                            <div>

                                <strong className='commentaryDescrip'>Tu comentario sobre esta actividad:</strong>
                                <div className='commentaryStyle'>{commentsOfUser[commentsOfUser?.findIndex(comment => comment.activityId === props.idAct)].commentary}</div>
                                <strong className='puntacionStyle'>Puntuación: <label className={parseInt(commentsOfUser[0].score) >= 1 ? 'estrellitaActiva' : 'EstrellitasGrises'}  >★</label>
                                    <label className={parseInt(commentsOfUser[commentsOfUser?.findIndex(comment => comment.activityId === props.idAct)].score) >= 2 ? 'estrellitaActiva' : 'EstrellitasGrises'}  >★</label>
                                    <label className={parseInt(commentsOfUser[commentsOfUser?.findIndex(comment => comment.activityId === props.idAct)].score) >= 3 ? 'estrellitaActiva' : 'EstrellitasGrises'}  >★</label>
                                    <label className={parseInt(commentsOfUser[commentsOfUser?.findIndex(comment => comment.activityId === props.idAct)].score) >= 4 ? 'estrellitaActiva' : 'EstrellitasGrises'}  >★</label>
                                    <label className={parseInt(commentsOfUser[commentsOfUser?.findIndex(comment => comment.activityId === props.idAct)].score) === 5 ? 'estrellitaActiva' : 'EstrellitasGrises'} >★</label>
                                </strong>
                                <button className="inside-page__btn inside-page__btn--camping" onClick={() => removeFeed(commentsOfUser[commentsOfUser?.findIndex(comment => comment.activityId === props.idAct)].id)}>Borrar comentario</button>
                            </div>

                            : <div>
                                <p class="inside-page__text">
                                    <p className='text_important'>Es muy importante para otros usuarios conocer
                                        cómo fue tu experiencia! Compártela con nosotros!</p>
                                    <strong>Comentario:</strong>
                                    <br />
                                    <textarea className='textArea__class' maxLength="254" name="commentary" value={state.commentary} onChange={handlerChange} id="" rows="1"></textarea>
                                    <br />
                                    <strong>Puntuación:</strong>
                                    {/* <input name="score" value={state.score} onChange={handlerChange} type="number" />
                                    <p>&#11088;</p> */}

                                </p>
                                <form className='formEstrellitas'>
                                    <p className="clasificacion">
                                        <input className='estrellitaTA' id={'F'+props.id} type="radio" name="score" onChange={handlerChange} value="5" />
                                        <label className='labelEstrellitas' for={'F'+props.id}>★</label>
                                        <input className='estrellitaTA' id={'G'+props.id} type="radio" name="score" onChange={handlerChange} value="4" />
                                        <label className='labelEstrellitas' for={'G'+props.id}>★</label>
                                        <input className='estrellitaTA' id={'H'+props.id} type="radio" name="score" onChange={handlerChange} value="3" />
                                        <label className='labelEstrellitas' for={'H'+props.id} >★</label>
                                        <input className='estrellitaTA' id={'I'+props.id} type="radio" name="score" onChange={handlerChange} value="2" />
                                        <label className='labelEstrellitas' for={'I'+props.id}>★</label>
                                        <input className='estrellitaTA' id={'J'+props.id} type="radio" name="score" onChange={handlerChange} value="1" />
                                        <label className='labelEstrellitas' for={'J'+props.id}>★</label>
                                    </p>
                                </form>

                                <button className="inside-page__btn inside-page__btn--camping" onClick={() => addFeed(userId, props.idAct)}>Aceptar</button>
                            </div>}




                    </div>
                </div>
            </div>
        </div>


    )
}