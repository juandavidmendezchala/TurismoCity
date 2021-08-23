import React from 'react'
import "./formPromo.css"


const FormPromo = () => {
    return (
        <form className="containerFormPromo">
            <input className="verPromoTexto" placeholder="INGRESA UNA PROMO..."

            // onChange={handleImputChange}
            // autoFocus={true}
            // value={value}
            />
            <br />
            <input className="verPromoTexto" placeholder="INGRESA UNA DESCRIPCION..."

            // onChange={handleImputChange2}
            // autoFocus={true}
            // value={info}
            />
            <button className="botonPromoDelete">+</button>

        </form>
    )
}

export default FormPromo
