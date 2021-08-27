import styles from "../../styles/DetailActivWhish.module.css";
import { removeActivity } from "../../store/actions/actionsWhishes";
import { addFavorite } from "../../store/actions/activityActions"
import { connect } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai"

function DetailActivWhish(props) {
  const { id, date, name, description, price, country, city, image, userid, places, offers } = props;

  const handleClicFav = (e) => {
    e.preventDefault()
    props.addFavorite(id, userid)
  }

  const handleClicBuy = (e) => {
    e.preventDefault()
    window.location.href = `/activity/${id}`
  }

  return (
    <div key={id} className={styles.boxwhish}>

      <div>
        <img className={styles.imgwhish} src={image} alt={name} title={name} />
      </div>
      <div className={styles.titteam}>

        <button
          className={styles.butclose}
          onClick={() => props.removeActivity(id)}
        >
          <AiFillCloseCircle />
        </button>
      </div>
      <div className={`${styles.titleWhishes} ${styles.buttonWhishesCard}`}><p>{name}</p></div>
      <div className={styles.buttonWhishesCard}>{description}</div>
      <div className={`${styles.buttonWhishesCard} ${styles.descriptionWhishesCard}`}>Disponible: {places}</div>
      <div className={styles.buttonWhishesCard}>Precio: ${price}</div>
      <div className={styles.buttonWhishesCard}>Ciudad: {city}</div>
      <div className={styles.buttonWhishesCard}>País: {country}</div>
      <div className={styles.buttonWhishesCard}>Fecha: {date}</div>
      <div className={styles.buttonera}>
        <div className={styles.buttonWhishesCard}><button className={styles.LinkGetIt} onClick={handleClicFav}>Favoritos!</button></div>
        <div className={styles.buttonWhishesCard}><button className={styles.LinkGetIt} onClick={handleClicBuy}>Comprar!</button></div>
      </div>
    </div>
  );
}

function mapDispacthToProps(dispatch) {
  return {
    removeActivity: (elem) => dispatch(removeActivity(elem)),
    addFavorite: (elem1, elem2) => dispatch(addFavorite(elem1, elem2))

  };
}

export default connect(null, mapDispacthToProps)(DetailActivWhish);
