import { GET_TYPES_FAIL, GET_TYPES_REQUEST, GET_TYPES_SUCCESS, REACT_APP_API } from "../Consts/Consts";
import axios from "axios"

export const getTypes = () => async (dispatch) => {
    dispatch({ type: GET_TYPES_REQUEST });
    try {
      const { data } = await axios.get(`${REACT_APP_API}/types`);
      dispatch({ type: GET_TYPES_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: GET_TYPES_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };