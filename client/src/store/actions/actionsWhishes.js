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
  WHISH_GEAT_ALL_REQUEST,
  WHISH_GET_ALL_FAIL,
  WHISH_ADD_REQUEST,
  WHISH_ADD_FAIL,
  WHISH_REMOVE_REQUEST,
  WHISH_REMOVE_FAIL,
  WHISH_REMOVE_ACTIV_REQUEST,
  WHISH_REMOVE_ACTIV_FAIL,
  WHISH_ACTIV_ALL_REQUEST,
  WHISH_ACTIV_ALL_FAIL
} from "../Consts/Consts"

export const getWhishAll = (userid) => async (dispatch) => {
    console.log("obteniendo")
    dispatch({ type: WHISH_GEAT_ALL_REQUEST });
    try {
      const { data } = await axios.get(`${REACT_APP_API}/whishes/${userid}`);
      dispatch({ type: WHISH_GET_ALL, payload: data });
      console.log(data)
    } catch (err) {
      dispatch({
        type: WHISH_GET_ALL_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

  export const whishAdd = (whish) => async (dispatch) => {
       console.log("agregando")
       dispatch({ type: WHISH_ADD_REQUEST });
    try {
      const { data } = await axios.post(`${REACT_APP_API}/whishes`,whish);
      dispatch({ type: WHISH_ADD, payload: data });
    } catch (err) {
      dispatch({
        type: WHISH_ADD_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

  export const whishRemove = (idwhish) => async (dispatch) => {
    console.log("borrando")
    dispatch({ type: WHISH_REMOVE_REQUEST });
  try {
    const { data } = await axios.delete(`${REACT_APP_API}/whish/${idwhish}`);
    dispatch({ type: WHISH_REMOVE, payload: idwhish });
  } catch (err) {
    dispatch({
      type: WHISH_REMOVE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const removeActivity = (idActiv) => (dispatch) => {
  console.log("removiendo acividades")
  dispatch({ type: WHISH_REMOVE_ACTIV_REQUEST });
  try {
    dispatch({ type: WHISH_REMOV_ACTIV, payload: idActiv });
  } catch (err) {
    dispatch({
      type: WHISH_REMOVE_ACTIV_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
}

export const getActivityAll = (destino,fechaini,fechafin,presupuesto,cupos) => async (dispatch) => {
    console.log("buscando acividades")
    dispatch({ type: WHISH_ACTIV_ALL_REQUEST });
  try {
    const { data } = await axios.get(`${REACT_APP_API}/whishes/${destino}/${fechaini}/${fechafin}/${presupuesto}/${cupos}`);
    dispatch({ type: WHISH_ACTIV_ALL, payload: data });
  } catch (err) {
    dispatch({
      type: WHISH_ACTIV_ALL_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getActivityNoDest = (fechaini,fechafin,presupuesto,cupos) => async (dispatch) => {
  console.log("buscando acividades")
  dispatch({ type: WHISH_ACTIV_ALL_REQUEST });
try {
  const { data } = await axios.get(`${REACT_APP_API}/whishes/${fechaini}/${fechafin}/${presupuesto}/${cupos}`);
  dispatch({ type: WHISH_ACTIV_ALL, payload: data });
} catch (err) {
  dispatch({
    type: WHISH_ACTIV_ALL_FAIL,
    payload:
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message,
  });
}
};