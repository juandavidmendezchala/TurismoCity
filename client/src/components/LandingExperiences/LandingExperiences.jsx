import './LandingExperiences.css';
import React, { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { changeState } from '../../store/actions/stateComponents';
import video from './Activity1.mp4';
import image from './woman.jpg';
import image1 from './trail-running-1245982__340.jpg';
import image2 from './Horse.jpg';
import image3 from './hot-air-balloons-5630493_1920.jpg';


export default function LandingExperiences() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(changeState(false));
    return () => dispatch(changeState(true));
    },[])

  return (
    <div className='ExperiencesBack'>
        <video src={video} loop autoPlay muted preload='auto' playsinline className='ExperiencesVideo'/>
        <div className='ExperiencesTitle'>
            <p className='ExperienceTitle_p'>Animate a ofrecer experiencias</p>
            <a className='ExperiencesButton' href='/suppliers'>VAMOS!</a>
        </div>
        <a className='ExperiencesLowHenry' href='/'> {'<< LowHenry'}</a>
        <div className='ExperiencesSecondBack'>
            <div className='ExperiencesExplanationDiv'>
              <p className='ExperiencesQuestion'>¿Qué significa ofrecer experiencias?</p>
              <p className='ExperiencesExplanation'>Lo que significa es que los vendedores podemos decir que esta es una oracion
              que no tiene ningun sentido, estoy escribiendo para hacer algo de lugar y poder ver como quedaria un texto, me aburre
              usar el texto de siempre en Latin por eso estoy haciendo esto jaja</p>
            </div>
            <img src={image} className='ExperienceImage'/>
        </div>
        <div className='ExperiencesThirdBack'>
            {/* <div className='ExperiencesExplanationDiv'>
              <p className='ExperiencesQuestion'>¿Qué significa ofrecer experiencias?</p>
              <p className='ExperiencesExplanation'>Lo que significa es que los vendedores podemos decir que esta es una oracion
              que no tiene ningun sentido, estoy escribiendo para hacer algo de lugar y poder ver como quedaria un texto, me aburre
              usar el texto de siempre en Latin por eso estoy haciendo esto jaja</p>
            </div> */}
            <div>
              <img src={image1} className='ExperienceImage3'/>
              <h3 className='ThirdTitles'>HOLA que tal este es un nuevo texto  que no tiene ningun sentido, estoy escribiendo para hacer algo de lugar y poder ver como quedaria un texto, me aburre
              usar el texto de siempre en Latin por eso estoy haciendo esto jaj</h3>
            </div>
            <div>
              <img src={image2} className='ExperienceImage3'/>
              <h3 className='ThirdTitles'>HOLA que tal este es un nuevo texto  que no tiene ningun sentido, estoy escribiendo para hacer algo de lugar y poder ver como quedaria un texto, me aburre
              usar el texto de siempre en Latin por eso estoy haciendo esto jaj</h3>
            </div>
            <div>
              <img src={image3} className='ExperienceImage3'/>
              <h3 className='ThirdTitles'>HOLA que tal este es un nuevo texto  que no tiene ningun sentido, estoy escribiendo para hacer algo de lugar y poder ver como quedaria un texto, me aburre
              usar el texto de siempre en Latin por eso estoy haciendo esto jaj</h3>
            </div>
            
           
            
        </div>
    </div>
  )
}