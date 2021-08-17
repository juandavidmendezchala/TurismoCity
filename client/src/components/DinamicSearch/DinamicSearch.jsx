import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import "./DinamicSearch.css"
import { infoFligth } from '../../store/actions/infoFlight'
import { infoFligthTo } from '../../store/actions/infoFlightTo'
import { REACT_APP_API } from '../../store/Consts/Consts'

const DinamicSearch = ({ id }) => {

    const dispatch = useDispatch();
    const [users, serUsers] = useState([]);
    const [text, setText] = useState("");
    const [visible, setVisible] = useState("");
    const [sug, setSug] = useState([])


    useEffect(() => {
        const loadUsers = async () => {
            const response = await axios.get(`${REACT_APP_API}/allAirports`)
            serUsers(response.data)
        }
        loadUsers()
    }, [])

    const onSugHandle = (text, visible) => {
        setText(text)
        setVisible(visible)

        if (id === "0") {
            dispatch(infoFligth(text))
        } else {
            //Modificar accion para que despache al TO
            dispatch(infoFligthTo(text))
        }

        setSug([])
    }
    const onChangeHandle = (text) => {
        let visible = text
        let matches = []
        if (text.length > 0) {
            matches = users.filter(user => {
                const regex = new RegExp(`${text}`, "gi")
                // return user.email.match(regex)
                return user.city.match(regex)
            })
        }
        setSug(matches)
        setText(text)
        setVisible(visible)

    }
    return (

        <div className="ContainerDinamicSearch" id={id}>
            {/* <div>{text}</div> */}

            <input type="hidden" className="inputSearch"

                onChange={e => onChangeHandle(e.target.value)}
                value={text}
            /><input type="text"
                className="inputSearch" placeholder='Buscar por ciudad o aeropuerto' icon='map marker alternate' iconPosition='left'

                onChange={e => onChangeHandle(e.target.value)}
                value={visible}
            />


            {sug && sug.map((sug, i) => i < 5 &&
                <div className="inputSug" key={i} onClick={() => onSugHandle(sug.code, sug.city)}> <span className='avioncito'> &#9992; </span> {sug.city} {sug.name} {(sug.code)}  </div>
            )}

        </div>
    )
}

export default DinamicSearch