import React, { useEffect, useState  } from "react";
import { useSelector } from "react-redux";
import { REACT_APP_API } from "../../store/Consts/Consts";
import axios from 'axios'

const EmailSender = (props) => {
  
  let date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let fechactual = day+"-"+month.toString().padStart(2,'0')+"-"+year
  console.log(fechactual)

  console.log(fechactual)
  const [input, setInput] = useState({
    fecha: fechactual,
  });
  const [result, setResult] = useState([{}]);
  const [resultado, setResultado] = useState({})

  const userSingin = useSelector((state) => state.userSignin);
  const { userInfo } = userSingin;

  useEffect( async () => {
    const mailsenviados = await axios.get(`${REACT_APP_API}/emailsended`)
    setResultado(mailsenviados)
    console.log(mailsenviados.data)
  },[result])

  const handleEnviar = async (e) => {
    e.preventDefault();
     const enviando = await axios.post(`${REACT_APP_API}/sched-email/${input.fecha}`)
     /* .then(response => setResult(response)) */
     setResult(enviando)
    console.log(enviando)
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  if (userInfo) {
  return (
    <>

    <h1>Enviar los recordatorios (por ahora a mano)</h1>
      <form>
        <label>Fecha de recordatorio</label>
        <input
          id="fecha"
          name="fecha"
          type="date"
          value={input.fecha}
          onChange={handleChange}
        ></input>
        <button onClick={handleEnviar}> Enviar Recordatorios</button>
      </form>
        <h1>{result.data}</h1>
        <h2>Recordatorios enviados: { !resultado.data ? "0" : resultado.data.length }</h2> 
    </>
  );}

  return (
    <>
      <h1>Debe estar logueado para como Admin para enviar correos</h1>
    </>
  );
};

export default EmailSender;
