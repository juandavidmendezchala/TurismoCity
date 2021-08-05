import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import airports from "../../assets/airports.json"
import "./DinamicSearch.css"

const DinamicSearch = () => {
    const [users, serUsers] = useState([]);
    const [text, setText] = useState('');
    const [sug, setSug] = useState([])

    useEffect(() => {
        const loadUsers = async () => {
            const response = await axios.get('http://localhost:3001/allAirports')
            // const response = await airports
            // console.log(response[0].code)
            serUsers(response.data)
        }
        loadUsers()
    }, [])
    const onSugHandle = (text) => {
        setText(text)
        console.log(sug[0])
        setSug([])
    }
    const onChangeHandle = (text) => {
        let matches = []
        if (text.length > 0) {
            matches = users.filter(user => {
                const regex = new RegExp(`${text}`, "gi")
                // return user.email.match(regex)
                return user.city.match(regex)

            })
        }
        console.log('matches', matches)
        setSug(matches)
        setText(text)
    }
    return (
        <div className="Container">
            {/* <div>{text}</div> */}
            <input type="text" className="inputSearch"
                onChange={e => onChangeHandle(e.target.value)}
                value={text}

            />
            {sug && sug.map((sug, i) => i < 5 &&
                <div className="inputSug" key={i} onClick={() => onSugHandle(sug.code)}> {sug.city} {sug.name} {(sug.code)}  </div>
            )}

        </div>
    )
}

export default DinamicSearch
