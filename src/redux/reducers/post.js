import { GET_COMMENTS, GET_POSTS, ADD_POST, POST_NEW_COMMENT, EDID_POST, DELETE_POST, POST_PICTURE } from "../actions";
import { initialState } from "../store";

const postReducer = (state = initialState.post, action) => {
    switch (action.type) {
        case GET_POSTS: {
            return {
                ...state,
                posts: action.payload
            }
        }
        case ADD_POST: {
            return {
              
                ...state,
                posts:[...action.payload]
            }
        }
        case EDID_POST: {
            return {
              
                 ...action.payload
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts:  action.payload
            }
        }
        case POST_PICTURE: {
            return {
              ...state,
                posts: action.payload
        }
    }
        case GET_COMMENTS: {
            return {
                ...state,
                comments: action.payload
            }
        }
        case POST_NEW_COMMENT: {
            return {
            ...state,
                comments: action.payload
            }
        }
        default:
            return state
    }
}

export default postReducer