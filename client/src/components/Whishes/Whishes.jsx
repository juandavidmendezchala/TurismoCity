import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, connect } from "react-redux";
import { getActivityAll, getActivityNoDest, whishAdd } from "../../store/actions/actionsWhishes";

import { REACT_APP_API } from "../../store/Consts/Consts";
import style from "../../styles/AddSched.module.css";

const Whishes = (props) => {
    const [input, setInput] = useState({
        fechaini: "",
        fechafin: "",
        destino:"",
        presupuesto:0,
        notas:"",
        cupos: 1
    })

    const [errors, setErrors] = useState({})

    function validate(input) {
        let errors = {};
        if (!input.fechaini) {
          errors.fechaini = "Elija fecha de inicio";
        } else if (!input.fechafin) {
          errors.fechafin = "Elija fecha de fin";
        } else if (input.fechafin < input.fechaini) {
          errors.fecharec = "Fecha de final debe ser mayor";
        } /* else if (!input.destino || input.destino.length <= 3) {
          errors.destino = "Ingrese destino de su agrado";
        } */ else if (!input.presupuesto || input.presupuesto <= 0) {
            errors.presupuesto = "Ingrese un presupuesto máximo";
        } else if (!input.notas || input.notas.length <= 3) {
          errors.notas = "Ingrese detalle de deseo";
        } else if (!input.cupos || input.cupos < 1) {
          errors.cupos = "Ingrese cantidad de pasajeros";        
        }
        return errors;
      }
    
      const userSingin = useSelector((state) => state.userSignin);
      const { userInfo } = userSingin;
    
      useEffect(() => {
        if (userInfo) {
       //   props.getSchedAll(userInfo.id);
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
    
      async function handleSubmit(e) {
        e.preventDefault()
        const objGuardar = {
          userid: userInfo.id,
          fechaini: input.fechaini,
          fechafin: input.fechafin,
          destino: input.destino,
          presupuesto: input.presupuesto,
          notas: input.notas,
          cupos: input.cupos
        };

        if (!input.destino)
          props.getActivityNoDest(input.fechaini, input.fechafin, input.presupuesto, input.cupos)
          else
         props.getActivityAll(input.destino, input.fechaini, input.fechafin, input.presupuesto, input.cupos)
         await props.whishAdd(objGuardar)
         alert("su deseo ha sido guardado")    
        // document.getElementById("form").reset();
        setInput({
          fechaini: "",
          fechafin: "",
          destino: "",
          presupuesto: 0,
          notas: "",
          cupos: 1
        });
        //    window.location.href="/scheduler"
        /*     console.log(objGuardar, "    ", input, "    ", resultado.data); */
      }



      const handleSubmitList = async (e) => {
        e.preventDefault()
        if (!input.destino)
          props.getActivityNoDest(input.fechaini, input.fechafin, input.presupuesto, input.cupos)
          else
         props.getActivityAll(input.destino, input.fechaini, input.fechafin, input.presupuesto, input.cupos)
      }

    if (userInfo) {
        return (
          <>
            <h1>Buscar actividades de acorde a mi presupuesto</h1>
            <div className={style.cajaform}>
              <form id="form">
                <div>
                  <label>Fecha inicial</label>
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
                  <label>Fecha final</label>
                  <input
                    className={errors.fecharec && style.danger}
                    type="date"
                    name="fechafin"
                    value={input.fechafin}
                    onChange={handleChange}
                  ></input>
                  {errors.fechafin && (
                    <p className={style.danger}>{errors.fechafin}</p>
                  )}
                </div>
                <div>
                  <label>Destino:</label>
                  <input
                    className={errors.initialTime && style.danger}
                    type="text"
                    id="destino"
                    name="destino"
                    value={input.initialTime}
                    onChange={handleChange}
                  ></input>
                  {errors.initialTime && (
                    <p className={style.danger}>{errors.initialTime}</p>
                  )}
                </div>
                <div>
                  <label>Presupuesto</label>
                  <input
                    className={errors.presupuesto && style.danger}
                    type="number"
                    name="presupuesto"
                    value={input.presupuesto}
                    onChange={handleChange}
                  ></input>
                  {errors.presupuesto && <p className={style.danger}>{errors.presupuesto}</p>}
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
                <div>
                  <label>Viajeros</label>
                  <input
                    className={errors.cupos && style.danger}
                    type="number"
                    name="cupos"
                    value={input.cupos}
                    onChange={handleChange}
                  ></input>
                  {errors.cupos && <p className={style.danger}>{errors.cupos}</p>}
                </div>
                <button onClick={handleSubmit}>Listar y guardar deseo</button>
                <button onClick={handleSubmitList}>Listar solamente</button>
              </form>
            </div>
          </>
        );
      }
    
      return (
        <>
          <h1>Debe estar logueado para completar su lista de deseos</h1>
        </>
      );
    };

    function mapDispacthToProps(dispatch) {
      return {
        getActivityAll: (elem1,elem2,elem3,elem4,elem5) => dispatch(getActivityAll(elem1,elem2,elem3,elem4,elem5)),
        getActivityNoDest: (elem1,elem2,elem3,elem4) => dispatch(getActivityNoDest(elem1,elem2,elem3,elem4)),
        whishAdd: (elem1) => dispatch(whishAdd(elem1))
      }
    }

export default connect(null,mapDispacthToProps)(Whishes)