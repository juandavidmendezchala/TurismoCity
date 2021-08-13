import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getActivity } from '../../store/actions/activityActions';
import LoadingBox from '../Boxes/LoadingBox'
import MessageBox from '../Boxes/MessageBox'

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
                <div className="body-activitie">
                <div >
                    <div className="card-image">
                        <img className="img" src="https://www.exoticca.com/es/blog/wp-content/uploads/2020/01/exoticca-mejor-epoca-para-viajar-a-suiza.jpg"></img>
                    </div>
                    <div className="card-text">
                        <span className="date">{activity.date}</span>
                        <h2>{activity.name}</h2>
                        <p>{activity.description}</p>
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
                </div>
                </div>:
                <div>Loading</div>
            }

        </div>
    )
}