import axios from "axios";
import { React, useState, useEffect } from "react";
import { REACT_APP_API } from "../../store/Consts/Consts";
import DetailSched from "./DetailSched";
import { useSelector } from "react-redux";
import style from "../../styles/ListSched.module.css";

const ListSchedulers = (props) => {
  const userSingin = useSelector((state) => state.userSignin);
  const { userInfo } = userSingin;
  const [ obtenidos, setObtenidos] = useState([]);
  const [isLoad, setIsLoad] = useState(false)
  let ver = false

 async function getObtener() {
  await axios
  .get(`${REACT_APP_API}/scheduler/${userInfo.id}`)
  .then((response) => {
    setObtenidos(response.data)
    setIsLoad(true)
  })
 }

  useEffect(() => {
    getObtener()
  },[])

  if (isLoad === false) {
    return <>
    Cargando...
    </>
  }

  return (
    <div className={style.boxcontainert}>
      { obtenidos &&
        obtenidos.map((sched) => {
          return (
            <div key={sched.id}>
              <DetailSched
                id={sched.id}
                fechaini={sched.fechaini}
                fecharec={sched.fecharec}
                horario={sched.horario}
                tiempo={sched.tiempo}
                notas={sched.notas}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ListSchedulers;
