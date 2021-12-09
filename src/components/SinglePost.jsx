import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deletePost, getComments, getUser, postNewComment } from "../redux/actions"
import dots from "../style/images/dots.png"
import CommentList from "./CommentList"

export default function SinglePost ({post: p}) {

    const [showComments, setShowComments] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)
    const [showAddComment, setShowAddComment] = useState(false)
    const [comment, setComment] = useState("")
  
    const state = useSelector((s) => s.post.posts)
    console.log("poooost",state)
    const commentsState = useSelector((s) => s.post.comments)
    const userGeneric = useSelector((s) => s.genericUserInfo)
    const stateUser = useSelector((s) => s.userInfo)
  
    const dispatch = useDispatch();
  
    const handleShowComments = () => {setShowComments(!showComments)}
    
    const handleShowDropdown = () => { setShowDropDown(!showDropDown) }
    
    const handleShowAddComments = () => {setShowAddComment(!showAddComment)}
  
    const handleUser = (id) => { dispatch(getUser(id)) }
  
    const handleComment = (e) => { setComment(e.target.value) }
  
    const userID = stateUser._id
    
    const handlePostComment = (id) => {
     const bodyComment = {user: userID, comment: comment }
     dispatch(postNewComment(id,{bodyComment}))
    }
  
    const handleEdit = (id) => {
     
    }
  
    const handleDelete = (id, userId) => {
      if(userId === userID){
           console.log(id, userId)
            dispatch(deletePost(id))
      }
    }

    return (
         <div className="post-body">
    <div className="post-user">
      <img className="profile-img-post" src={p.user.profilePicture} />
      <div className="post-user-pGroup">

        <Link to={"/profilePageUsers/"+p.user._id} >
        <p onClick={()=>handleUser(p.user._id)}>{p.user.username}</p>
        </Link>

        <p>bio</p>
        <p>time</p>
      </div>

      <img src={dots} className="dots" onClick={()=>handleShowDropdown(p._id)}/>
    </div>
  { showDropDown &&  p.user._id===userID ? 
  <div className="dropdown-container">
     <div className="dropdown-content">
    <p onClick={()=>handleEdit(p._id)}>edit</p>
    <p onClick={()=>handleDelete(p._id, p.user._id)}>delete</p>
    </div>
    </div> : <div></div>}
    <div className="post-content-paragraph">{p.text}</div>

    <div className="post-content-img-container">
      <img className="post-content-img" src={p.picture} />
    </div>
   
    <div className="buttonsWrapper">
    <div onClick={()=>dispatch(getComments(p._id)) } className="showCommentDiv" >
      <button 
      className="showComments"
      onClick={handleShowComments} 
      >show comments</button>

      <button 
      className="addComments"
      onClick={handleShowAddComments} 
      >add comments</button>
      </div>
   </div>

    { showAddComment  ? ( <div className="comment-session" >
        <div className="line-comment"></div>
      <div className="comment">
      <img className="profile-img-comment" src={stateUser.profilePicture} />
      <div className="comment-detail">
      
       <p className="comment-name">{stateUser.username}</p>
       <div className="inputAndButton-comment">
       <input className="comment-Input"
       placeholder="leave a comment :)"
       value={comment}
       onChange={handleComment}
      />
       <button 
        className="sendCommentButton"
        type="submit"
        onClick={()=>handlePostComment(p._id)}
        >send it!</button>
        </div>
       </div>
     </div>
   </div>) : (<div></div>)}
  
      {
      p._id===commentsState._id ?  (

         <CommentList /> ) : (<div></div>)
      }
   
    
  </div>

    )
}