import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react'
import "./FormActivities.css"
import countryList from "./countries+states.json"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios'
import ImageActivity from "./ImageActivitiy";
import { useDispatch, useSelector } from "react-redux";
import { sendFormActivity } from "../../store/actions/activityActions";




const FormActivities = () => {

    const schema = yup.object().shape({

        name: yup.string().required("Please enter a valid NAME."),
        date: yup.date().required("A date is requiered."),
        description: yup.string().min(50).max(250).required(),
        price: yup.number().typeError("Set a Price in numbers.").positive().integer().required(),
        places: yup.number().typeError("Set Max Pax.").positive().required(),
        duration: yup.string().required(),
        initialTime: yup.number().typeError("Set an Initial Time.").positive().required(),
        country: yup.string().required(),
        city: yup.string(),

    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [cities, setCities] = useState([]);
    const [visible, setVisible] = useState("");
    const [sug, setSug] = useState([])
    const [state, setState] = useState('')
    const [countryL, setCountryL] = useState('');
    const [cityL, setCityL] = useState('');


    const dispatch = useDispatch();
    // const user = useSelector(state => state.userSignin)



    const submitForm = (post) => {

        const form = {
            ...post,
            country: countryL,
            city: cityL,

        }

        if (cityL === '') {
            setCityL(countryL)
        }
        console.log(form)
        const { name, date, description, price, places, duration, initialTime, country, city } = form
        dispatch(sendFormActivity({ name, date, description, price, places, duration, initialTime, country, city }))



        console.log(name, date, description, price, places, duration, initialTime, country, city)



    }
    var today = new Date().toISOString().split('T')[0];


    function changeState(e) {
        setCountryL(e.target.value);
        var countrie = countryList.find(el => el.name === e.target.value)
        setState(countrie.states)
        console.log(countryList, countrie, e.target.value)

    }

    // console.log(countryL);

    return (
        <div className="containerActForm">
            <div>
                <ImageActivity />

                <form onSubmit={handleSubmit(submitForm)} className="form">
                    <input name="name" {...register("name")} placeholder="Your activity name (title)..." className="inputBasicName" />
                    <p className="errorYup">{errors.name?.message}</p>
                    <input name="date" {...register("date")} type="date" min={today} className="inputDate" placeholder="Select availavle dates" />
                    <p className="errorYup">{errors.date && "Set a valid date"}</p>
                    <textarea name="description" rows="4" cols="40"{...register("description")} placeholder="Please describe your Activity...(50/250 char)" className="textArea" />
                    <p className="errorYup">{errors.description?.message}</p>
                    <div className="divLastSix"> <b className="inputSm"> Precio </b>
                        <input name="price" {...register("price")} placeholder="Price $..." type="number" className="inputSmall" />
                        <p className="errorYup">{errors.price?.message}</p> <b className="inputSm"> Vacantes </b>
                        <input name="places" {...register("places")} placeholder="Max Pax..." type="number" min="2" max="990" className="inputSmall" />
                        <p className="errorYup">{errors.places?.message}</p><b className="inputSm"> Duracion </b>
                        <input name="duration" {...register("duration")} placeholder="Duration" type="number" min="1" max="24" className="inputSmall" />
                        <p className="errorYup">{errors.duration?.message}</p><b className="inputSm"> Hora de Inicio </b>
                        <input name="initialTime" {...register("initialTime")} placeholder="Inicial Time..." type="number" min="1" max="24" className="inputSmall" />
                        <p className="errorYup">{errors.initialTime?.message}</p>


                        {/* <input {...register("Country")} placeholder="Your Country..." className="inputSelect" /> */}
                        {/* <div > */}

                        <input type="hidden" className="inputBasic" onChange={e => setCountryL(e.target.value)}></input>
                        <select placeholder="Your Coutry name..." {...register("country")} onChange={e => changeState(e)} className="inputBasic" name="country" >
                            <option value="" >Pais </option>

                            {countryList.map(el => <option className="inputBasic" key={el.id} value={el.name}  >{el.name}</option>)}
                        </select>
                        {/* </div> */}
                        <p className="errorYup">{errors.country?.message}</p>

                        {/* <select name="country" {...register("Country")} placeholder="Your Country..." className="inputSelect" onChange={e => changeC(e)} > */}
                        {/* </select> */}
                        <input type="hidden" className="inputBasic" onChange={e => setCityL(e.target.value)} ></input>
                        <select className="inputBasic" placeholder="Your City name..."{...register("city")} onChange={e => setCityL(e.target.value)}>
                            {state === '' ? (<option>-</option>) : state.map(el => <option name="city" key={el.id}>{el.name}</option>)}
                        </select>

                        <p className="errorYup">{errors.city?.message}</p>

                        {/* <input name="city" {...register("City")} placeholder="Your City name..." className="inputSelect" />
                    <select name="city" {...register("City")} placeholder="Your City name..." className="inputSelect" >
                    <option value="">City</option>
                        {cities.map((i) => { return <SelectDinamico name={i.name} /> })}
                    </select> */}
                        {/* <textarea name="comments" {...register("Comments")} placeholder="Your Comments..." className="textArea" />
                    <p className="errorYup">{errors.Comments?.message}</p> */}
                        <input className="inputSmallButton" type="submit" /> </div>
                </form>

            </div>
        </div >
    );
}


export default FormActivities;








