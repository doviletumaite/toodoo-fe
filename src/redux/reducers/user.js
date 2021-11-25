import { SET_USER_INFO } from "../actions";
import { initialState } from "../store";

const userReducer = (state = initialState.userInfo, action) => {
    switch (action.type) {
        case SET_USER_INFO: {
            return {
                ...state,
                userInfo: action.payload
            }
        }
        default:
            return state
    }
}

export default userReducer