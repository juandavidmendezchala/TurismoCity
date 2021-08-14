import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilterActivities } from '../../store/actions/activityActions';
import { Input } from 'semantic-ui-react'
import countries from './countries+states.json'
import './ActivitiesFilter.css'

/*import axios from 'axios';
import { Component } from 'react';
import { response } from 'express';

class App extends Component{
    state ={
        pais:[],
        ciudades:[]
    }
    componentDidMount(){
        axios
        .get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates.json')
        .then(response) => {
            this.setState({ciudades: response.data});
        })
        .catch((error) =>{
            console.log(error)
        })
    }}*/






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
        <div id="boxbusqueda">
                <div className="ContainerBusqueda"><h3 className="TextoBusqueda">Busqueda</h3></div>
        
                <div className= "PaisCiudadContainer">
                <div>
                <h1 className="TextPaisCiudad" >Pais:</h1>
                    <Input onChange={e => setCountry(e.target.value)}>
                    <select onChange ={e => changeState(e)}>
                        {countries.map(el =><option key={el.id} value = {el.id} >{el.name}</option>)}
                    </select>
                    </Input>
                </div>
                <div>
                <h1 className="TextPaisCiudad" >Ciudad:</h1>
                    <Input onChange={e => setCity(e.target.value)}>
                    <select>
                    {state===''?(<option>Selecciona una ciudad</option>):state.map(el =><option key={el.id}>{el.name}</option>)}
                    </select>
                    </Input>
                </div>
                </div>
                <div className="Contenedoresvarios">
                    <label className="Textleyendbox">Fecha:</label>
                    <Input
                        type="date"
                        icon='calendar alternate outline'
                        iconPosition='left'
                        id= "dateimput"
                        onChange={e => setDate(e.target.value)}>
                    </Input>
                </div>
                <div>
                    <label>Precio:</label>
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
                    <label>Duración:</label>
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

        </div>
    )
}