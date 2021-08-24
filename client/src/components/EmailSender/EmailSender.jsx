import { useState } from "react";
import { REACT_APP_API } from "../../store/Consts/Consts";
import axios from 'axios'

const EmailSender = () => {
  const [input, setInput] = useState({
    fecha: "",
  });
  const [result, setResult] = useState([{}]);

  const handleEnviar = async (e) => {
    e.preventDefault();
     const enviando = await axios.post(`${REACT_APP_API}/sched-email/${input.fecha}`)
     /* .then(response => setResult(response)) */
     setResult(enviando)

  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
    <h1>Enviar los recordatorios (por ahora a mano)</h1>
      <form>
        <label>Fecha de recordatorio</label>
        <input
          name="fecha"
          type="date"
          value={input.fecha}
          onChange={handleChange}
        ></input>
        <button onClick={handleEnviar}> Enviar Recordatorios</button>
      </form>
 {/*      <h1>{result}</h1> */}
    </>
  );
};

export default EmailSender;
