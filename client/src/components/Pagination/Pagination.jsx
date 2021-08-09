import React, { useEffect, useState } from 'react';
import './Pagination.css'


export default function Pagination(props) {


    const pageNumbers = [];
    for (var i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pageNumbers.push(i)
    }
    const [state, setState] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [index, setIndex] = useState(0);
    const [estado, setEstado] = useState(1);

    useEffect(async() => {
        await setState(pageNumbers.slice(index, index + 10))
    }, [index])
    useEffect(() => {
        props.paginate(estado)
    }, [estado])


    const indexChangeUp = function () {
        if (index < pageNumbers.length - 10) {
            setIndex(index + 1);
            setState(pageNumbers.slice(index, index + 10)) //[1,2,3,4,5,6,7,8,9,10,11,12
        }
        if (estado < pageNumbers.length) {
            setEstado(estado + 1);
            props.paginate(estado)

        }
    }

    const indexChangeDown = function () {
        console.log('ESTE ES EL INDEX', index)
        console.log('ESTE ES EL ESTADO', estado)
        if (index < 1) setIndex(estado - 1);
        if (index > 0) {
            setIndex(index - 1);
            setState(pageNumbers.slice(index, index + 10))
            setEstado(estado - 1)
        }
        props.paginate(estado)
    }

    const numberPage = function (number, e) {
        props.paginate(number)
        setEstado(number);

    }

    return (

        <div>
            {
                <ul class="pagination">
                    <li><span className={estado === 1 ? 'inable' : 'active'} onClick={() => indexChangeDown()}>Previous «</span></li>
                    {state.map(number => <li><a className={estado === number ? 'active' : null} key={number} name={number} href='#' onClick={(e) => numberPage(number, e)}>{number}</a></li>

                    )}
                    <li><span className={estado === pageNumbers.length ? 'inableNext' : 'active'} onClick={() => indexChangeUp()}>» Next - {pageNumbers.length} pages</span></li>
                </ul>
            }


        </div>

    )
}