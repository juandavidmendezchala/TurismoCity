import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getNews } from '../../store/actions/newsActions';

export default function News() {

    const dispatch = useDispatch()

    const news = useSelector(state => state.news)

    useEffect(() => {
        dispatch(getNews())
    }, [])

    return(
        <div>

        </div>
    )
}