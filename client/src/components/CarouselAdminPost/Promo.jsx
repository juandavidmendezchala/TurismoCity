import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editPromo } from '../../store/actions/promoActions';
import "./promo.css"

const Promo = ({ promoText, promoInfo, removePromo, id }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(promoText);
    const [info, setInfo] = useState(promoInfo);

    const dispatch = useDispatch();

    const handleDivDoubleClick = () => {
        setIsEditing(true)
    }
    const handleImputKeyDown = (e) => {
        e.preventDefault()
        dispatch(editPromo(value, info, id))
        setIsEditing(false)
    }

    const handleImputChange = (e) => {
        setValue(e.target.value)
    }
    const handleImputChange2 = (e) => {
        setInfo(e.target.value)

    }

    return (
        isEditing ? <form className="formPromo" > <div className='containerPromoEdit'> <div >

            <input className="verPromoTexto"


                onChange={handleImputChange}

                autoFocus={true}
                value={value}
            />
            <br />
            <input className="verPromoTexto"

                onChange={handleImputChange2}
                // autoFocus={true}
                value={info}
            />

        </div> <button className="botonPromoEditt" onClick={handleImputKeyDown}> Guardar</button>  </div ></form> :


            <div className="containerPromoimput">
                < div  >
                    <h1 className="verPromoTexto">{value}</h1>
                    <h1 className="verPromoTexto">{info}</h1>
                </div >
                <button onClick={handleDivDoubleClick} className="botonPromoEditt"> editar</button>
                <button className="botonPromoDelete" onClick={() => removePromo(id)}> X </button>
            </div >

    )
}

export default Promo
