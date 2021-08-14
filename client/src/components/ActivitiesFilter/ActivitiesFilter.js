import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFilterActivities } from '../../store/actions/activityActions';
import { Input } from 'semantic-ui-react'
import countries from './countries+states.json'
<<<<<<< HEAD
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



=======
import MessageBox from '../Boxes/MessageBox'
import './ActivitiesFilter.css'
>>>>>>> 6100d6de61e6ff85868dc8b65f15f4301570049f


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

    useEffect(() => {
        dateToday()
    }, [])

    return (
<<<<<<< HEAD
        <div id="boxbusqueda">
                <div className="ContainerBusqueda"><h3 className="TextoBusqueda">Busqueda</h3></div>
        
                <div className= "PaisCiudadContainer">
                <div>
                <h1 className="TextPaisCiudad" >Pais:</h1>
                    <Input onChange={e => setCountry(e.target.value)}>
                    <select onChange ={e => changeState(e)}>
=======
        <div className="form-form-body">
            <form onSubmit={e => onHandleSubmit(e)}>
                <div className="form-title">
                    <h1>Busqueda</h1>
                </div>
                <div className="form-label-input">
                    <label className="form-label">País:</label>
                    <select value={country} required onChange ={e => changeState(e)} >
>>>>>>> 6100d6de61e6ff85868dc8b65f15f4301570049f
                        {countries.map(el =><option key={el.id} value = {el.id} >{el.name}</option>)}
                    </select>
                    </Input>
                </div>
<<<<<<< HEAD
                <div>
                <h1 className="TextPaisCiudad" >Ciudad:</h1>
                    <Input onChange={e => setCity(e.target.value)}>
                    <select>
                    {state===''?(<option>Selecciona una ciudad</option>):state.map(el =><option key={el.id}>{el.name}</option>)}
=======
                <div className="form-label-input">
                    <label className="form-label">Ciudad:</label>
                    <select required onChange={e => setCity(e.target.value)}>
                    {state===''?(<option>-</option>):state.map(el =><option key={el.id}>{el.name}</option>)}
>>>>>>> 6100d6de61e6ff85868dc8b65f15f4301570049f
                    </select>
                    </Input>
                </div>
<<<<<<< HEAD
                </div>
                <div className="Contenedoresvarios">
                    <label className="Textleyendbox">Fecha:</label>
=======
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
>>>>>>> 6100d6de61e6ff85868dc8b65f15f4301570049f
                    <Input
                        type="date"
                        required
                        icon='calendar alternate outline'
                        iconPosition='left'
<<<<<<< HEAD
                        id= "dateimput"
                        onChange={e => setDate(e.target.value)}>
=======
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}>
>>>>>>> 6100d6de61e6ff85868dc8b65f15f4301570049f
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
                
                <button type="submit">Crear actividad</button>

        </div>
    )
}