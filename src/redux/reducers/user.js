import { EDID_USER, EDID_USER_PROFILE_PICTURE, SET_USER_INFO } from "../actions";
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
                ...state,
            ...action.payload
        
            }
        }
        case EDID_USER_PROFILE_PICTURE: {
            return {

                ...state,
                ...action.payload
            
            }
        }
        default:
            return state
    }
}

export default userReducer