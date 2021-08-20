import { REACT_APP_API } from "../Consts/Consts";

export const PURCHASE = "PURCHASE";


export function purchase(idUser, idAct, fecha) {
    return function (dispatch) {
        const requestOptions = { //
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idUser, idAct, fecha })
            //commentary, score, idUser, idAct
        };
        return fetch(`${REACT_APP_API}/purchase`, requestOptions)
            .then(response => response.json())
            .then(obj => {
                // console.log('devuelve',obj)
                dispatch({
                    type: PURCHASE, payload: {
                        fecha: obj.fecha,
                        idUser: obj.idUser,
                        idAct: obj.idAct
                    }
                });
            });
    }

}