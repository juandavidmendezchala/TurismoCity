import axios from 'axios'
import {
    USER_REGISTER_SUCCESS,
    USER_REGISTER_REQUEST,
    USER_REGISTER_FAIL,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_LOGOUT,
    SIGN_IN_AUTH0,
    USER_LOGOUT_LOC
} from '../Consts/Consts'

export const register = (name, email, password, birthdate) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password, birthdate } })
    try {
        const { data } = await axios.post(`http://localhost:3001/user/register`, { name, email, password, birthdate })
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (err) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message
        })
    }
}

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } })
    try {
        const { data } = await axios.post('http://localhost:3001/user/signin', { email, password })
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (err) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message
        })
    }

}

export const signInAuth0 = (user) => async (dispatch) => {
    dispatch({ type: SIGN_IN_AUTH0, payload: user })
    localStorage.setItem('userInfo', JSON.stringify(user))
}

export const logout = () => (dispath) => {
    localStorage.removeItem('userInfo')
    dispath({ type: USER_LOGOUT })
}
//action que vacia el localstorage luego de vaciar auth0 user
export const logoutlocal = () => (dispath) => {
    localStorage.removeItem('userInfo')
    dispath({ type: USER_LOGOUT_LOC })
}