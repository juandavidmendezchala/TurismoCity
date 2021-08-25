import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivity, getComments } from '../../store/actions/activityActions';
import { ActivitiesReservation } from '../ActivitiesReservation/ActivitiesReservation';
import {getQuestion} from '../../store/actions/questionAction'
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
    const userSingin = useSelector(state => state.userSignin.userInfo.id)
    //console.log('userAct', userSingin)

    const commentsActivity = useSelector(state => state.comments)

    const { loadingC, comments, errorC } = commentsActivity

    const { activity, loading, error } = Activity;

    console.log('detail act',activity?.userId)

    useEffect(() => {
        dispatch(getActivity(props.match.params.id))
        dispatch(getComments(props.match.params.id))
        dispatch(getQuestion(props.match.params.id))
    }, [])

    return (
        <div>
            {
                loading ? <LoadingBox></LoadingBox>
                    :
                    error ? <MessageBox>{error}</MessageBox>
                        :
                        activity ?
                            <div className="card-activity-detail">
                                <div className="body-activity-detail">
                                    <div className="card-text">
                                    
                                        <h2>{activity.name}</h2>
                                        <p>{activity.userId}</p>
                                        <p>{activity.description}</p>
                                        <div>
                                            <h3>Proxima Fecha Disponible: </h3>
                                            <span className="date">{activity.date}</span>
                                        </div>
                                    </div>
                                    <div className="card-image">
                                        <img className="img" src={activity.images}></img>
                                    </div>
                                    <div className="card-stats">
                                        <div className="stat">
                                            <div className="value">{activity.places}</div>
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
                                    <div className="detail-down">
                                        <div className="comments">
                                            <h2>Reseñas</h2>
                                            {
                                                comments?.length !== 0?
                                                comments?.map(c => <ActivitiesComments
                                                    key={c.id}
                                                    comment={c.commentary}
                                                    score={c.score}
                                                    update={c.updateAt}
                                                    userName={c.user.name}
                                                ></ActivitiesComments>) :
                                                <div>No hay comentarios</div>
                                            }
                                        </div>
                                        <div className="reservation">
                                            <Checkout />
                                        </div>
                                    </div>
                                </div>
                                <FormComment 
                                   activityId= {props.match.params.id}
                                   userId={userSingin}
                                />
                                <h1>Preguntas y Respuestas</h1>
                                <div class="containerComment">
                                
                                {
                                   Question?.map( m => 
                                    <Comment
                                        key= {m.id}
                                        idQuestion = {m.id}
                                        query={m.query}
                                        date={m.date}
                                        answers = {m.answers}
                                        userId = {m.userId}
                                        userLogeo = {userSingin}
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
