import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActivitiesFilter from '../ActivitiesFilter/ActivitiesFilter'
import { getActivities } from '../../store/actions/activityActions'
import ActivityCard from '../ActivityCard/ActivityCard.js'
import './Activities.css'


export default function Actities() {

    const dispatch = useDispatch();

    const Activities = useSelector(store => store.activities);

    const { activities, loading, error } = Activities;

    useEffect(() => {
        dispatch(getActivities())
    }, [])

    return (
        <div>
            <h2>Paquetes de actividades</h2>
            {
                loading ?
                    <div>Loading</div>
                    :
                    <div className="filter-cards">
                        <div className="filter-component">
                            <ActivitiesFilter error={error}></ActivitiesFilter>
                        </div>
                        <div className="cards-act">
                            <div className="space-cards-act"></div>
                            {
                                activities?.map(a => <ActivityCard key={a.id}
                                    id={a.id}
                                    name={a.name}
                                    description={a.description}
                                    date={a.date}
                                    price={a.price}
                                    places={a.places}
                                    duration={a.duration}
                                    initialTime={a.initialTime}
                                    images={a.images}
                                    country={a.country}
                                    city={a.city}
                                ></ActivityCard>)
                            }
                        </div>
                    </div>
            }
        </div>
    )
}


