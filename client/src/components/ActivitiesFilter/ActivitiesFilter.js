import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getFilterActivities } from '../../store/actions/activityActions';
import { Input } from 'semantic-ui-react'
import countries from './countries+states.json'
import MessageBox from '../Boxes/MessageBox'
import './ActivitiesFilter.css'


export default function ActivitiesFilter(props) {

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

    const dateToday = () => {
        const date = new Date()
        const dateToday = date.toISOString().split('T')[0]
        setStartDate(dateToday)
        setEndDate(dateToday)

        setCountry('Argentina')   
        var countrie = countries.find(el => el.name === 'Argentina');
        setState(countrie.states);  
        
        
    }

    const activities = useSelector(state => state.activities.activities);
    console.log('trae activitie',activities)

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

    /*useEffect(() => {
        dateToday()
    }, [])*/

    return (
        <div className="form-form-body">
            <form onSubmit={e => onHandleSubmit(e)}>
                <div className="form-title">
                    <h1>Busqueda</h1>
                </div>
                <div className="form-label-input">
                    <label className="form-label">País:</label>
                    <select  value={country}    onChange ={e => changeState(e)} >
                        {countries.map(el =><option key={el.id} value = {el.id} >{el.name}</option>)}
                    </select>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Ciudad:</label>
                    <select onChange={e => setCity(e.target.value)}>
                    {state===''?(<option>-</option>):state.map(el =><option key={el.id}>{el.name}</option>)}
                    </select>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Desde:</label>
                    <Input 
                        type="date"
                        icon='calendar alternate outline'
                        iconPosition='left'
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}>
                    </Input>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Hasta:</label>
                    <Input
                        type="date"
                          
                        icon='calendar alternate outline'
                        iconPosition='left'
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}>
                    </Input>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Desde(USD):</label>
                    <Input
                        class="ui input"
                          
                        type="text"
                        id="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}>
                    </Input>
                </div>
               
                <button className="submit-button-filter" type="submit">¡Haz mi busqueda!</button>
            </form>
        </div>
    )
}


