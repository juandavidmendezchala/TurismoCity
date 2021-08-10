import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'

export default function Actities(){

    const dispatch = useDispatch()

    const Activities = useSelector(store => store.activities)

    useEffect(() => {
        dispatch(getActivities)
    })

    return(
        <div>
            Thinig
        </div>
    )
}