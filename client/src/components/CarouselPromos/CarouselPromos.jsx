import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import Slider from 'react-slick'
import { useEffect } from "react/cjs/react.development";
// import { getPromos } from "../../store/actions/promosActions";
import { getNews } from "../../store/actions/newsActions";
import './carouselPromos.css'

const promos = [
    { title: '12 CUOTAS SIN INTERES CON TODOS LOS BANCOS', description: 'EN TODAS LA ACTIVIDADES DE ARGENTINA' }, { title: '20% CON BANCO GALICIA', description: 'EN TODAS LA ACTIVIDADES DE ARGENTINA' }, { title: '2X1 PAGA UNO DISFRUTAN 2', description: 'EN TODAS LA ACTIVIDADES EN LA NIEVE' }, { title: '24 CUOTAS CON INTERES CON TARJETA', description: 'EN TODAS LA ACTIVIDADES EN AFRICA' },
]

const CarouselPromos = () => {

    // const News = useSelector(state => state.news)

    // const dispatch = useDispatch()

    // const { loading, news } = News

    // useEffect(() => {
    //     dispatch(getNews())
    //     // console.log('ahora', news)
    // }, [])

    const NextArrow = ({ onClick }) => {
        return (
            <div className='arrow nextP' onClick={onClick}>
                ▶
            </div>
        )
    }
    const PrevArrow = ({ onClick }) => {
        return (
            <div className='arrow prevP' onClick={onClick}>
                ◀
            </div>
        )
    }
    const [imageIdx, SetImageIdx] = useState(0);



    const settings = {
        dots: false,
        // fade: true,
        infinite: true,
        lazyload: true,
        // speed: 300,
        // centerMode: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        // slidesToScroll: 1,
        autoplay: true,
        // speed: 15000,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => SetImageIdx(next),
    };
    return (

        <div className='carrouselFirstPromos'>
            <Slider {...settings}>
                {promos?.map((news, id) => (
                    <div className={id === imageIdx ? 'imageActiveSlidePromos' : 'slidePromos'}>
                        <div className="container-carouselPromos">
                            <h2 className="newstitlePromos">{news.title}</h2>
                            {/* <img className='imagCarusel' height="150px" src={news.image} alt={news.title} /> */}
                            <p className="newstextPromos">{news.description}</p>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarouselPromos
