import { GET_USER } from "../actions";
import { initialState } from "../store";

const genericUserReducer = (state = initialState.genericUserInfo, action) => {
    switch (action.type) {
        case GET_USER: {
            return {
                user: action.payload
              
               
            } 
        }
        default:
            return state
    } 
}

export default genericUserReducer