import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postPromo } from '../../store/actions/promoActions'
import "./formPromo.css"


const FormPromo = ({ addPromo }) => {

    const [inputValue, setInputValue] = useState("")
    const [infoValue, setInfoValue] = useState("")

    const handleImputChangeNew = (e) => {
        setInputValue(e.target.value);

    }
    const handleImputChangeNew2 = (e) => {

        setInfoValue(e.target.value)
    }

    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {

        e.preventDefault()
        if (inputValue.trim() === '') return
        dispatch(postPromo(inputValue, infoValue))
        setInputValue('');
        setInfoValue('')
    }

    return (
        <form className="containerFormPromo" onSubmit={handleFormSubmit}>
            <input className="verPromoTexto" placeholder="INGRESA UNA PROMO..."

                onChange={handleImputChangeNew}
                // autoFocus={true}
                value={inputValue}
            />
            <br />
            <input className="verPromoTexto" placeholder="INGRESA UNA DESCRIPCION..."

                onChange={handleImputChangeNew2}
                // autoFocus={true}
                value={infoValue}
            />
            <button className="botonPromoDelete">+</button>

        </form >
    )
}

export default FormPromo
