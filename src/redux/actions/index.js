import {create} from "axios"
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

export const setUsernameAction = (userInfo) => ({
    type: SET_USER_INFO,
    payload: userInfo,
  })


  export const setPostAction = (info) => ({
    type: SET_POST_INFO,
    payload: info,
  })

  const URL = create({baseURL: "http://localhost:3003"})

  export const getPosts = () => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch("http://localhost:3003/posts")
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
        let response = await fetch("http://localhost:3003/posts/" + id + "/comment")
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
        let response = await fetch("http://localhost:3003/posts/" + id + "/comment",
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
        let response = await fetch("http://localhost:3003/posts",
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
        let response = await fetch("http://localhost:3003/posts/" + id,
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
        let response = await fetch("http://localhost:3003/posts/" + id,
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
        let response = await fetch("http://localhost:3003/posts/" + id + "/picture",
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
  export const getUser = (id) => {
    return async (dispatch, getState) => {
      try {
        let response = await fetch("http://localhost:3003/user/" + id)
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
        let response = await fetch("http://localhost:3003/posts/" + idPost + "/comment/"+ idComment,
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
        let response = await fetch("http://localhost:3003/posts/" + idPost + "/comment/"+ idComment,
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
       
        let response = await fetch("http://localhost:3003/user/me",
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
       
        let response = await fetch("http://localhost:3003/user/meAvatar",
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
        let response = await fetch("http://localhost:3003/list/" + id)
        if(response.ok){
          let lists = await response.json()
          dispatch({
            type: GET_LISTS,
            payload: lists
          })
          console.log(lists)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }