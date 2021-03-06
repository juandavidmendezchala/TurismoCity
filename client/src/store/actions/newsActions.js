import axios from "axios";
import {
  GET_NEWS_FAIL,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  REACT_APP_API
} from "../Consts/Consts";
import { API_KEY_NEWS } from "../Consts/Consts";

export const getNews = () => async (dispatch) => {
  dispatch({ type: GET_NEWS_REQUEST });
  try {
    const { data } = await axios.get(
      `${REACT_APP_API}/news`
    );
    dispatch({ type: GET_NEWS_SUCCESS, payload: data.data });
  } catch (err) {
    dispatch({
      type: GET_NEWS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
