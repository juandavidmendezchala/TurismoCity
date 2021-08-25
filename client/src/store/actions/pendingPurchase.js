export const PENDING_PURCHASE = "PENDING_PURCHASE"

export const pendingPurchase = (idAct) => {
    return function (dispatch) {
        dispatch({ type: PENDING_PURCHASE, payload: idAct })
    }
}
