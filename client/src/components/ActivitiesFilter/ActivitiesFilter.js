import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
    const [price, setPrice] = useState('1.0');
    const [places, setPlaces] = useState('1');
    const [duration, setDuration] = useState('10');
    const [initialTime, setInitialTime] = useState('08:00');
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
                    <select required="true"value={country} required onChange ={e => changeState(e)} >
                        {countries.map(el =><option key={el.id} value = {el.id} >{el.name}</option>)}
                    </select>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Ciudad:</label>
                    <select required="true" onChange={e => setCity(e.target.value)}>
                    {state===''?(<option>-</option>):state.map(el =><option key={el.id}>{el.name}</option>)}
                    </select>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Desde:</label>
                    <Input 
                        type="date"
                        required
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
                        required
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
                        required
                        type="text"
                        id="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}>
                    </Input>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Cupos:</label>
                    <Input
                        class="ui input"
                        required
                        type="number"
                        id="places"
                        value={places}
                        onChange={e => setPlaces(e.target.value)}>
                    </Input>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Duración(Max):</label>
                    <Input
                        class="ui input"
                        required
                        type="number"
                        id="duration"
                        value={duration}
                        onChange={e => setDuration(e.target.value)}>
                    </Input>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Tiempo de inicio:</label>
                    <Input
                        class="ui input"
                        required
                        type="time"
                        id="initialTime"
                        value={initialTime}
                        onChange={e => setInitialTime(e.target.value)}
                    ></Input>
                </div>
                <button className="submit-button-filter" type="submit">¡Haz mi busqueda!</button>
            </form>
        </div>
    )
}