import { GET_LISTS } from "../actions";
import { initialState } from "../store";

const listReducer = (state = initialState.list, action) => {
  
    switch (action.type) {
        case GET_LISTS: {
            return {
                ...state,
                ...action.payload
            }
        }
      
        default:
            return state
    }
}

export default listReducer