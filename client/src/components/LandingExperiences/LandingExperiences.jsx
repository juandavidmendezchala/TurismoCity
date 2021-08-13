import './LandingExperiences.css';
import React, { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { changeState } from '../../store/actions/stateComponents';
import video from './Activity1.mp4';

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
    </div>
  )
}