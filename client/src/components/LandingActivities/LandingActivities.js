import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ActivityCard from '../ActivityCard/ActivityCard.js'
import { getLandingActivities } from '../../store/actions/activityActions'
import LandingActivityCard from './LandingActivityCard.js'



export default function LandingActivities() {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const dispatch = useDispatch();

    const Activities = useSelector(store => store.landingActivities);

    const { landingActivities, loading, error } = Activities;

    const dateToday = () => {
        const date = new Date()
        const dateToday = date.toISOString().split('T')[0]
        setStartDate(dateToday)
        setEndDate(dateToday)
    }

    useEffect(() => {
        dateToday()      
        dispatch(getLandingActivities())
    }, [])

    return (
        <div>
            {
                loading ?
                    <div>Loading</div>
                    :
                    <div className="filter-cards">
                        <div className="cards-act">
                            <div className="space-cards-act"></div>
                            {
                                landingActivities?.map(a => <LandingActivityCard key={a.id}
                                    datetoday={startDate}
                                    dateend={endDate}
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
                                ></LandingActivityCard>)
                            }
                        </div>
                    </div>
            }
        </div>
    )
}