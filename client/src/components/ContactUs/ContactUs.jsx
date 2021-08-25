import React from 'react';
import './ContactUS.css'
import emailjs, {init} from 'emailjs-com';
import swal from 'sweetalert'
//importar {init} desde 'emailjs-com' ;
init ("usuario_0gBAhTyw4hMs42ISKH7dB") ;



export default function ContactUs({idAct, email, name}) {
   


  function sendEmail(e) {
    e.preventDefault();
     //lowhenryapp@gmail.com
    //lowHenryAPP56
    emailjs.sendForm('service_i1z96rp', 'template_baascxi', e.target, 'user_cHmDXUTEs83MehBqlwcnL')
      .then((result) => {
          console.log(result.text);
          swal({
            title: "Enviado!",
            text: "Se envio correctamente",
            icon: "success",
            button: "Aceptar"
          })
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="formContact" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <div className="inputLinea"> 
        <label>Name</label>
        <input className="inputContact" type="text" name="user_name" value={name} />
      </div>
      <div className="inputLinea">
        <label>Email</label>
        <input className="inputContact" type="email" name="user_email" value={email}/> 
      </div>
      <div className="inputLinea">
        <label>Message</label>
        <textarea className="inputContact" name="message" />
      </div>
       <div className="posicionBtn">
       <input className="ui red inverted button" type="submit" value="Send" />
      </div>
    
    </form>
  );
}