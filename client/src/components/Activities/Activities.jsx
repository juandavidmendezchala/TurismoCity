import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ActivitiesFilter from '../ActivitiesFilter/ActivitiesFilter'
import { getActivities } from '../../store/actions/activityActions'
import ActivityCard from '../ActivityCard/ActivityCard.js'
import './Activities.css'
import { getFavorites } from '../../store/actions/getFavorites'
import PaginationActivity from '../paginationActivity/paginationActivity';



export default function Actities() {

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    const Activities = useSelector(store => store.activities);

    const favorite = useSelector(state => state.reducersActivities)
    const userSignin = useSelector(state => state.userSignin)

    const { favorites } = favorite

    const { activities, loading, error } = Activities;

    useEffect(() => {
        if (userSignin.userInfo) {
            dispatch(getFavorites(userSignin.userInfo.id))
        }
        dispatch(getActivities())
    }, [userSignin, dispatch])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = activities?.slice(indexOfFirstPost, indexOfLastPost)
    const pagination = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div className="divSupremo">
            {/* <h1>Paquetes de actividades</h1> */}
            {
                loading ?
                    <div>Loading</div>
                    :
                    <div className="filter-cards">
                        <h3 className="PaqueteDeActividadesHeader">Paquete de actividades</h3>
                        <div className="BarritaActArriba"></div>
                        <div className="PositionFilterAct">
                            <ActivitiesFilter error={error}></ActivitiesFilter>
                        </div>
                        <h3 className="ActDisponibles">Actividades disponibles</h3>
                        <div className="BarritaAct"></div>
                        <div className="divsupremo">
                            {
                                currentPosts?.map(a => <ActivityCard key={a.id}
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
                                    purchases={a.purchases}
                                ></ActivityCard>)
                            }
                        </div>
                        <div className="pag">
                            <PaginationActivity postsPerPage={postsPerPage} totalPosts={activities?.length} paginate={pagination} />
                        </div>

                    </div>
            }
        </div>
    )
}


