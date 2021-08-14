import { Component } from 'react';
import { response } from 'express';
import axios from 'axios'


class App extends Component{
   state={
       ciudades:[],
       paises:{}
   }
    componentDidMount(){
    axios.get('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates.json')
    .then((response)=>{
        console.log(response)
        this.setState({ciudades:response.data})
    })
    .catch((error)=>{
        console.log(error)
    })
}
render (){
    return (
    <div className="App">
        <div className='form-group'>
            <select name='ciudades' className='form-control'>
               {this.state.ciudades.map(elemento=>(
                   <option key={elemento.id} value={elemento.id}>{elemento.ciudad}</option>
               ))}
            </select>
        </div>
    </div>
)}
}
export default App