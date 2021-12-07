import { GET_COMMENTS, GET_POSTS, ADD_POST, POST_NEW_COMMENT } from "../actions";
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
              
     
                posts: [...state, action.payload]
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
            
                comments: [...state, action.payload]
            }
        }
        default:
            return state
    }
}

export default postReducer