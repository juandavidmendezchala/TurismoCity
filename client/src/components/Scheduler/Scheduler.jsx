import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import { REACT_APP_DEV_TOOLS, REACT_APP_API } from "../../store/Consts/Consts";
import style from "../../styles/AddSched.module.css";
import { schedAdd, getSchedAll } from "../../store/actions/actionsScheduler";

const Scheduler = (props) => {
  const [input, setInput] = useState({
    fechaini: "",
    fecharec: "",
    initialTime: "",
    tiempo: 0,
    notas: "",
  });
  const [errors, setErrors] = useState({});

  function validate(input) {
    let errors = {};
    if (!input.fechaini) {
      errors.fechaini = "Elija fecha de agenda";
    } else if (!input.fecharec) {
      errors.fecharec = "Elija fecha de recordatorio";
    } else if (input.fecharec > input.fechaini) {
      errors.fecharec = "Fecha de recordatorio debe ser menor o igual";
    } else if (input.initialTime <= 0) {
      errors.initialTime = "Ingrese duracion de agenda";
    } else if (!input.notas || input.notas.length <= 3) {
      errors.notas = "Ingrese detalle de agenda";
    }
    return errors;
  }

  const userSingin = useSelector((state) => state.userSignin);
  const { userInfo } = userSingin;

  useEffect(() => {
    if (userInfo) {
      props.getSchedAll(userInfo.id);
    }
  }, []);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const objGuardar = {
      userid: userInfo.id,
      fechaini: input.fechaini,
      fecharec: input.fecharec,
      horario: input.initialTime,
      tiempo: input.tiempo,
      notas: input.notas,
    };
    props.schedAdd(objGuardar);

    // document.getElementById("form").reset();
    setInput({
      fechaini: "",
      fecharec: "",
      initialTime: "",
      tiempo: 0,
      notas: "",
    });
    //    window.location.href="/scheduler"
    /*     console.log(objGuardar, "    ", input, "    ", resultado.data); */
  }

  if (userInfo) {
    return (
      <>
        <h1>Agenda de {userInfo.name}</h1>
        <div className={style.cajaform}>
          <form id="form">
            <div>
              <label>Fecha</label>
              <input
                className={errors.fechaini && style.danger}
                type="date"
                name="fechaini"
                value={input.fechaini}
                onChange={handleChange}
              ></input>
              {errors.fechaini && (
                <p className={style.danger}>{errors.fechaini}</p>
              )}
              <label>Fecha Recordatoria</label>
              <input
                className={errors.fecharec && style.danger}
                type="date"
                name="fecharec"
                value={input.fecharec}
                onChange={handleChange}
              ></input>
              {errors.fecharec && (
                <p className={style.danger}>{errors.fecharec}</p>
              )}
            </div>
            <div>
              <label>Hora de inicio:</label>
              <input
                className={errors.initialTime && style.danger}
                type="time"
                id="initialTime"
                name="initialTime"
                value={input.initialTime}
                onChange={handleChange}
              ></input>
              {errors.initialTime && (
                <p className={style.danger}>{errors.initialTime}</p>
              )}
            </div>
            <div>
              <label>Duracion</label>
              <input
                className={errors.tiempo && style.danger}
                type="number"
                name="tiempo"
                value={input.tiempo}
                onChange={handleChange}
              ></input>
              {errors.tiempo && <p className={style.danger}>{errors.tiempo}</p>}
            </div>
            <div>
              <label>Notas</label>
              <input
                className={errors.notas && style.danger}
                type="text"
                name="notas"
                value={input.notas}
                onChange={handleChange}
              ></input>
              {errors.notas && <p className={style.danger}>{errors.notas}</p>}
            </div>
            <button onClick={handleSubmit}>Agregar</button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Debe estar logueado para completar su agenda</h1>
    </>
  );
};

function mapStateToProps(state) {
  return {
    sheduledactividad: state.scheduled.sched_activity,
  };
}

function mapDispacthToProps(dispatch) {
  return {
    schedAdd: (elem) => dispatch(schedAdd(elem)),
    getSchedAll: (elem) => dispatch(getSchedAll(elem)),
  };
}

export default connect(mapStateToProps, mapDispacthToProps)(Scheduler);
