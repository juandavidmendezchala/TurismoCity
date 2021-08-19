import React from "react";
import { useState } from "react";
import Slider from 'react-slick'
import stone from './S.png'
import ast from './A.png'
import rick from './R.png'
import brain from './B.png'
import wars from './W.png'
import hom from './H.png'

import './carouselNews.css'

const images = [stone, ast, rick, brain, wars, hom]




const CarouselNews = () => {
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
                {images.map((img, id) => (
                    <div className={id === imageIdx ? 'imageActiveSlide' : 'slide'}>
                        <img className='imagCarusel' src={img} alt={img} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CarouselNews
