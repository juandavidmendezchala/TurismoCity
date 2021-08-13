import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getActivity } from '../../store/actions/activityActions';
import ActivitiesReservation from '../ActivitiesReservation/ActivitiesReservation';
import ActivitiesComments from '../ActivitiesComments/ActivitiesComments';
import LoadingBox from '../Boxes/LoadingBox'
import MessageBox from '../Boxes/MessageBox'
import './ActivityDetail.css'

export default function ActivityDetail(props){

    const dispatch = useDispatch();

    const Activity = useSelector(state => state.activity);

    const {activity, loading, error} = Activity;
    
    useEffect(() => {
        dispatch(getActivity(props.match.params.id))
    },[])

    return(
        <div>
            {
                loading? <LoadingBox></LoadingBox>
                :
                error? <MessageBox>{error}</MessageBox>
                :
                activity?
                <div className="card-activity-detail">
                <div className="body-activity-detail">
                    <div className="card-text">
                        <h2>{activity.name}</h2>
                        <p>{activity.description}</p>
                        <div>
                        <h3>Proxima Fecha Disponible: </h3>
                        <span className="date">{activity.date}</span>
                        </div>
                    </div>
                    <div className="card-image">
                        <img className="img" src={activity.images[0]}></img>
                    </div>
                    <div className="card-stats">
                        <div className="stat">
                            <div className="value">{activity.places}</div>
                            <div className="type">Cupos</div>
                        </div>
                        <div className="stat">
                            <div className="value">{activity.price}</div>
                            <div className="type">Precio</div>
                        </div>
                        <div className="stat">
                            <div className="value">{activity.duration}</div>
                            <div className="type">Duración</div>
                        </div>
                    </div>
                    <div className="detail-down">
                    <div className="comments">
                    <ActivitiesComments></ActivitiesComments>
                    </div>
                    <div className="reservation">
                    <ActivitiesReservation></ActivitiesReservation>
                    </div>
                    </div>
                </div>
                </div>:
                <div>Loading</div>
            }

        </div>
    )
}