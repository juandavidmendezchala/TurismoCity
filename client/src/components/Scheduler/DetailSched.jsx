import styles from "../../styles/DetailSched.module.css";
import { schedRemove } from "../../store/actions/actionsScheduler"
import { connect } from 'react-redux'

function DetailSched(props) {

  const { id, fechaini, fecharec, horario, tiempo, notas } = props
  return (
    <div key={id} className={styles.boxsched}>
      <div className={styles.titteam}>
        <div className={styles.fechaReminder}><p>Fecha: {fechaini}</p></div>
        <div className={styles.horarioReminder}><p>Horario: {horario}</p></div>
      </div>
      <div className={styles.remainderInfo}>
        <div className={styles.reminderDetail}>
          <p>Recordatorio {fecharec}</p>
          <p>Duracion: {tiempo}</p>
          <p>Notas: {notas}</p>
          <div className={styles.buttonReminder}>
            <button className={styles.butclose} onClick={() => props.schedRemove(id)}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapDispacthToProps(dispatch) {
  return {
    schedRemove: (elem) => dispatch(schedRemove(elem))
  }
}

export default connect(null, mapDispacthToProps)(DetailSched);
