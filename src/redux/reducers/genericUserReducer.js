import { SET_GENERIC_USER_INFO } from "../actions";
import { initialState } from "../store";

const genericUserReducer = (state = initialState.genericUserInfo, action) => {
    switch (action.type) {
        case SET_GENERIC_USER_INFO: {
            return {
                ...state,
                user:action.payload
            }
        }
        default:
            return state
    }
}

export default genericUserReducer