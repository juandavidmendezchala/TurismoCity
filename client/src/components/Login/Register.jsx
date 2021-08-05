import React, {Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class Register extends Component {
    state = {
        email:'',
        name:'',
        lastname:'',
        birthday:'',
        password:''
    }

    valueToState = ({name, value, type}) =>{
        this.setState(()=> {
            return {[name]: type === value}
        })
    }

    
    render () {
        console.log (this.props)
        return (
            <form>
                <div>
                <label>Registracion</label>
                </div>
                <div>
                <label>Usuario/Email</label>
                <Field name='email' type='email' component='input' onChange= {event =>this.valueToState(event.target)}/>
                </div>
                <div>
                <label>Nombre</label>
                <Field name='name' type='text' component='input' onChange= {event =>this.valueToState(event.target)}/>
                </div>
                <div>
                <label>Apellido</label>
                <Field name='lastname' type='text' component='input' onChange= {event =>this.valueToState(event.target)}/>
                </div>
               {/*  <div>
                <label>Fecha de nacimiento</label>
                <Field name='birth' type='' component='input'/>
                </div> */}
                <div>
                <label>Password</label> 
                <Field name='password' type='password' component='input' onChange= {event =>this.valueToState(event.target)}/>
                </div>
                <button type='submit'>Crear nuevo usuario</button>
            </form>
        )

    }
}

export default Register