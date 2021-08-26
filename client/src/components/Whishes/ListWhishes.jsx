import axios from "axios";
import { React, useState, useEffect } from "react";
import { REACT_APP_API } from "../../store/Consts/Consts";
import DetailWhish from "./DetailWhish";
import { useSelector, connect } from "react-redux";
import { getSchedAll } from "../../store/actions/actionsScheduler";
import style from "../../styles/ListSched.module.css";

const ListWhishes = (props) => {
  const userSingin = useSelector((state) => state.userSignin);
  const { userInfo } = userSingin;
  const [isLoad, setIsLoad] = useState(false);
  const [deseobten, setDeseObten] = useState([]);

  useEffect(() => {
    obtendeseos();
  }, []);

  async function obtendeseos() {
    const deseos = await axios.get(`${REACT_APP_API}/whish/${userInfo.id}`);
    setDeseObten(deseos.data);
    console.log(deseobten, "D O.");
  }

  if (!deseobten) {
    return <>Cargando...</>;
  }

  return (
    <div className={style.boxcontainert}>
      {console.log(deseobten)}
      {deseobten &&
        deseobten.map((deseo) => {
          if (deseo !== undefined) {
            return (
              <div key={deseo.id}>
                <DetailWhish
                  id={deseo.id}
                  fechaini={deseo.fechaini}
                  fecharec={deseo.fechafin}
                  destino={deseo.destino}
                  presupuesto={deseo.presupuesto}
                  cupos={deseo.cupos}
                />
              </div>
            );
          }
        })}
    </div>
  );
};

export default ListWhishes;
