import './LandingExperiences.css';
import React, { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { changeState } from '../../store/actions/stateComponents';
import video from './Activity1.mp4';
import image from './woman.jpg';

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
            <a className='ExperiencesButton' href='/experiences/page2'>VAMOS!</a>
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
            <div className='ExperiencesExplanationDiv'>
              <p className='ExperiencesQuestion'>¿Qué significa ofrecer experiencias?</p>
              <p className='ExperiencesExplanation'>Lo que significa es que los vendedores podemos decir que esta es una oracion
              que no tiene ningun sentido, estoy escribiendo para hacer algo de lugar y poder ver como quedaria un texto, me aburre
              usar el texto de siempre en Latin por eso estoy haciendo esto jaja</p>
            </div>
            <img src={image} className='ExperienceImage'/>
        </div>
    </div>
  )
}