import react from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://gmail.us5.list-manage.com/subscribe/post?u=1ebaeaba3338a561e08b03dd4&amp;id=f4e5079eba";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />

// use the render prop and your custom form
const newsletter = () => (
    <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
            <div style={{
                background: "#0F3057",
                borderRadius: 2,
                padding: 10,
                display: "inline-block"
            }}>
                <SimpleForm onSubmitted={formData => subscribe(formData)} />
                {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
            </div>
        )}
    />
)

export default newsletter





// import React from 'react';
// import emailjs from 'emailjs-com';
// import { useDispatch } from 'react-redux';
// import { newsletter } from '../../store/actions/newsletter';
// import './Newsletter.css';
// import axios from "axios";
// import { useState } from 'react/cjs/react.development';

// export default function ContactUs() {
//     const dispatch = useDispatch();

//     const [nombre, setNombre] = useState("")
//     const [apellido, setApellido] = useState("")
//     const [email, setEmail] = useState("")



//     const sendEmail = (e) => {
//         e.preventDefault()
//         dispatch(newsletter(nombre, apellido, email))
//     }

//     return (
//         <form className="contact-form" onSubmit={sendEmail}>
//             <input type="text" name={nombre} onChange={e => { setNombre(e.target.value) }} />
//             <label>Nombre</label>
//             <input type="text" name={apellido} onChange={e => { setApellido(e.target.value) }} />
//             <label>Apellido</label>
//             <input type="email" name={email} onChange={e => { setEmail(e.target.value) }} />
//             <label>Email</label>
//             <button>Suscribirme</button>
//         </form>
//     );
// }
