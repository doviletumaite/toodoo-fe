import { GET_CONVERSATIONS } from "../actions";
import { initialState } from "../store";

const conversationReducer = (state = initialState.conversations, action) => {
    switch (action.type) {
        case GET_CONVERSATIONS: {
            return {
                chats: action.payload
               
            } 
        }
        default:
            return state
    } 
}

export default conversationReducer