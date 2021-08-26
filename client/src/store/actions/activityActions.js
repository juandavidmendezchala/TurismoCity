import axios from 'axios';
import {
  DELETE_FAVORITE_FAIL,
  DELETE_FAVORITE_REQUEST,
  DELETE_FAVORITE_SUCCESS,
  GET_ACTIVITYDETAIL_FAIL,
  GET_ACTIVITYDETAIL_REQUEST,
  GET_ACTIVITYDETAIL_SUCCESS,
  GET_ACTIVITY_FAIL,
  GET_ACTIVITY_REQUEST,
  GET_ACTIVITY_SUCCESS,
  GET_FAVORITE_FAIL,
  GET_FAVORITE_REQUEST,
  GET_FAVORITE_SUCCESS,
  POST_ACTIVITY_REQUEST,
  POST_ACTIVITY_SUCCESS,
  POST_ACTIVITY_FAIL,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_FAIL,
  GET_COMMENTS_SUCCESS,
  REACT_APP_API

} from "../Consts/Consts"

export const getActivities = () => async (dispatch) => {
  dispatch({ type: GET_ACTIVITY_REQUEST });
  try {
    const { data } = await axios.get(`${REACT_APP_API}/activity`);
    dispatch({ type: GET_ACTIVITY_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_ACTIVITY_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getActivity = (id) => async (dispatch) => {
  dispatch({ type: GET_ACTIVITYDETAIL_REQUEST });
  try {
    const { data } = await axios.get(`${REACT_APP_API}/activity/${id}`);
    dispatch({ type: GET_ACTIVITYDETAIL_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: GET_ACTIVITYDETAIL_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getFilterActivities =
  (country, city, startDate, endDate, price, type, places, duration, initialTime ) =>
    async (dispatch) => {
      console.log("Entrando a GER")
      dispatch({ type: GET_ACTIVITY_REQUEST });
      try {
        const { data } = await axios.post(
          `${REACT_APP_API}/activity/filter`,
          {
            country,
            city,
            startDate,
            endDate,
            price,
            type,
            places,
            duration,
            initialTime,
          }
        );
        //console.log(data, "AQUI ESTA LA DATA")
        dispatch({ type: GET_ACTIVITY_SUCCESS, payload: data });
      } catch (err) {
        dispatch({
          type: GET_ACTIVITY_FAIL,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        });
      }
    };
export const sendFormActivity =
  ({
    email,
    name,
    date,
    description,
    price,
    places,
    duration,
    initialTime,
    images,
    country,
    city
  }) =>
    async (dispatch) => {
      dispatch({ type: POST_ACTIVITY_REQUEST });
      try {
        const { data } = await axios.post(`${REACT_APP_API}/activity`, {
          email,
          name,
          date,
          description,
          price,
          places,
          duration,
          initialTime,
          images,
          country,
          city
        });
        dispatch({ type: POST_ACTIVITY_SUCCESS, payload: data });
      } catch (err) {
        dispatch({
          type: POST_ACTIVITY_FAIL,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        });
      }
    }


export const addFavorite = (activityId, userId) => async (dispatch) => {
  dispatch({ type: GET_FAVORITE_REQUEST })
  try {
    const { data } = await axios.post(`${REACT_APP_API}/favorites/`, { activityId, userId })
    dispatch({ type: GET_FAVORITE_SUCCESS, payload: data })
  } catch (err) {
    dispatch({
      type: GET_FAVORITE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
    })
  }
}

export const deleteFavorite = (id) => async (dispatch) => {
  dispatch({ type: DELETE_FAVORITE_REQUEST })
  try {
    const { data } = await axios.get(`${REACT_APP_API}/activity/${id}`)
    dispatch({ type: DELETE_FAVORITE_SUCCESS, payload: data })
  } catch (err) {
    dispatch({
      type: DELETE_FAVORITE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
    })
  }
}

export const getComments = (id) => async (dispatch) => {
  dispatch({type: GET_COMMENTS_REQUEST})
  try{
    const { data } = await axios.get(`${REACT_APP_API}/feedBack/${id}`)
    dispatch({type: GET_COMMENTS_SUCCESS, payload: data})
  }catch(err) {
    dispatch({
      type: GET_COMMENTS_FAIL,
      payload:
        err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    })
  }
}
