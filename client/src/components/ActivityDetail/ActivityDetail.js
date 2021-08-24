import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivity, getComments } from '../../store/actions/activityActions';
import { ActivitiesReservation } from '../ActivitiesReservation/ActivitiesReservation';
import ActivitiesComments from '../ActivitiesComments/ActivitiesComments';
import Checkout from "../Checkout/Checkout"
import LoadingBox from '../Boxes/LoadingBox'
import MessageBox from '../Boxes/MessageBox'
import './ActivityDetail.css'

export default function ActivityDetail(props) {

    const dispatch = useDispatch();

    const Activity = useSelector(state => state.activity);

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
        "07":"JULIO",
        "08": 'AGOSTO',
        "09": 'SEPTIEMBRE',
        "10": 'OCTUBRE',
        "11": 'NOVIEMBRE',
        "12": 'DICIEMBRE',
        

    }

    useEffect(() => {
        dispatch(getActivity(props.match.params.id))
        dispatch(getComments(props.match.params.id))
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
                                        </div>
                                        <h5 className='dayDetail'> {activity.date.slice(8, activity.date.length)} </h5>
                                        <h6 className='monthDetail'> {fecha[activity.date.slice(5, 7)]} </h6>

                                    </div>
                                    <div className='Second-Block'>

                                        <div className="card-text-detail">
                                            <h2>{activity.name}</h2>
                                            <p>{activity.description}</p>
                                            <div>
                                                <h3>Proxima Fecha Disponible: </h3>
                                                <span className="date">{activity.date}</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="detail-down">
                                    <div className="comments">
                                        <h2>Reseñas</h2>
                                        {
                                            comments?.length !== 0 ?
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

                            :
                            <div>Loading</div>
            }

        </div>
    )
}
