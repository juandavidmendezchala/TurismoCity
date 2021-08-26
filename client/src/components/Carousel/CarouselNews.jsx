import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import Slider from 'react-slick'
import stone from './S.png'
import ast from './A.png'
import rick from './R.png'
import brain from './B.png'
import wars from './W.png'
import hom from './H.png'

import './carouselNews.css'
import { useEffect } from "react/cjs/react.development";
import { getNews } from "../../store/actions/newsActions";

const images = [stone, ast, rick, brain, wars, hom]




const CarouselNews = () => {

    const News = useSelector(state => state.news)

    const dispatch = useDispatch()

    const { loading, news } = News

    useEffect(() => {
        dispatch(getNews())
        // console.log('ahora', news)
    }, [])

    const NextArrow = ({ onClick }) => {
        return (
            <div className='arrow next' onClick={onClick}>
                ▶
            </div>
        )
    }
    const PrevArrow = ({ onClick }) => {
        return (
            <div className='arrow prev' onClick={onClick}>
                ◀
            </div>
        )
    }
    const [imageIdx, SetImageIdx] = useState(0);
    console.log(news);


    const settings = {
        dots: true,
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
        autoplaySpeed: 10000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => SetImageIdx(next),
    };
    return (

        <div className='carrouselFirst'>

            <Slider {...settings}>
                {news?.map((news, id) => (
                    <div className={id === imageIdx ? 'imageActiveSlide' : 'slide'}>
                        <div className="container-carousel">
                            <h2 className="newstitle">{news.title}</h2>
                            {/* <img className='imagCarusel' height="150px" src={news.image} alt={news.title} /> */}
                            <p className="newstext">{news.description}</p>

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarouselNews
