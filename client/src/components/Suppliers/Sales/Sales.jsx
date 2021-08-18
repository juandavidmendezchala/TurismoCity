import React, { useEffect } from 'react'
import axios from 'axios'
import { REACT_APP_API } from '../../../store/Consts/Consts'
import { useState } from 'react'

const Sales = ({ sidebar }) => {
    const [sales, setSales] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(async () => {
        await axios.get(`${REACT_APP_API}/suppliers/sales/1/1`)
            .then(async (res) => await setSales(res.data))
        setLoading(false)
    }, [])
    if (loading) {
        return (
            <>
                Cargando...
            </>
        )
    }
    console.log(sales)
    return (
        <div className={sidebar ? "sidebarAbierta" : "sidebarCerrada"}>
            <h2>Actividades vendidas</h2>
            {
                sales.map(e => {
                    <p></p>
                })
            }
        </div>
    )
}

export default Sales
