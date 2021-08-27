import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { REACT_APP_API } from "../../store/Consts/Consts";
import style from "../../styles/Emailsend.module.css";
import axios from "axios";

const EmailSender = (props) => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fechactual = day + "-" + month.toString().padStart(2, "0") + "-" + year;
  console.log(fechactual);

  console.log(fechactual);
  const [input, setInput] = useState({
    fecha: fechactual,
  });
  const [result, setResult] = useState([{}]);
  const [resultado, setResultado] = useState({});
  const [deseados, setDeseados] = useState({});

  const userSingin = useSelector((state) => state.userSignin);
  const { userInfo } = userSingin;

  useEffect(async () => {
    const mailsenviados = await axios.get(`${REACT_APP_API}/emailsended`);
    setResultado(mailsenviados);
    console.log(mailsenviados.data);
  }, [result]);

  const handleEnviar = async (e) => {
    e.preventDefault();
    const enviando = await axios.post(
      `${REACT_APP_API}/sched-email/${input.fecha}`
    );
    /* .then(response => setResult(response)) */
    setResult(enviando);
    console.log(enviando);
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  async function handleDesear(e) {
    e.preventDefault();
    const deseando = await axios.get(`${REACT_APP_API}/whish-emails`);
    setDeseados(deseando);
    console.log(deseando.data)
  }

  if (userInfo) {
    return (
      <>
        <h1 className={style.tituno}>
          Envío de recordatorios de agenda de usuarios
        </h1>
        <div className={style.boxform}>
          <form>
            <label>Fecha de recordatorio: </label>
            <input
              id="fecha"
              name="fecha"
              type="date"
              value={input.fecha}
              onChange={handleChange}
            ></input>
            <button className={style.LinkGetIt} onClick={handleEnviar}>Enviar Recordatorios</button>
          </form>
        </div>
        <h1 className={style.tituno}>{result.data}</h1>
        <h2 className={style.titdos}>
          Recordatorios enviados:{" "}
          {!resultado.data ? "0" : resultado.data.length}
        </h2>
        <hr />
        <h1 className={style.tituno}>
          Envío diario a usuarios que guardaron deseos de viajes
        </h1>
        <div className={style.boxform}>
          <form>
            <label>Avisar actividades que matcheen con deseos guardados</label>
            <button className={style.LinkGetIt} onClick={handleDesear}>
              Enviar mail con actividades
            </button>
          </form>
        </div>
        <h1 className={style.tituno}>Deseos {!deseados.data ? "" : deseados.data.message}</h1>
              </>
    );
  }

  return (
    <>
      <h1 className={style.tituno}>
        Debe estar logueado para como Admin para enviar correos
      </h1>
    </>
  );
};

export default EmailSender;
