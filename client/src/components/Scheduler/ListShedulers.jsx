import axios from "axios";
import { React, useState, useEffect } from "react";
import { REACT_APP_API } from "../../store/Consts/Consts";
import DetailSched from "./DetailSched";
import { useSelector, connect } from "react-redux";
import { getSchedAll } from "../../store/actions/actionsScheduler";
import style from "../../styles/ListSched.module.css";

const ListSchedulers = (props) => {
  const userSingin = useSelector((state) => state.userSignin);
  const { userInfo } = userSingin;
 const [isLoad, setIsLoad] = useState(false)

/*   useEffect(() => {
    props.getSchedAll(userInfo.id);
  }, []);  */

 if (!props.scheduled) {
    return <>
    Cargando...
    </>
  }  

  return (
    <div className={style.boxcontainert}>
      {console.log(props)}
      {props.scheduled &&
        props.scheduled.map((sched) => {
          return (
            <div key={sched.id}>
              <DetailSched
                id={sched.id}
                fechaini={sched.fechaini}
                fecharec={sched.fecharec}
                horario={sched.horario}
                tiempo={sched.tiempo}
                notas={sched.notas}
              />
            </div>
          );
        })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    scheduled: state.scheduled.sched_activities,
  };
}

function mapDispacthToProps(dispatch) {
  return {
    getSchedAll: (elem) => dispatch(getSchedAll(elem)),
  };
}
export default connect(mapStateToProps, mapDispacthToProps)(ListSchedulers);
