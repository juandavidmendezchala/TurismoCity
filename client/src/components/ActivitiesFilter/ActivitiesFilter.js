import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilterActivities } from '../../store/actions/activityActions';


export default function ActivitiesFilter() {

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [places, setPlaces] = useState('');
    const [duration, setDuration] = useState('');
    const [initialTime, setInitialTime] = useState('');

    const dispatch = useDispatch()

    const onHandleSubmit = () =>{
        dispatch(getFilterActivities({country, city, date, price, places, duration, initialTime}))
    }

    return(
        <div>
            <form onSubmit={onHandleSubmit}>
                <div>
                    <h1>Busqueda</h1>
                </div>
                <div>
                    <label>País:</label>
                    <input onChange={e => setCountry(e.target.value)}></input>
                </div>
                <div>
                    <label>Ciudad:</label>
                    <input onChange={e => setCity(e.target.value)}></input>
                </div>
                <div>
                    <label>Fecha:</label>
                    <input onChange={e => setDate(e.target.value)}></input>
                </div>
                <div>
                    <label>Precio:</label>
                    <input onChange={e => setPrice(e.target.value)}></input>
                </div>
                <div>
                    <label>Cupos:</label>
                    <input onChange={e => setPlaces(e.target.value)}></input>
                </div>
                <div>
                    <label>Duración:</label>
                    <input onChange={e => setCountry(e.target.value)}></input>
                </div>
                <div>
                    <label>Tiempo de inicio:</label>
                    <input onChange={e => setCountry(e.target.value)}></input>
                </div>
                <button type="submit"></button>
            </form>
        </div>
    )
}