import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActivitiesFilter from '../ActivitiesFilter/ActivitiesFilter'
import { getActivities } from '../../store/actions/activityActions'
import ActivityCard from '../ActivityCard/ActivityCard.js'
import './Activities.css'
import { getFavorites } from '../../store/actions/getFavorites'


export default function Actities() {

    const dispatch = useDispatch();

    const Activities = useSelector(store => store.activities);

    const favorite = useSelector(state => state.reducersActivities)

    const {favorites} = favorite

    const { activities, loading, error } = Activities;

    useEffect(() => {
        dispatch(getFavorites(1))
        dispatch(getActivities())        
    }, [])

    return (
        <div>
            {/* <h1>Paquetes de actividades</h1> */}
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
                                    favorites={favorites}
                                ></ActivityCard>)
                            }
                        </div>
                    </div>
            }
        </div>
    )
}


