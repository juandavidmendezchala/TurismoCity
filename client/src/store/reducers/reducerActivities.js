import { NEW_ACTIVITY } from "../Consts/Consts"

const initialState = {
    information: {
        email: "",
        name: "",
        description: "",
        date: "",
        price: "",
        places: "",
        duration: "",
        initialTime: "",
        passengers: "",
        images: "",
        city: "",
        country: ""
    }
}
const reducerActivities = (state = initialState, action) => {
    switch (action.type) {
        case NEW_ACTIVITY:
            return {
                ...state,
                //Modificacion de los estados
            }
        default:
            return state
    }
}
export default reducerActivities