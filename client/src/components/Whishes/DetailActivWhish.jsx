import styles from "../../styles/DetailActivWhish.module.css";
import { removeActivity } from "../../store/actions/actionsWhishes";
import { addFavorite } from "../../store/actions/activityActions"
import { connect } from "react-redux";

function DetailActivWhish(props) {
  const { id, date, name, description, price, country, city, image, userid, places, offers } = props;

  const handleClicFav = (e) => {
    e.preventDefault()
    props.addFavorite(id,userid)
  }

  const handleClicBuy = (e) => {
    e.preventDefault()
    window.location.href=`/activity/${id}`
  }

  return (
    <div key={id} className={styles.boxwhish}>
      <div className={styles.titteam}>
        Actividad: {name}
        <button
          className={styles.butclose}
          onClick={() => props.removeActivity(id)}
        >
          x
        </button>
      </div>
      <div>
        <img className={styles.imgwhish} src={image} alt={name} title={name}/>
      </div>
      <div>Fecha: {date}</div>
      <div>Disponible: {places}</div>
      <div>Descripcion: {description}</div>
      <div>Precio: {price}</div>
      <div>Ciudad: {city}</div>
      <div>aís: {country}</div>
      <div className={styles.buttonera}>
        <button className={styles.LinkGetIt} onClick={handleClicFav}>Favoritos!</button>
        <button className={styles.LinkGetIt} onClick={handleClicBuy}>Comprar!</button>
      </div>
      <p>Ofrece: {offers}</p>
    </div>
  );
}

function mapDispacthToProps(dispatch) {
  return {
    removeActivity: (elem) => dispatch(removeActivity(elem)),
    addFavorite: (elem1, elem2) => dispatch(addFavorite(elem1,elem2))

  };
}

export default connect(null, mapDispacthToProps)(DetailActivWhish);
