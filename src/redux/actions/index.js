export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_POST_INFO = 'SET_POST_INFO'
export const GET_POSTS = 'GET_POSTS'
export const GET_POST_ERROR = 'GET_POST_ERROR'
export const GET_COMMENTS = 'GET_COMMENTS'
export const SET_GENERIC_USER_INFO = 'SET_GENERIC_USER_INFO'

export const setUsernameAction = (userInfo) => ({
    type: SET_USER_INFO,
    payload: userInfo,
  })
  export const setGenericUserInfoAction = (genericUserInfo) => ({
    type: SET_GENERIC_USER_INFO,
    payload: genericUserInfo,
  })

  export const setPostAction = (info) => ({
    type: SET_POST_INFO,
    payload: info,
  })

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