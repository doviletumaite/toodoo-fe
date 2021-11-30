import { GET_COMMENTS } from "../actions";
import { initialState } from "../store";

const commentReducer = (state = initialState.post, action) => {
    switch (action.type) {
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

export default commentReducer