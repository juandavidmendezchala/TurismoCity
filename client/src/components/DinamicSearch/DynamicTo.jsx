import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import "./DinamicSearch.css"
import { placeTo } from '../../store/actions/fromTo'

const DinamicSearch = () => {

    const dispatch = useDispatch();
    const [users, serUsers] = useState([]);
    const [to, setTo] = useState('')
    const [sug, setSug] = useState([]);



    useEffect(() => {
        const loadUsers = async () => {
            const response = await axios.get('http://localhost:3001/allAirports')
            // const response = await airports
            // console.log(response[0].code)
            serUsers(response.data)
        }
        loadUsers()
    }, [])

    const onSugTo = (text) => {
        setTo(text)
        dispatch(placeTo(text))
        setSug([])
    }

    const onChangeHandle = (e) => {
        let matches = []
        const value = e.target.value
        if (value.length > 0) {
            matches = users.filter(user => {
                const regex = new RegExp(`${value}`, "gi")
                // return user.email.match(regex)
                return user.city.match(regex)

            })
        }
        console.log('matches', matches)
        setSug(matches)
        setTo(e.target.text)
    }

    return (
        <div className="Container">
            {/* <div>{text}</div> */}
            <input type="text" className="inputSearch" name="To"
                onChange={e => onChangeHandle(e)}
                value={to}

            />
            {sug && sug.map((sug, i) => i < 5 &&
                <div className="inputSug" key={i} onClick={() => onSugTo(sug.code)}> {sug.city} {sug.name} {(sug.code)}  </div>
            )}

        </div>
    )
}

export default DinamicSearch;