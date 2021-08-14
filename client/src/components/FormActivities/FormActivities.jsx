import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react'
import "./FormActivities.css"
import countryList from "./countries+states.json"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'
import ImageActivity from "./ImageActivitiy";




const FormActivities = () => {
    const schema = yup.object().shape({
        Name: yup.string().required(),
        Date: yup.date().required("A date is requiered"),
        Description: yup.string().min(50).max(250).required(),
        Price: yup.number().positive().integer().required(),
        Places: yup.number().positive().required(),
        Duration: yup.string().required(),
        InitialTime: yup.number().positive().required(),
        Country: yup.string().required(),
        City: yup.string().required(),
        // Images: yup.file(),

    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [cities, setCities] = useState([]);
    const [visible, setVisible] = useState("");
    const [sug, setSug] = useState([])
    const [state, setState] = useState('')
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');


    const submitForm = (post) => {
        const form = {
            ...post,
            Country: country,
            City: city,
        }

        console.log(form)
    }
    var today = new Date().toISOString().split('T')[0];


    function changeState(e) {
        setCountry(e.target.value);
        var countrie = countryList.find(el => el.name === e.target.value)
        setState(countrie.states)
        console.log(countryList, countrie, e.target.value)
    }

    console.log(country);

    return (
        <div className="containerActForm">
            <div>
                <ImageActivity />

                <form onSubmit={handleSubmit(submitForm)} className="form">
                    <input name="name" {...register("Name")} placeholder="Your activity name (title)..." className="inputBasic" />
                    <p className="errorYup">{errors.Name?.message}</p>
                    <input name="date" {...register("Date")} type="date" min={today} className="inputDate" placeholder="Select availavle dates" />
                    <p className="errorYup">{errors.Date && "Set a valid date"}</p>
                    <textarea name="description" rows="4" cols="40"{...register("Description")} placeholder="Please describe your Activity...(50/250 char)" className="textArea" />
                    <p className="errorYup">{errors.Description?.message}</p>
                    <input name="price" {...register("Price")} placeholder="Price in numbers $..." type="number" className="inputSmall" />
                    <p className="errorYup">{errors.Price?.message}</p>
                    <input name="places" {...register("Places")} placeholder="Your activity Max number of Passangers..." type="number" min="2" max="990" className="inputSelect" />
                    <p className="errorYup">{errors.Places?.message}</p>
                    <input name="duration" {...register("Duration")} placeholder="Last hours" type="time" min="1" max="24" className="inputSmall" />
                    <p className="errorYup">{errors.Duration?.message}</p>
                    <input name="initialTime" {...register("InitialTime")} placeholder="Inicial Time..." type="number" min="1" max="24" className="inputSmall" />
                    <p className="errorYup">{errors.InitialTime?.message}</p>
                    {/* <input {...register("Country")} placeholder="Your Country..." className="inputSelect" /> */}
                    {/* <div > */}

                    <input type="hidden" className="inputBasic" onChange={e => setCountry(e.target.value)}></input>
                    <select placeholder="Your Coutry name..." {...register("Country")} onChange={e => changeState(e)} className="inputBasic" name="country">

                        {countryList.map(el => <option className="inputBasic" key={el.id} value={el.id} >{el.name}</option>)}
                    </select>
                    {/* </div> */}
                    <p className="errorYup">{errors.Country?.message}</p>

                    {/* <select name="country" {...register("Country")} placeholder="Your Country..." className="inputSelect" onChange={e => changeC(e)} > */}
                    {/* </select> */}
                    <input type="hidden" className="inputBasic" onChange={e => setCity(e.target.value)} ></input>
                    <select className="inputBasic" placeholder="Your City name..."{...register("City")} onChange={e => setCity(e.target.value)}>
                        {state === '' ? (<option>-</option>) : state.map(el => <option name="city" key={el.id}>{el.name}</option>)}
                    </select>
                    <p className="errorYup">{errors.City?.message}</p>

                    {/* <input name="city" {...register("City")} placeholder="Your City name..." className="inputSelect" />
                    <select name="city" {...register("City")} placeholder="Your City name..." className="inputSelect" >
                        <option value="">City</option>
                        {cities.map((i) => { return <SelectDinamico name={i.name} /> })}
                    </select> */}
                    {/* <textarea name="comments" {...register("Comments")} placeholder="Your Comments..." className="textArea" />
                    <p className="errorYup">{errors.Comments?.message}</p> */}
                    <input type="submit" />
                </form>

            </div>
        </div >
    );
}


export default FormActivities;








