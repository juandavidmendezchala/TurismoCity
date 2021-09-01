import './FormComment.css'
import React, {useState, useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {postQuestion} from '../../store/actions/questionAction'
//import swal from 'sweetalert'
import swal from 'sweetalert2'
import ProductDisplay from '../Checkout/Checkout'
export const FormComment = ({activityId, userId}) => {

  const [state, setState] = useState({
    query:''
  })

  const dispatch = useDispatch()
    
  const handlerOnSubmit = (e) => {
    e.preventDefault()
    //console.log(state)
    
    const {query} = state
    
    dispatch(postQuestion(query,activityId, userId, new Date().toISOString().split('T')[0]))
    // si no uso Hooks uso props.addContact(name, phone, address)
    //props por parametro en el componente
    //seteamos el estado
    setState({
        query:' '
    })

    //swal("Registrado!", "Tu mensaje ha sido registrado correctamente!", "success");
    swal.fire({
      title: 'Tu mensaje ha sido registrado correctamente!',
      showConfirmButton: true,
    })
   }

   function handlerChange(e){ //se encarga de actualizar el estado
    //crea nuevo estado
    //setea el estado previo
    setState({
      ...state,
      //le paso la propiedad que cambie
      [e.target.name] : e.target.value //cuando name no es el nombre se usa corchtes
     })
  
 }
 const message= function(e){
  e.preventDefault()
  swal.fire({
    title: 'Debes loguearte para poder comentar',
    showConfirmButton: true,
  })
 }
 
    return (
       <div className="divContieneForm">
          <h1 className="formH1">Preguntas</h1>
          {userId?(<form onSubmit={handlerOnSubmit}>
            <div>
            <textarea className="estiloText" name="query" id="" cols="30" rows="10" placeholder="Escribi tu pregunta aca.." onChange={handlerChange} required></textarea>
            </div>
            <div>
            <input className={"botonComment"} type="submit" value="Preguntar"/>
            
            </div>
            
          </form>

          ):(<form onSubmit={message}>
            <div>
            <textarea readonly='true' className="estiloText" name="query" id="" cols="30" rows="10" placeholder="Escribi tu pregunta aca.." onChange={handlerChange} required></textarea>
            </div>
            <div>
            <input className={"botonCommentDisable"} type="submit" value="Preguntar"/>
            
            </div>
            
          </form>)}
          

       </div>
         
    
     )
    
}
