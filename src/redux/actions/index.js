import {create} from "axios"
import { useSelector } from "react-redux"
import API from "../../tools/api.js"

export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_POST_INFO = 'SET_POST_INFO'
export const GET_POSTS = 'GET_POSTS'
export const GET_POST_ERROR = 'GET_POST_ERROR'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_POST = 'ADD_POST'
export const GET_USER = 'GET_USER'
export const EDID_POST = 'EDID_POST'
export const POST_NEW_COMMENT = 'POST_NEW_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const POST_PICTURE = 'POST_PICTURE'
export const EDID_COMMENT = 'EDID_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDID_USER = 'EDID_USER'
export const EDID_USER_PROFILE_PICTURE = 'EDID_USER_PROFILE_PICTURE'
export const GET_LISTS = 'GET_LISTS'
export const POST_NEW_LIST = 'POST_NEW_LIST'
export const SET_LIST_CARD = 'SET_LIST_CARD'
export const POST_NEW_TASK = 'POST_NEW_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const DELETE_LIST = 'DELETE_LIST'
export const EDID_TASK = 'EDID_TASK'
export const SET_TASK_DONE = 'SET_TASK_DONE'
export const POST_PICTURE_AND_TEXT = 'POST_PICTURE_AND_TEXT'
export const SET_LIST_IN_LOGOUT = 'SET_LIST_IN_LOGOUT'
export const GET_CONVERSATIONS = 'GET_CONVERSATIONS'
export const GET_USERS = 'GET_USERS'
export const GET_MESSAGES = 'GET_MESSAGES'
export const SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT'
export const POST_NEW_MESSAGE = 'POST_NEW_MESSAGE'
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'
export const SET_SEL_CHAT = 'SET_SEL_CHAT'
export const INCOMING_MESSAGE = 'INCOMING_MESSAGE'
export const FIND_USERS = 'FIND_USERS'
export const NEW_CONVERSATIONS = 'NEW_CONVERSATIONS'
export const SET_USERS_ONLINE = 'SET_USERS_ONLINE'

export const setUsernameAction = (userInfo) => ({
    type: SET_USER_INFO,
    payload: userInfo,
  })


  export const setPostAction = (info) => ({
    type: SET_POST_INFO,
    payload: info,
  })

  // const URL = create({baseURL: "http://localhost:3003"})
  const URL = process.env.REACT_APP_DEPLOYED_API
  export const getPosts = () => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL+"/posts")
        if(response.ok){
           let posts = await response.json()
           dispatch({
             type: GET_POSTS,
             payload: posts
           })
        }
        
      } catch (error) {
        console.log(error)
        dispatch({
          type: GET_POST_ERROR,
          payload: true,
        })
      }
    }
  }
  export const getComments = (id) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL + "/posts/" + id + "/comment")
        if(response.ok){
           let comment = await response.json()
           dispatch({
             type: GET_COMMENTS,
             payload: comment
           })
             console.log(comment)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  export const postNewComment = (id, {bodyComment}) => {
    return async (dispatch, getState) => {
      try {
        console.log("hi",id )
        console.log("hi bodyyy POST", bodyComment )
        let response = await fetch(URL +"/posts/" + id + "/comment",
        {
          method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify({ user: bodyComment.user , comment: bodyComment.comment})
        })
        console.log("id in the fetch post", id)
        console.log("id and text",bodyComment)
        if(response.ok){
           let newPost = await response.json()
           dispatch({
             type: POST_NEW_COMMENT,
             payload: newPost
           })
           console.log("new post",newPost )
        }
      } catch (error) {
        console.log(error)
      }
      dispatch(getComments(id))
    }
  }

  export const postNewPost = ({body}) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL +"/posts",
        {
          method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify({ user: body.user , text: body.text})
        })
        console.log("id and text",body)
        if(response.ok){
           let newPost = await response.json()
           dispatch({
             type: ADD_POST,
             payload: newPost
           })
           console.log("new post",newPost )
        }
      } catch (error) {
        console.log(error)
      }
      dispatch(getPosts())
    }
  }

  export const edidPost = (id, {editedPost}) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL +"/posts/" + id,
        {
          method: "PUT", 
            headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify({text:editedPost})
        })
        console.log("body",{editedPost})
        if(response.ok){
           let newPost = await response.json()
           dispatch({
             type: EDID_POST,
             payload: newPost
           })
           console.log("new post",newPost )
        }
      } catch (error) {
        console.log(error)
      }
      dispatch(getPosts())
    }
  }

  export const deletePost = (id) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL +"/posts/" + id,
        {
          method: "DELETE", 
            headers: {
              "Content-Type": "application/json",
            }
        })
        if(response.ok){
           dispatch({
             type: DELETE_POST,
             payload: response
           })
           console.log("deleted",id)
        }
      } catch (error) {
        console.log(error)
      }
      dispatch(getPosts())
    }
  }
  export const postPicture = (id, picture) => {
    return async (dispatch, getState) => {
      try {
        console.log("picture before fetch", typeof picture)
        const formData  = new FormData()
        formData.append('picture', picture)
        let response = await fetch(URL +"/posts/" + id + "/picture",
        {
          method: "POST", 
          body: formData
        })
        console.log(picture)
        if(response.ok){
          let newPostWithPicture = await response.json()
           dispatch({
             type: POST_PICTURE,
             payload: newPostWithPicture
           })
           console.log("deleted",id)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const postPictureAndText = (picture, text, id) => {
    return async (dispatch, getState) => {
      try {
        const accessToken = localStorage.getItem("accessToken")
        console.log("picture before fetch", typeof picture)
        const formData  = new FormData()
        formData.append('picture', picture)
        formData.append('text', JSON.stringify({ text })) 
        let response = await fetch(URL +"/posts/postwithimage",
        {
          method: 'POST',
          headers: new Headers({
            Authorization: 'Bearer ' + accessToken,
          }),
          body: formData,
        })
        console.log(formData)
        if(response.ok){
          let newPost = await response.json()
           dispatch({
             type: POST_PICTURE_AND_TEXT,
             payload: newPost
           })
        }
      } catch (error) {
        console.log(error)
      }
      dispatch(getPosts(id))
    }
  }
  export const getUser = (id) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL +"/user/" + id)
        console.log("id for the fetch", id)
        if(response.ok){
           let user = await response.json()
           dispatch({
             type: GET_USER,
             payload: user
           })
           console.log("fetch particular user",user )
        }
        
      } catch (error) {
        console.log(error)
      }
    }
  }

  export const edidComment = (idPost, idComment, {editedComment}) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL +"/posts/" + idPost + "/comment/"+ idComment,
        {
          method: "PUT", 
            headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify({comment:editedComment})
        })
        console.log("body",{editedComment})
        if(response.ok){
           let newComment = await response.json()
           dispatch({
             type: EDID_COMMENT,
             payload: newComment
           })
           console.log("new post",newComment )
        }
      } catch (error) {
        console.log(error)
      }
      dispatch(getComments(idPost))
    }
  }
  export const deleteComment = (idPost, idComment) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL +"/posts/" + idPost + "/comment/"+ idComment,
        {
          method: "DELETE", 
            headers: {
              "Content-Type": "application/json",
            }
        })
        if(response.ok){
           dispatch({
             type: DELETE_COMMENT,
             payload: response
           })
        }
      } catch (error) {
        console.log(error)
      }
      dispatch(getComments(idPost))
    }
  }
  export const edidUser = ({newUserInfo}) => {
    return async (dispatch, getState) => {
      try {
       
        const accessToken = localStorage.getItem("accessToken")
       
        let response = await fetch(URL +"/user/me",
        {
          method: "PUT", 
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + accessToken,
            },
          body: JSON.stringify({username: newUserInfo.username, bio: newUserInfo.bio})
        })
        if(response.ok){
           let newUserInfo = await response.json()
           dispatch({
             type: EDID_USER,
             payload: newUserInfo
           })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const edidUserProfilePicture = (picture) => {
    return async (dispatch, getState) => {
      try {
        console.log("picture before fetch", picture)
        const formData  = new FormData()
        formData.append('picture', picture)
        console.log("formdata",formData)
        const accessToken = localStorage.getItem("accessToken")
       
        let response = await fetch(URL +"/user/meAvatar",
        {
          method: "PUT", 
            headers: {
              // "Content-Type": "application/json",
              'Authorization': 'Bearer ' + accessToken,
            },
          body: formData
        })
        console.log("body",formData)
        if(response.ok){
           let newUserInfo = await response.json()
           dispatch({
             type: EDID_USER_PROFILE_PICTURE,
             payload: newUserInfo
           })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  export const getList = (id) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL +"/list/" + id)
        if(response.ok){
          let lists = await response.json()
          dispatch({
            type: GET_LISTS,
            payload: lists
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const postNewList = (id, {bodyList}) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL +"/list",
        {
          method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify({ user: bodyList.user , title: bodyList.title})
        })
      
        if(response.ok){
           let newList = await response.json()
           dispatch({
             type: POST_NEW_LIST,
             payload: newList
           })
           console.log("new list",newList )
        }
      } catch (error) {
        console.log(error)
      }
      dispatch(getList(id))
    }
  }
  export const setListCard = (list) => ({
    type: SET_LIST_CARD,
    payload: list,
  })

  export const postNewTask = (id, newTask, cardState) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL +"/list/" + id + "/task",
        {
          method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify({ task: newTask })
        })
        if(response.ok){
           let newTaskCreated = await response.json()
           dispatch({
             type: POST_NEW_TASK,
             payload: newTaskCreated
           })
        }

      } catch (error) {
        console.log(error)
      }
           setListCard(cardState)
    }
  }
  export const deleteTask = (idList, idTask) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL +"/list/" + idList + "/task/" + idTask ,
        {
          method: "DELETE", 
            headers: {
              "Content-Type": "application/json",
            }
        })
        if(response.ok){
          const editedList = await response.json()
           dispatch({
             type: DELETE_TASK,
             payload: editedList
           })
           setListCard(editedList)
        }
      } catch (error) {
        console.log(error)
      }
      
    }
  }
  export const deleteList = (idList, list) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL +"/list/" + idList ,
        {
          method: "DELETE", 
            headers: {
              "Content-Type": "application/json",
            }
        })
        if(response.ok){
           dispatch({
             type: DELETE_LIST,
             payload: response
           })
        }
      } catch (error) {
        console.log(error)
      }
      setListCard(list)
    }
  }
  export const edidTask = (idList,idTask,{task}) => {
    return async (dispatch, getState) => {
      try {
      
        let response = await fetch(URL +"/list/" + idList + "/task/" + idTask,
        {
          method: "PUT", 
            headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify({done: task.value})
        })
        if(response.ok){
           let updatedTask = await response.json()
           dispatch({
             type: EDID_TASK,
             payload: updatedTask
           })
           console.log("updated task", updatedTask)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const setTaskDone = (task) => ({
    type: SET_TASK_DONE,
    payload: task,
  })
  export const setLogout = (list) => ({
    type: SET_LIST_IN_LOGOUT,
    payload: list,
  })

  export const getConversation = (id) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL + "/conversation/" + id)
        if(response.ok){
          let conversations = await response.json()
          dispatch({
            type: GET_CONVERSATIONS,
            payload: conversations
          })
          
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const createConversation = ({body}) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL + "/conversation", 
          {
            method: "POST", 
              headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({ senderId: body.senderId ,receiverId: body.receiverId  })
          })
        
        if(response.ok){
          let conversation = await response.json()
          dispatch({
            type: NEW_CONVERSATIONS,
            payload: conversation
          })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const getUsers = (id) => {
    return async (dispatch, getState) => {
      try {
        const accessToken = localStorage.getItem("accessToken")
        let response = await fetch(URL+"/user/" + id,
        { headers: {  'Authorization': 'Bearer ' + accessToken }})
      
        if(response.ok){
           let users = await response.json()
           dispatch({
             type: GET_USERS,
             payload: users
           })
        }
        
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const getMessages = (id) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch(URL+"/message/" + id)
      
        if(response.ok){
           let messages = await response.json()
           dispatch({
             type: GET_MESSAGES,
             payload: {messages, conversationId: id}
           })
        }
        
      } catch (error) {
        console.log(error)
      }
    }
  }

  export const setActiveChat = (conversation) => ({
    type: SET_ACTIVE_CHAT,
    payload: conversation,
  })

  export const postNewMessage = ( {messageTosend}) => {
    return async (dispatch, getState) => {
      try {
        
        let response = await fetch(URL+ "/message",
        {
          method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify({ conversationId: messageTosend.conversationId , sender: messageTosend.sender , text: messageTosend.text })
        })
       console.log("message sended in fetch", {messageTosend} )
        if(response.ok){
           let newMessage = await response.json()
           dispatch({
             type: POST_NEW_MESSAGE,
             payload: newMessage
           })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  export const incomingMessage = (message) => ({
    type: "INCOMING_MESSAGE",
    payload: message,
  })

  export const setSelectedChat = (chatId) => ({
    type: "SET_SEL_CHAT",
    payload: chatId,
  })
  export const searchUser = (query) => {
    return async (dispatch, getState) => {
      try {
        const accessToken = localStorage.getItem("accessToken")
        let response = await fetch(URL + "/user?username=" + query,
        { headers: {  'Authorization': 'Bearer ' + accessToken }})
      
        if(response.ok){
           let user = await response.json()
           dispatch({
             type: FIND_USERS,
             payload: user
           })
           console.log("user find", user)
        }
        
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const setUsersOnline = (user) => ({
    type: "SET_USERS_ONLINE",
    payload: user,
  })