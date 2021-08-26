import styles from "../../styles/DetailSched.module.css";
import { schedRemove } from "../../store/actions/actionsScheduler";
import { connect } from "react-redux";
import axios from "axios";
import { REACT_APP_API } from "../../store/Consts/Consts";
import { AiOutlineInsertRowRight } from "react-icons/ai";

function DetailWhish(props) {
  const { id, fechaini, fecharec, destino, presupuesto, cupos } = props;

  const handleClicRem = async () => {
    const deseos = await axios.delete(`${REACT_APP_API}/whish/${id}`);
    alert("Deseo eliminado con éxito")
    window.location.href='/whisheslist'
  };


  return (
    <div key={id} className={styles.boxsched}>
      <div className={styles.titteam}>
        Deseo guardado: {fechaini}
        <button className={styles.butclose} onClick={handleClicRem}>
          x
        </button>
      </div>
      <p>Recordatorio {fecharec}</p>
      <p>Horario: {destino}</p>
      <p>Duracion: {presupuesto}</p>
      <p>Notas: {cupos}</p>
      <p>Recibirás correos periódicos con novedades de este deseo</p>
    </div>
  );
}

export default DetailWhish;
