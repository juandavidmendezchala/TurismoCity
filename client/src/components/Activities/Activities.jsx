import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivities } from '../../store/actions/activityActions'
import ActivityCard from '../ActivityCard.js/ActivityCard';

export default function Actities() {

    const dispatch = useDispatch();

    const Activities = useSelector(store => store.activities);

    const { activities, loading, error } = Activities;

    useEffect(() => {
        dispatch(getActivities())
    }, [])

    return (
        <div>
            <h1>Paquetes de actividades</h1>
            <ActivityCard activities={activities}></ActivityCard>
        </div>
    )
}


