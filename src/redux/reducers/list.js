import { GET_LISTS, POST_NEW_LIST, SET_LIST_CARD } from "../actions";
import { initialState } from "../store";

const listReducer = (state = initialState.list, action) => {
  
    switch (action.type) {
        case GET_LISTS: {
            return {
                ...state,
               lists: [...action.payload]
            }
        }
        case POST_NEW_LIST: {
            return {
                ...state,
               lists: action.payload
            }
        }
        case SET_LIST_CARD: {
            return {
                ...state,
               list: action.payload
            }
        }
        default:
            return state
    }
}

export default listReducer