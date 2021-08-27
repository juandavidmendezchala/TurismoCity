import React from 'react'
import ChatBot from 'react-simple-chatbot';
import "./Chatbot.css"
import { ThemeProvider } from 'styled-components';

import { NavLink } from "react-router-dom"
import ButtonChatBot from './ButtonChatBot';


const theme = {

    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#0F3057',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#0F3057',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const ChatBotLanding = () => {
    return (

        <ThemeProvider theme={theme}>
            <ChatBot
                steps={[
                    {
                        id: 1,
                        message: "Hola viajero! En que te puedo ayudar?",
                        trigger: 2
                    },
                    {
                        id: 2,
                        options: [
                            { value: "actividades", label: "Actividades", trigger: "Actividades" },
                            { value: "vuelos", label: "Vuelos", trigger: "Vuelos" }
                        ]
                    },
                    {
                        id: "Vuelos",
                        message: "Completa el formulario y busca el mejor vuelo para vos!",
                        trigger: "Ok"
                    },
                    {
                        id: "Actividades",
                        component: (<div>
                            <h3>Descubri todas las actividades que tenemos en tu destino ingresando a Paquete de Actividades</h3>
                            <NavLink className="ActivitiesBotDesign" to="/activities">Click aqui para ver actividades</NavLink>
                        </div>
                        ),
                        trigger: "Ok"
                    },
                    {
                        id: "Ok",
                        options: [
                            { value: "Okay", label: "Continuar", trigger: "Repregunta" }
                        ],

                    },
                    {
                        id: "Repregunta",
                        message: "Queres saber sobre algo mas?",
                        trigger: "si/no"
                    },
                    {
                        id: "si/no",
                        options: [
                            {
                                value: "Si", label: "Si", trigger: 2
                            },
                            { value: "No", label: "No", trigger: 11 }
                        ]
                    },
                    {
                        id: 11,
                        message: "Espero haberte ayudado! Estoy aqui por si me necesitas."
                    }
                    // {
                    //     id: 1,
                    //     message: 'Hola viajero! En que te podemos ayudar? ',
                    //     trigger: 2
                    // },
                    // {
                    //     id: 2,
                    //     options: [
                    //         { value: 1, label: "Vuelos", trigger: 3 },
                    //         { value: 2, label: "Actividades", trigger: 10 }
                    //     ],
                    //     trigger: 3
                    // },
                    // {
                    //     id: 3,
                    //     message: "En que tipo de destino estas pensando?",
                    //     trigger: 5
                    // },
                    // {
                    //     id: 5,
                    //     options: [
                    //         { value: 1, label: "Playa", trigger: 12 },
                    //         { value: 2, label: "Montaña", trigger: 13 },
                    //         { value: 3, label: "Desierto", trigger: 14 },
                    //         { value: 4, label: "Selva", trigger: 15 }
                    //     ]
                    // },
                    // {
                    //     id: 6,
                    //     options: [
                    //         { value: 1, label: "Montañas" }
                    //     ]
                    // },
                    // {
                    //     id: 10,
                    //     message: "En que tipo de actividades estas pensando?",
                    //     trigger: 16
                    // },
                    // {
                    //     id: 12,
                    //     message: "El caribe te esta esperando, agarraste el protector?"
                    // },
                    // {
                    //     id: 13,
                    //     message: "Volvio a nevar en la Patagonia, pensaste en ponerte los skies?"
                    // },
                    // {
                    //     id: 14,
                    //     message: "El desierto peruano esta que ARDE!"
                    // },
                    // {
                    //     id: 15,
                    //     message: "Vivi Amazonas y conoce las ruinas peruanas mas imponentes de America del Sur"
                    // },
                    // {
                    //     id: 16,
                    //     options: [
                    //         {
                    //             value: 1, label: "Deportivas", trigger: "ActividadesDeportivas"
                    //         },
                    //         {
                    //             value: 2, label: "Turisticas", trigger: "ActividadesTuristicas"
                    //         },
                    //     ]
                    // },
                    // {
                    //     id: "ActividadesDeportivas",
                    //     options: [
                    //         {
                    //             history: ""
                    //         }
                    //     ]
                    // },
                    // {
                    //     id: "ActividadesTuristicas",
                    //     options: [
                    //         {
                    //             value: 1, label: "Atracciones", trigger: "Atracciones"
                    //         },
                    //         {
                    //             value: 2, label: "Recorridos y Tours", trigger: "Recorridos"
                    //         },

                    //     ]
                    // },
                    // {
                    //     id: "Atracciones",
                    //     message: "Descubri todas nuestras atracciones"
                    // },
                    // {
                    //     id: "Recorridos",
                    //     message: "Descubri los mejores tours y recorridos"
                    // }
                    // // {
                    // //     id: 2,
                    // //     options: [
                    // //         { value: 1, label: 'Vuelos', trigger: '4' },
                    // //         { value: 2, label: 'Actividades', trigger: '3' },
                    // //     ],
                    // // },

                ]}
            />
        </ThemeProvider>


    )
}

export default ChatBotLanding
