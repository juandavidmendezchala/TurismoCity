import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilterActivities } from '../../store/actions/activityActions';
import { Input } from 'semantic-ui-react'
import countries from './countries+states.json'


export default function ActivitiesFilter() {

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [places, setPlaces] = useState('');
    const [duration, setDuration] = useState('');
    const [initialTime, setInitialTime] = useState('');
    const [state, setState] = useState('')
    const dispatch = useDispatch()

    const onHandleSubmit = () => {
        dispatch(getFilterActivities({ country, city, date, price, places, duration, initialTime }))
    }
    
    function changeState(e){
        var countrie = countries.find(el => el.name === e.target.value)
       setState(countrie.states)
       console.log(countries, countrie, e.target.value)
    }
    console.log(state)
    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <div>
                    <h1>Busqueda</h1>
                </div>
                <div>
                    <label>País:</label>
                    <select onChange ={e => changeState(e)}>
                        {countries.map(el =><option key={el.id} value = {el.id} >{el.name}</option>)}
                    </select>
                </div>
                <div>
                    <label>Ciudad:</label>
                    <select>
                    {state===''?(<option>-</option>):state.map(el =><option key={el.id}>{el.name}</option>)}
                    </select>
                </div>
                <div>
                    <label>Fecha:</label>
                    <Input
                        type="date"
                        icon='calendar alternate outline'
                        iconPosition='left'
                        onChange={e => setDate(e.target.value)}>
                    </Input>
                </div>
                <div>
                    <label>Precio(USD):</label>
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
                        type="time"
                        id="duration"
                        onChange={e => setCountry(e.target.value)}>
                    </Input>
                </div>
                <div>
                    <label>Tiempo de inicio:</label>
                    <Input
                        class="ui input"
                        type="time"
                        id="initialTime"
                        onChange={e => setCountry(e.target.value)}
                    ></Input>
                </div>
                <button type="submit">Crear actividad</button>
            </form>
        </div>
    )
}