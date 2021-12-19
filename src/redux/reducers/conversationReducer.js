import { CLEAR_FRIEND_SEARC, FIND_USERS, GET_CONVERSATIONS, GET_MESSAGES, GET_USERS, INCOMING_MESSAGE, NEW_CONVERSATIONS, POST_NEW_MESSAGE, SEND_NEW_MESSAGE, SET_SEL_CHAT, SET_USERS_ONLINE } from "../actions";
import { initialState } from "../store";

const conversationReducer = (state = initialState.conversations, action) => {
    switch (action.type) {
        case GET_CONVERSATIONS: {
            return {
                ...state,
                chats: action.payload
               
            } 
        }
        case NEW_CONVERSATIONS: {
            let chats = state.chats
           
            const found = chats.some( chat => chat._id === action.payload._id)
            console.log("new conversation founded???", found)
            if (found) {
                return {
                    ...state,
                    chats:[ ...state.chats]
                   
                } 
            } else {
                return {
                    ...state,
                chats: [...state.chats,action.payload]
                }
         
        }
        }
       
        case GET_USERS: {
        

            let users = state.users
            
            const found = state.users.some( user => user._id === action.payload._id)
            
            if (!found) {
                users = [...state.users,action.payload]
            }

            return {
                ...state,
                users:[...state.users,action.payload]
            } 
        }
        case FIND_USERS: {
            let friends = state.friends
            
            const found = state.friends.some( friend => friend._id === action.payload._id)
            
            if (!found) {
               return { 
                   ...state,
                    friends: [...action.payload]
                }
            } else {
            return {
                ...state,
                friends: []
            } 
        }
        }
        case GET_MESSAGES: {
            
            const chats = [...state.chats]
            const index = chats.findIndex( chat => chat._id == action.payload.conversationId)

            chats[index] =  {...chats[index], messages: action.payload.messages}

            return { ...state, chats } 
        }
        case SET_SEL_CHAT:
            return {
                ...state,
                active: action.payload
            }
        case POST_NEW_MESSAGE:
        case INCOMING_MESSAGE: {

            const chats = [...state.chats]
            const index = chats.findIndex( chat => chat._id == action.payload.message.conversationId)

            delete action.payload.message.conversationId
            // console.log("chat index and index", chats[index], index, chats)
            chats[index] = { ...chats[index],
                messages: [
                    ...(chats[index]?.messages || []), 
                    action.payload.message
                ]
            }

            return {...state, chats} 
        }
        case SET_USERS_ONLINE:
            let onlineFriends = [...state.friendsOnline]
            const found = onlineFriends.find( friend => friend._id === action.payload._id)
            // console.log("friend found online?",found)
            if (!found) {
                return { 
                    ...state,
                    friendsOnline: [...state.friendsOnline,action.payload]
                 }
             } else {
             return {
                 ...state,
                 friendsOnline: [...state.friendsOnline]
             } 
         }
        
        default:
            return state
    } 
}

export default conversationReducer