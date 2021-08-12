import { GET_USER_ACTIVITIES } from "../actions/userActivitiesAction"
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
    },
    activities: []
}
const reducerActivities = (state = initialState, action) => {
    switch (action.type) {
        case NEW_ACTIVITY:
            return {
                ...state,
                //Modificacion de los estados
            }
        case GET_USER_ACTIVITIES: {
            return {
                ...state,
                activities: action.payload
            }
        }
        default:
            return state
    }
}
export default reducerActivities