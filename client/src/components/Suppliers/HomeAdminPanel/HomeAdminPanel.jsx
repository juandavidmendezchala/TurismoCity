import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { FaShoppingCart } from "react-icons/fa"
import { MdAspectRatio, MdAttachMoney } from "react-icons/md"
import { BsFillStarFill } from "react-icons/bs"
import { REACT_APP_API } from '../../../store/Consts/Consts';
import { getSalesSup } from '../../../store/actions/actionSupplier/getSalesSupplier'
import { Doughnut } from 'react-chartjs-2';
import { mostSaled } from '../../../store/actions/actionSupplier/mostSaled'

const HomeAdminPanel = ({ sidebar }) => {

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)
    const [rating, setRating] = useState('')
    const user = useSelector((state) => state.userSignin.userInfo.id)
    const data = useSelector(state => state.infoSales.salesUser)
    let ventas = 0;
    let ingresos = 0;



    useEffect(() => {
        axios.get(`${REACT_APP_API}/suppliers/sales/${user}`)
            .then((response) => {
                dispatch(getSalesSup(response.data))
                //Para ordenar las actividades mas vendidas en el store
                dispatch(mostSaled(response.data.sort((a, b) => {
                    if (a.purchases.length < b.purchases.length) {
                        return 1;
                    }
                    if (a.purchases.length > b.purchases.length) {
                        return -1;
                    }
                    return 0;
                })))
            })
        
            axios.get(`${REACT_APP_API}/feedBack/scoreUser/${user}`)
                .then(res => setRating(res.data))
            .then(setLoading(false))
        // .catch(error => console.log(error))
        
    }, [])
    data?.map(e => ventas = ventas + e.purchases.length)
    data?.map(e => ingresos = ingresos + (e.purchases.length * e.price))

    let nameUnit = []
    data.map(e => nameUnit.push(e.name))
    let ingresoUnit = []
    data.map(e => ingresoUnit.push(e.price * e.purchases.length))

    const masVendido = useSelector(state => state.infoSales.mostSaled)
    console.log(masVendido)
    if (loading) {
        return (
            <p>Cargando ...</p>
        )
    }
    // Informacion para el grafico 


    const grafico = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: nameUnit,
        datasets: [
            {
                label: '# of Votes',
                data: ingresoUnit,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
            },
        ],
        className: "graficoSupplier"
    };
    return (
        <div className={`datosHomeAdmin ${sidebar ? "sidebarAbierta" : "sidebarCerrada"}`}>
            <div className="threeColumsInfo">
                <div className="cardInfoSupplier">
                    <div className="datosCantidadesSup blueColor">
                        <p>{ventas}</p>
                        <FaShoppingCart />
                    </div>
                    <div className="containerBarritaSup">
                        <div className="barritaInfoSupplier blueColorBack"></div>
                        <div className="barritaInfoSupplier greyColor"></div>
                    </div>
                    <span><p>Actividades Vendidas</p></span>

                </div>
                <div className="cardInfoSupplier">
                    <div className="datosCantidadesSup greenColor">
                        <p>${ingresos}</p>
                        <MdAttachMoney />
                    </div>
                    <div className="containerBarritaSup">
                        <div className="barritaInfoSupplier greenColorBack"></div>
                        <div className="barritaInfoSupplier greyColor"></div>
                    </div>

                    <span><p>Ingresos Generados</p></span>
                </div>
                <div className="cardInfoSupplier">
                    <div className="datosCantidadesSup yellowColor">
                        <p>{rating}</p>
                        <BsFillStarFill />
                    </div>
                    <div className="containerBarritaSup">
                        <div className="barritaInfoSupplier yellowColorBack"></div>
                        <div className="barritaInfoSupplier greyColor"></div>
                    </div>

                    <span><p>Puntuacion General</p></span>
                </div>
            </div>
            <div className="graficosSupplier">
                <div className="topSalesUser">
                    <p><span>Actividades Más vendidas</span></p>
                    <div className="mostSaledSupplier">
                        <h5>Pos</h5>
                        <h5>Actividad</h5>
                        <h5>ventas</h5>
                    </div>
                    {
                        masVendido.map((e, i) => i < 5 &&
                            <div className="mostSaledSupplier">
                                <p>{i + 1}º</p>
                                <p>{e.name}</p>
                                <p>{e.purchases.length}</p>
                            </div>
                        )
                    }
                </div>
                <div className="graficoSupplier">
                    <p><span>Ingresos por actividad</span></p>
                    <Doughnut data={grafico} />
                </div>
            </div>
        </div>
    )
}

export default HomeAdminPanel
