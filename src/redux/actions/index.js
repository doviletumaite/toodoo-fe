import {create} from "axios"
import API from "../../tools/api.js"

export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_POST_INFO = 'SET_POST_INFO'
export const GET_POSTS = 'GET_POSTS'
export const GET_POST_ERROR = 'GET_POST_ERROR'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_POST = 'ADD_POST'
export const GET_USER = 'GET_USER'

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
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  // export const postNewPost = () => {
  //   return async (dispatch, getState) => {
  //     try {
  //       let response = await fetch("http://localhost:3003/posts",
  //       {
  //         method: "POST"
  //       })
  //       if(response.ok){
  //          let newPost = await response.json()
  //          dispatch({
  //            type: ADD_POST,
  //            payload: newPost
  //          })
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // }

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