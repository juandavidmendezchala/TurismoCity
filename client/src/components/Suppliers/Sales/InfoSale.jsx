import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'

export const InfoSale = ({ active, fecha, name, mail }) => {
    return (
        <>
            {active ? <div>
                <div className="containerInfoSales">
                    <p>{fecha}</p>
                    <p>{name}</p>
                    <a href={`mailto:${mail}`}>{mail}</a>
                </div>
            </div> : <></>}
        </>
    )
}



