import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivity, getComments } from '../../store/actions/activityActions';
import { ActivitiesReservation } from '../ActivitiesReservation/ActivitiesReservation';
import {getQuestion} from '../../store/actions/questionAction'
//import { getQuestion } from '../../store/actions/questionAction'
import ActivitiesComments from '../ActivitiesComments/ActivitiesComments';
import Checkout from "../Checkout/Checkout"
import LoadingBox from '../Boxes/LoadingBox'
import MessageBox from '../Boxes/MessageBox'
import './ActivityDetail.css'
import Comment from '../Comment/Comment';
import { FormComment } from '../FormComment/FormComment';


export default function ActivityDetail(props) {

    const dispatch = useDispatch();

    const Activity = useSelector(state => state.activity);
    const Question = useSelector(state => state.reducerQuestion.question);
    //const user = useSelector(state => state.userSignin.userInfo.id);
    //console.log('reducer quesion', user)
    const userSingin = useSelector(state => state.userSignin)
    //console.log('userAct', userSingin)

    console.log('reducer quesion', props)
    
    const commentsActivity = useSelector(state => state.comments)

    const { loadingC, comments, errorC } = commentsActivity

    const { activity, loading, error } = Activity;
    
    const fecha = {
        "01": 'ENERO',
        "02": 'FEBRERO',
        "03": 'MARZO',
        "04": 'ABRIL',
        "05": 'MAYO',
        "06": 'JUNIO',
        "07": "JULIO",
        "08": 'AGOSTO',
        "09": 'SEPTIEMBRE',
        "10": 'OCTUBRE',
        "11": 'NOVIEMBRE',
        "12": 'DICIEMBRE',
    }

    console.log('detail act',activity?.userId)

    useEffect(() => {
        dispatch(getActivity(props.match.params.id))
        dispatch(getComments(props.match.params.id))
        dispatch(getQuestion(props.match.params.id))
    }, [])

    return (
        <div className='ConteinerActivityDetail'>
            {
                loading ? <LoadingBox></LoadingBox>
                    :
                    error ? <MessageBox>{error}</MessageBox>
                        :
                        activity ?
                            <div>
                                <div className="card-activity-detail">

                                    <div className='First-Block'>

                                        <img className="card-image-detail" src={activity.images}></img>
                                        <div className='conteiner-stats-detail'>
                                            <div className="card-stats">
                                                <div className="stat">

                                                    <div className="value">{(activity.places - activity.purchases.length) +'/'+ activity.places}</div>
                                                    <div className="type">Cupos</div>
                                                </div>
                                                <div className="stat">
                                                    <div className="value"><sup>$</sup>{activity.price}</div>
                                                    <div className="type">Precio</div>
                                                </div>
                                                <div className="stat">
                                                    <div className="value">{activity.duration}<sup>H</sup></div>
                                                    <div className="type">Duración</div>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 className='dayDetail'> {activity.date.slice(8, activity.date.length)} </h5>
                                        <h6 className='monthDetail'> {fecha[activity.date.slice(5, 7)]} </h6>

                                    </div>
                                    <div className='Second-Block'>

                                        <div className="card-text-detail">
                                            <h2>{activity.name}</h2>
                                            <p>{activity.description}</p>
                                            <div>
                                                <h3 className='nextDate'>Proxima Fecha Disponible: </h3>
                                                <span className="dateDetail">{activity.date}</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                {Activity.activity.purchases?.length>=Activity.activity.places?
                                <div className='reservation'><strong>CUPOS AGOTADOS</strong></div>: <div className="reservation">
                                <Checkout />
                            </div>
                                }
                                    

                                <div className="detail-down">
                                    <div className="comments">
                                        <h2 className='Reseñas-detail'>Reseñas</h2>
                                        {
                                            comments?.length !== 0 ?
                                                comments?.map((c) => <ActivitiesComments
                                                    // key={index+'B'}
                                                    comment={c.commentary}
                                                    score={c.score}
                                                    update={c.updatedAt.slice(8,10)+'-'+c.updatedAt.slice(5,7)+'-'+c.updatedAt.slice(0,4)}
                                                    userName={c.user.name}
                                                    picture={c.user.picture}
                                                />) :
                                                <div>No hay comentarios</div>
                                        }
                                    </div>


                                </div>
                                <FormComment
                                    activityId={props.match.params.id}
                                    userId={userSingin.userInfo?.id}
                                />
                                
                                
                                <h1>Preguntas y Respuestas</h1>
                                <div class="containerComment">
                                
                                {
                                   Question?.map( m => 
                                    <Comment
                                        // key= {m.id}
                                        idQuestion = {m.id}
                                        query={m.query}
                                        date={m.date}
                                        answers = {m.answers}
                                        userId = {m.userId}
                                        userLogeo = {userSingin.userInfo?.id}
                                        userActPres = {activity.userId}
                                        idAct = {props.match.params.id}
                                     />
                                    ) 
                                }
                               </div>
                            </div> :
                            <div>Loading</div>
            }

        </div>
    )
}
