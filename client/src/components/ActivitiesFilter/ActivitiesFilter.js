import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilterActivities } from '../../store/actions/activityActions';
import {getTypes} from "../../store/actions/typesActions"
import { Input } from 'semantic-ui-react'
import countries from './countries+states.json'
import MessageBox from '../Boxes/MessageBox'
import { useSelector } from 'react-redux';
import './ActivitiesFilter.css'


export default function ActivitiesFilter(props) {

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    // const [places, setPlaces] = useState('1');
    // const [duration, setDuration] = useState('10');
    // const [initialTime, setInitialTime] = useState('08:00');
    const [state, setState] = useState('')
    const activities = useSelector(state => state.activities.activities);
    const types = useSelector (state => state.types)
    const {alltypes, loading} = types
    useEffect (()=> {
    dispatch(getTypes())
    }, [])
    
    console.log('trae activitie',activities)

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

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        console.log(country, city, startDate, endDate, price, type, "AQUI ESTA TYPES")
        await dispatch(getFilterActivities(
            country,
            city,
            startDate,
            endDate,
            price,
            type,
           
            // places,
            // duration,
            // initialTime
            ))      
    }
    var today = new Date().toISOString().split('T')[0];
    function changeState(e) {
        setCountry(e.target.value)
        var countrie = countries.find(el => el.name === e.target.value);
        setState(countrie.states);
    }

    /*useEffect(() => {
        dateToday()
    }, [])*/

    return (
        <div className="form-form-body">
            <form onSubmit={e => onHandleSubmit(e)} className='form-barra'>
                <div className="form-title">
                    
                </div>
                <div className="form-label-input">
                    <label className="form-label">País:</label>
                    <select value={country}  onChange ={e => changeState(e)} className='SelectPaisJ'>
                        {countries.map(el =><option key={el.id} value = {el.id} >{el.name}</option>)}
                    </select>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Ciudad:</label>
                    <select onChange={e => setCity(e.target.value)} className='SelectPaisJ' placeholder='ciudad'>
                    {state===''?(<option className='placeholderCiudad'> Ciudad </option>):state.map(el =><option key={el.id}>{el.name}</option>)}
                    </select>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Desde:</label>
                    <Input
                        min={today}
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
                        min={startDate}
                        type="date"
                        icon='calendar alternate outline'
                        iconPosition='left'
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}>
                    </Input>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Hasta(USD):</label>
                    <Input
                        class="ui input"
                        type="number"
                        min="0"
                        id="price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}>
                    </Input>
                </div>
                <div className="form-label-input">
                    <label className="form-label">Tipo de Actividad:</label>
                    <select onChange ={e => setType(e.target.value)} className='SelectPaisJ'>
                    {
                        alltypes?.map(t =>(
                            <option value={t.id}>{t.category}</option>
                            ))
                    }
                    </select>
                </div>
                <div className="form-label-input">
                    {/* <label className="form-label">Cupos:</label>
                    <Input
                        class="ui input"
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
                        type="time"
                        id="initialTime"
                        value={initialTime}
                        onChange={e => setInitialTime(e.target.value)}
                    ></Input> */}
                </div>
                <button className="submit-button-filter" type="submit">¡Haz mi busqueda!</button>
            </form>
        </div>
    )
}