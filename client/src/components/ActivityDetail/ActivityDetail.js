import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getActivity } from '../../store/actions/activityActions';

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
                loading?
                <div>Loading</div>
                :
                activity?
                <div>
                <h1>{activity.name}</h1>
                <h2>{activity.price}</h2>
                </div> :
                <div>Loading</div>
            }

        </div>
    )
}