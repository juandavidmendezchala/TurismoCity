import styles from "../../styles/DetailSched.module.css";

function DetailSched({ id, fechaini, fecharec, horario, tiempo, notas }) {
  return (
    <div key={id} className={styles.boxsched}>
      <div className={styles.titteam}>Fecha: {fechaini}</div>
      <p>Recordatorio {fecharec}</p>
      <p>Horario: {horario}</p>
      <p>Duracion: {tiempo}</p>
      <p>Notas: {notas}</p>
    </div>
  );
}

export default DetailSched;
