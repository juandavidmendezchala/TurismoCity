import { GET_FLIGHTS } from "../actionsFlor/actionsFlor";

const initialState = {
    flights: [],
 };

 function reducer(state = initialState, action) {
   if (action.type === GET_FLIGHTS) {
       return {
         ...state,
         flights: action.payload 
       };
   }
return state;
}

export default reducer;