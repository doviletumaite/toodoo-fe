import { EDID_USER, SET_USER_INFO } from "../actions";
import { initialState } from "../store";

const userReducer = (state = initialState.userInfo, action) => {
    switch (action.type) {
        case SET_USER_INFO: {
            return {
               
              ...action.payload
        
            }
        }
        case EDID_USER: {
            return {
                
            ...action.payload
        
            }
        }
        default:
            return state
    }
}

export default userReducer