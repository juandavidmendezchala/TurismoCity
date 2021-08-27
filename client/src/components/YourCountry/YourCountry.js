import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCountries, setUserCountry} from '../../store/actions/countryactions'
import './YourCountry.css'
import swal from 'sweetalert2';

export default function YourCountry({children}) {

    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
        setIsOpen(false)
    }

    const dispatch = useDispatch();

    const allcountries = useSelector(state => state.countries)
    const userCountry = useSelector(state => state.userCountry)

    const setCountry = (country) => {
        dispatch(setUserCountry(country))
        setIsOpen(false)
        window.location.reload();
        alert(`Haz elegido ${country}, ¡Bienvenido!`)
        swal.fire({
            title: "Bienvenido!",
            text: `Haz elegido ${country}`,
            buttons: true,
            dangerMode: false,
        })
        
    }

    const {countries, loading} = allcountries;

    useEffect(() => {
        if(userCountry.length < 1) {
            setIsOpen(true)
        }
        dispatch(getCountries())
    }, [userCountry, dispatch])

    return(
        <div className={`country ${isOpen && 'is-open'}`}>
            <div className="country-container">
                <button className="country-close" onClick={onClose}>X</button>
                <h5>Por favor, selecciona tu país:</h5>
                {
                    countries?.map(c => (
                        <div className="countries-list" onClick={e => setCountry(c.name)}>
                        <img className="countries-img" src={`https://www.countryflags.io/${c.iso2}/flat/64.png`}></img>
                        <ul className="countries-name">{c.name}</ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}