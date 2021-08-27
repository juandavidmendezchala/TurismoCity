import styles from "../../styles/DetailSched.module.css";
import { whishRemove, getActivityAll } from "../../store/actions/actionsWhishes";
import { connect } from "react-redux";
import axios from "axios";
import { REACT_APP_API } from "../../store/Consts/Consts";


function DetailWhish(props) {
  const { id, fechaini, fecharec, destino, presupuesto, cupos, nombre } = props;

  const handleClicRem = async () => {
    await props.whishRemove(id);
  };


  return (
    <div key={id} className={styles.boxsched}>
      <div className={styles.titteam}>
        Deseo guardado: {destino}
        <button className={styles.butclose} onClick={handleClicRem}>
          x
        </button>
      </div>
      <p>Inicio {fecharec}</p>
      <p>Fin {fecharec}</p>
      <p>Destino: {destino}</p>
      <p>Presupuesto: {presupuesto}</p>
      <p>Viajeros: {cupos}</p>
    </div>
  );
}

function mapDispacthToProps(dispatch) {
  return {
    whishRemove: (elem1) => dispatch(whishRemove(elem1)),
    getActivityAll: (elem1) => dispatch(getActivityAll(elem1))
  }
}

export default connect(null, mapDispacthToProps)(DetailWhish);
