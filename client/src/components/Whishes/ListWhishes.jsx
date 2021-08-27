import axios from "axios";
import { React, useState, useEffect } from "react";
import { REACT_APP_API } from "../../store/Consts/Consts";
import DetailWhish from "./DetailWhish";
import { useSelector, connect } from "react-redux";
import { getWhishAll } from "../../store/actions/actionsWhishes";
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
    if (userInfo) await props.getWhishAll(userInfo.id);
  }

  if (!props.deseoslist) {
    return <>Cargando...</>;
  }

  if (userInfo) {
    return (
      <>
        <h1>Reciba alertas de actividades, segun deseos guardados</h1>
        <h5>Al eliminar un deseo, dejará de recibir sus alertas</h5>
        <div className={style.boxcontainert}>
          {console.log(props.deseoslist)}
          {props.deseoslist &&
            props.deseoslist.map((deseo) => {
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
      </>
    );
  }
  return (
    <>
      <h1>Debe estar logueado para ver su lista de deseos</h1>
    </>
  );
};

function mapStateToProps(state) {
  return {
    deseoslist: state.whishes.whishes,
  };
}

function mapDispacthToProps(dispatch) {
  return {
    getWhishAll: (elem1) => dispatch(getWhishAll(elem1)),
  };
}

export default connect(mapStateToProps, mapDispacthToProps)(ListWhishes);
