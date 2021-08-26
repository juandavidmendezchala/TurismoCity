import axios from "axios";
import { React, useState, useEffect } from "react";
import { REACT_APP_API } from "../../store/Consts/Consts";
import { useSelector, connect } from "react-redux";
import { getActivityAll } from "../../store/actions/actionsWhishes";
import style from "../../styles/ListActivWhish.module.css";
import DetailActivWhish from "./DetailActivWhish";

const ListActivWish = (props) => {
  const userSingin = useSelector((state) => state.userSignin);
  const { userInfo } = userSingin;
 const [isLoad, setIsLoad] = useState(false)

/*   useEffect(() => {
    props.getSchedAll(userInfo.id);
  }, []);  */

 if (!props.actividades) {
    return <>
    Cargando...
    </>
  }  

  return (
    <div className={style.boxcontainert}>
      {console.log(props)}
      {props.actividades &&
        props.actividades.map((activity) => {
          if (activity !== undefined) {
          return (
            <div key={activity.id}>
              <DetailActivWhish
                id={activity.id}
                image={activity.images}
                date={activity.date}
                price={activity.price}
                city={activity.city}
                country={activity.country}
                description={activity.description}
                name={activity.name}
                places={activity.places}
                offers={activity.user.email}
                userid={userInfo.id}
              />
            </div>      
          )}
        })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    actividades: state.whishes.activities,
  };
}

function mapDispacthToProps(dispatch) {
  return {
    getActivityAll: (elem) => dispatch(getActivityAll(elem)),
  };
}
export default connect(mapStateToProps, mapDispacthToProps)(ListActivWish);
