import axios from 'axios';
import {
  SCHED_ADD,
  SCHED_GET,
  SCHED_GET_ALL,
  SCHED_REMOVE,
  SCHED_FAIL,
  REACT_APP_API,
  DEV_TOOLS
} from "../Consts/Consts"

export const getSchedAll = (userid) => async (dispatch) => {
    console.log("obteniendo")
    dispatch({ type: SCHED_GET_ALL });
    try {
      const { data } = await axios.get(`${REACT_APP_API}/scheduler/${userid}`);
      dispatch({ type: SCHED_GET_ALL, payload: data });
    } catch (err) {
      dispatch({
        type: SCHED_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

  export const schedAdd = (schedactiv) => async (dispatch) => {
      console.log("agregando","Entorno: "+`${DEV_TOOLS} aparte y ademas ${REACT_APP_API}`)
    dispatch({ type: SCHED_ADD });
    try {
      const { data } = await axios.post(`${REACT_APP_API}/scheduler`,schedactiv);
      dispatch({ type: SCHED_ADD, payload: data });
    } catch (err) {
      dispatch({
        type: SCHED_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

  export const schedRemove = (idsched) => async (dispatch) => {
    console.log("borrando")
  dispatch({ type: SCHED_REMOVE });
  try {
    const { data } = await axios.delete(`${REACT_APP_API}/scheduler/${idsched}`);
    dispatch({ type: SCHED_REMOVE, payload: idsched });
  } catch (err) {
    dispatch({
      type: SCHED_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};