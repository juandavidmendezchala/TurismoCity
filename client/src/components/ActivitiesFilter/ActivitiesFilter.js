import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilterActivities } from '../../store/actions/activityActions';
import { Input } from 'semantic-ui-react'
import countries from './countries+states.json'


export default function ActivitiesFilter() {

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [price, setPrice] = useState('');
    const [places, setPlaces] = useState('');
    const [duration, setDuration] = useState('');
    const [initialTime, setInitialTime] = useState('');
    const [state, setState] = useState('')

    const dispatch = useDispatch()

    const onHandleSubmit = (e) => {
    e.preventDefault()
    dispatch(getFilterActivities(
            country,
            city,
            startDate,
            endDate,
            price,
            places,
            duration,
            initialTime
            ))
    }
    
    function changeState(e){
    setCountry(e.target.value)
    var countrie = countries.find(el => el.name === e.target.value);
    setState(countrie.states);
    }

    return (
        <div>
            <form onSubmit={e => onHandleSubmit(e)}>
                <div>
                    <h1>Busqueda</h1>
                </div>
                <div>
                    <label>País:</label>
                    <select onChange ={e => changeState(e)} >
                        {countries.map(el =><option key={el.id} value = {el.id} >{el.name}</option>)}
                    </select>
                </div>
                <div>
                    <label>Ciudad:</label>
                    <select onChange={e => setCity(e.target.value)}>
                    {state===''?(<option>-</option>):state.map(el =><option key={el.id}>{el.name}</option>)}
                    </select>
                </div>
                <div>
                    <label>Desde:</label>
                    <Input
                        type="date"
                        icon='calendar alternate outline'
                        iconPosition='left'
                        onChange={e => setStartDate(e.target.value)}>
                    </Input>
                </div>
                <div>
                    <label>Hasta:</label>
                    <Input
                        type="date"
                        icon='calendar alternate outline'
                        iconPosition='left'
                        onChange={e => setEndDate(e.target.value)}>
                    </Input>
                </div>
                <div>
                    <label>Desde(USD):</label>
                    <Input
                        class="ui input"
                        type="number"
                        id="price"
                        onChange={e => setPrice(e.target.value)}>
                    </Input>
                </div>
                <div>
                    <label>Cupos:</label>
                    <Input
                        class="ui input"
                        type="number"
                        id="places"
                        onChange={e => setPlaces(e.target.value)}>
                    </Input>
                </div>
                <div>
                    <label>Duración(Max):</label>
                    <Input
                        class="ui input"
                        type="integer"
                        id="duration"
                        onChange={e => setDuration(e.target.value)}>
                    </Input>
                </div>
                <div>
                    <label>Tiempo de inicio:</label>
                    <Input
                        class="ui input"
                        type="time"
                        id="initialTime"
                        onChange={e => setInitialTime(e.target.value)}
                    ></Input>
                </div>
                <button type="submit">Crear actividad</button>
            </form>
        </div>
    )
}