import { GET_COMMENTS, GET_POSTS, SET_POST_INFO } from "../actions";
import { initialState } from "../store";

const postReducer = (state = initialState.post, action) => {
    switch (action.type) {
        case GET_POSTS: {
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
        default:
            return state
    }
}

export default postReducer