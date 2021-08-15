import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import UserActivities from '../NavBarSupplier/userActivities/userActivities';
import axios from "axios"
import { useState } from 'react';

export const ContainerUserAct = () => {
    const user = useSelector((state) => state.userSignin.userInfo.id)

    // console.log(user)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    useEffect(async () => {
        const actividades = await axios.get(`http://localhost:3001/suppliers/${user}`);
        setData(actividades.data)
        setLoading(false)
    }, [])
    if (loading) {
        return (
            <p>Cargando ...</p>
        )
    }
    data.map(e => console.log(e))
    return (
        <>
            <h2>Actividades publicadas</h2>
            {
                data.map(e =>
                    <UserActivities activity={e.name} active={e.active} city={e.city} price={e.price} idPost={e.id} idUser={e.userId} images={e.images} />
                )
            }
        </>
    )
}
