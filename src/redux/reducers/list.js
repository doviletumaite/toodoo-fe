import { DELETE_LIST, DELETE_TASK, EDID_TASK, GET_LISTS, POST_NEW_LIST, POST_NEW_TASK, SET_LIST_CARD, SET_TASK_DONE } from "../actions";
import { initialState } from "../store";

const listReducer = (state = initialState.list, action) => {
  console.log(action)
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
               lists: [...action.payload]
            }
        }
        case SET_LIST_CARD: {
            return {
                ...state,
                selectedList: action.payload
            }
        }
        case POST_NEW_TASK: {
            return {
                ...state,
                selectedList: [...action.payload]
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
               ...action.payload
            }
        }
        case DELETE_LIST: {
            return {
                ...state,
               ...action.payload,
               selectedList: null
            }
        }
        case EDID_TASK: {
            return {
                ...state,
               ...action.payload
            }
        }
        case SET_TASK_DONE: {
            return {
                ...state,
               done: action.payload 
            }
        }
        default:
            return state
    }
}

export default listReducer