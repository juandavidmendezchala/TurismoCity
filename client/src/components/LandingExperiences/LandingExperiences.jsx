import './LandingExperiences.css';
import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { changeState } from '../../store/actions/stateComponents';
import video from './Activity1.mp4';
import image from './woman.jpg';
import image1 from './trail-running-1245982__340.jpg';
import image2 from './Horse.jpg';
import image3 from './hot-air-balloons-5630493_1920.jpg';
import { useAuth0 } from '@auth0/auth0-react';


export default function LandingExperiences(props) {


    const dispatch = useDispatch();

    const { loginWithRedirect } = useAuth0();

    const user = useSelector(state => state.userSignin)
    const {userInfo} = user;

    const handleClick = () => {
      if(userInfo) {
        props.history.push('/suppliers')
      } else {
        loginWithRedirect()        
      }
    }

    useEffect(()=>{
      if(userInfo?.isAdmin === true) {
        props.history.push('/suppliers')
      }
        dispatch(changeState(false));
    return () => dispatch(changeState(true));
    },[])

  return (
    <div className='ExperiencesBack'>
        <video src={video} loop autoPlay muted preload='auto' playsinline className='ExperiencesVideo'/>
        <div className='ExperiencesTitle'>
            <p className='ExperienceTitle_p'>Animáte a ofrecer experiencias</p>
            <button className='ExperiencesButton' onClick={() => handleClick()} >VAMOS!</button>
        </div>
        <a className='ExperiencesLowHenry' href='/'> {'<< LowHenry'}</a>
        <div className='ExperiencesSecondBack'>
            <div className='ExperiencesExplanationDiv'>
              <p className='ExperiencesQuestion'>¿Qué significa ofrecer experiencias?</p>
              <p className='ExperiencesExplanation'>Ofrecer experiencias significa tener la posibilidad 
              de compartir las pasiones que más te entusiasman con personas alrededor del mundo, ofreciendo
              emociones que trascienden el espacio y el tiempo, guiando al mundo a vivir las cosas
              más increíbles, trascendentales, y magníficas. ¡Cambiá el mundo de los demás, mientras
              cambiás el tuyo! ¿Qué esperás para compartir tu chispa con el mundo? </p>
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
              <h3 className='ThirdTitles'>Encontrá personas que compartan tu misma pasión, comparte con
              personas de todo el mundo, guiándolas a descubrir cosas nuevas, ¡al mismo
              tiempo que obtenés un ingreso y nuevas experiencias!</h3>
            </div>
            <div>
              <img src={image2} className='ExperienceImage3'/>
              <h3 className='ThirdTitles'>Desde una clase de Yoga, un tour por la ciudad, a un paseo
              a caballo. Las posibilidades son infinitas. Si existe algo que te apasiona y querés compartir,
              miles de personas están esperando a encontrarte, ¡Y ambos están en el lugar correcto!</h3>
            </div>
            <div>
              <img src={image3} className='ExperienceImage3'/>
              <h3 className='ThirdTitles'>La vida se compone de momentos, ideas, y emociones. Y hoy es
              el momento de que compartás tu emoción con el resto del mundo. ¡Y eso es una excelente idea!
              Estamos encantados de hacer parte de tu pasión, ¡Este viaje apenas comienza!</h3>
            </div>
            
           
            
        </div>
    </div>
  )
}