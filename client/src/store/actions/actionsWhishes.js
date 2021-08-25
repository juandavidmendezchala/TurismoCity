import axios from 'axios';
import {
  WHISH_ADD,
  WHISH_GET,
  WHISH_GET_ALL,
  WHISH_REMOVE,
  WHISH_FAIL,
  WHISH_ACTIV_ALL,
  WHISH_REMOV_ACTIV,
  REACT_APP_API,
} from "../Consts/Consts"

export const getWhishAll = (userid) => async (dispatch) => {
    console.log("obteniendo")
    try {
      const { data } = await axios.get(`${REACT_APP_API}/whishes/${userid}`);
      dispatch({ type: WHISH_GET_ALL, payload: data });
    } catch (err) {
      dispatch({
        type: WHISH_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

  export const whishAdd = (whish) => async (dispatch) => {
       console.log("agregando")
    try {
      const { data } = await axios.post(`${REACT_APP_API}/whishes`,whish);
      dispatch({ type: WHISH_ADD, payload: data });
    } catch (err) {
      dispatch({
        type: WHISH_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

  export const whishRemove = (idwhish) => async (dispatch) => {
    console.log("borrando")
  try {
    const { data } = await axios.delete(`${REACT_APP_API}/whishes/${idwhish}`);
    dispatch({ type: WHISH_REMOVE, payload: idwhish });
  } catch (err) {
    dispatch({
      type: WHISH_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const removeActivity = (idActiv) => (dispatch) => {
  console.log("removiendo acividades")
  try {
    dispatch({ type: WHISH_REMOV_ACTIV, payload: idActiv });
  } catch (err) {
    dispatch({
      type: WHISH_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
}

export const getActivityAll = (destino,fechaini,fechafin,presupuesto,cupos) => async (dispatch) => {
    console.log("buscando acividades")
  try {
    const { data } = await axios.get(`${REACT_APP_API}/whishes/${destino}/${fechaini}/${fechafin}/${presupuesto}/${cupos}`);
    dispatch({ type: WHISH_ACTIV_ALL, payload: data });
  } catch (err) {
    dispatch({
      type: WHISH_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getActivityNoDest = (fechaini,fechafin,presupuesto,cupos) => async (dispatch) => {
  console.log("buscando acividades")
try {
  const { data } = await axios.get(`${REACT_APP_API}/whishes/${fechaini}/${fechafin}/${presupuesto}/${cupos}`);
  dispatch({ type: WHISH_ACTIV_ALL, payload: data });
} catch (err) {
  dispatch({
    type: WHISH_FAIL,
    payload:
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message,
  });
}
};