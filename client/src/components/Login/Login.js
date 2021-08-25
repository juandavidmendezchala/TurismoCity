//instalar axios, md5, universal-cookie

import { Component } from "react";
import "./Login.css"
import axios from 'axios'
import md5 from 'md5' // para el cifrado de la pw
import Cookies from 'universal-cookie'


const baseUrl='http://localhost:3001/users' //El url/nombre de la base de datos o api
const cookies = new Cookies();


class Login extends Component {
    state ={
        form:{
            usarname: '',
            password: ''
        }
    }
    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    
   iniciarSesion= async() =>{
        await axios.get(baseUrl, {params: {email: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response =>{
            console.log(response.data)
        })
        .then(response =>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: '/'})
                cookies.set('nombre', respuesta.nombre, {path: '/'})
                cookies.set('apellido', respuesta.apellido, {path: '/'})
                cookies.set('username', respuesta.username, {path: '/'})
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`)
                window.location.href=''//aqui va la direccion del home con ./
            }else{
                alert ('El usuario o la contraseña no es correcta')
            }
        })
        .catch(error=>{
            console.log(error)
        })
    } 

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href=''//aqui va la direccion del home con ./
        }
    }

    
    render () {
        return (
            <div className ='cointainerPrincipal'>
            <div className='contarnerSecundario'>
            <div className='form-group'>
                <label>Usuario:</label>
                <br/>
                <input 
                type='text' 
                className='form-control'
                name='username'
                onChange={this.handleChange}
                />
                <br/>
                <label>Contraseña:</label>
                <br/>
                <input 
                type='password'
                className='form-control'
                name='password'
                onChange={this.handleChange}
                />
                <button className ="btn btn-primary" onClick={()=>this.iniciarSesion()}>Iniciar sesion</button>
            </div>
            </div>
            </div>
        )
    }
}

export default Login