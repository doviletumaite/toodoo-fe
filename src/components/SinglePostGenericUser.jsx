import moment from "moment"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deletePost, edidPost, getComments, getUser, postNewComment } from "../redux/actions"
import dots from "../style/images/dots.png"
import CommentList from "./CommentList"

export default function SinglePostGenericUser ({post: p}) {
    console.log("post single generi usuuser", p)
    const [showComments, setShowComments] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)
    const [showAddComment, setShowAddComment] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [comment, setComment] = useState("")
    const [editedPost, setEditedPost] = useState("")
   
    const commentsState = useSelector((s) => s.post.comments)
    const userGeneric = useSelector((s) => s.genericUserInfo.user)
    const stateUser = useSelector((s) => s.userInfo)
 
    const dispatch = useDispatch();
  
    const handleShowComments = () => {setShowComments(!showComments)}
    
    const handleShowDropdown = () => { setShowDropDown(!showDropDown) }
    
    const handleShowAddComments = () => {setShowAddComment(!showAddComment)}

    const handleShowModal = () => {setShowModal(!showModal)}
  
    const userID = stateUser._id

     const handleComment = (e) => {setComment(e.target.value)}
     const handlePostComment = (id) => {
     const bodyComment = {user: userID, comment: comment }
     dispatch(postNewComment(id,{bodyComment}))
    }
  
     const handleEditedPost = (e) => { 
      setEditedPost(e.target.value) 
    }
     
    const handleEdit = (id) => {
     dispatch(edidPost(id, {editedPost}))
     handleShowModal()
    }
  
    const handleDelete = (id, userId) => {
      if(userId === userID){
            dispatch(deletePost(id))
      }
    }

    return (   
         <div className="post-body">
         <div className="post-user">
      <img className="profile-img-post" src={userGeneric.profilePicture} />
      <div className="post-user-pGroup">
  
        <p className="usernamePost">{userGeneric.username}</p>
        <p>{userGeneric.bio}</p>
        <p className="time">{moment(p.createdAt).fromNow()}</p>
      </div>
  { showDropDown &&  p.user===userID ? 
  <div className="dropdown-container">
     <div className="dropdown-content">
    <p onClick={handleShowModal}>edit</p>
    <p onClick={()=>handleDelete(p._id, p.user)}>delete</p>
    </div>
    </div> : <div></div>}
    {p.user===userID ?   <img src={dots} className="dots" onClick={()=>handleShowDropdown(p._id)}/> : <> </>}
  


  </div>
    { showModal ? (<div className="modalEdit">
      <input type="text" className="inputEditPost" value={editedPost} onChange={handleEditedPost}/>
      <button className="buttonEditPost" onClick={()=>handleEdit(p._id)}>edit</button>
    </div>) : (<div></div>) }

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
      p._id===commentsState._id && showComments ?  (

         <CommentList /> ) : (<div></div>)
      }
   
    
  </div>

    )
}