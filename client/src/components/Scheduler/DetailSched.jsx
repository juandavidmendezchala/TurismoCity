import styles from "../../styles/DetailSched.module.css";
import { schedRemove } from "../../store/actions/actionsScheduler"
import { connect } from 'react-redux'

function DetailSched(props) {

  const { id, fechaini, fecharec, horario, tiempo, notas } = props
  return (
    <div key={id} className={styles.boxsched}>
      <div className={styles.titteam}>Fecha: {fechaini}
      <button className={styles.butclose} onClick={() => props.schedRemove(id)}>x</button>
      </div>
      <p>Recordatorio {fecharec}</p>
      <p>Horario: {horario}</p>
      <p>Duracion: {tiempo}</p>
      <p>Notas: {notas}</p>
    </div>
  );
}

function mapDispacthToProps(dispatch) {
  return {
    schedRemove: (elem) => dispatch(schedRemove(elem))
  }
}

export default connect (null,mapDispacthToProps)(DetailSched);
