import { useState } from "react"
import { useSelector } from "react-redux"
import "../style/Showcase.css";
import dots from "../style/images/dots.png"
import { useDispatch } from "react-redux";
import { deleteComment, edidComment } from "../redux/actions";
import moment from "moment";

const SingleComment = ({comment:c}) => {
     console.log("comment", c)
    const comments = useSelector((s) => s.post.comments)
  
    const posts = useSelector((s) => s.post.posts)
 
    const user = useSelector((s) => s.userInfo);
    const dispatch = useDispatch()
    const [showDropdown, setShowDropDown] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [editedComment, setEditedComment] = useState("")

    const handleDropDown = () => { setShowDropDown(!showDropdown) }
    
    const handleShowEdit = () => { setShowEdit(!showEdit) }

    const handleNewComment = (c) => {
       dispatch(edidComment(comments._id,c._id, {editedComment} ))
       setShowEdit(!showEdit)
    }

    const handleDelete = (c) => {
        dispatch(deleteComment(comments._id,c._id))
    }

    const handleComment = (e) =>{
    setEditedComment(e.target.value)
    }
    return (
        <div>
<div className="comment-session">
              <div className="line-comment"></div>
            <div className="comment">
           <img className="profile-img-comment" src={c.user.profilePicture} />
            <div className="comment-detail">
            
             <p className="comment-name">{c.user.username}</p>
             <p className="comment-time">{moment(c.createdAt).fromNow()}</p>
              <p className="comment-itself">
                {c.comment}
                </p>
                {showEdit ? (<div className="editCommentContainer">
                  <input className="inputEditComment"
                  value={editedComment}
                  onChange={handleComment}
                  type="text"/>
                  <button className="editButton" onClick={()=>handleNewComment(c)}>edit</button>
                </div>) : (<div></div>)}
             </div>
          { c.user._id === user._id ?  
          (<img className="dots" src={dots} onClick={handleDropDown}/>)
           : (<div></div>)}

           { showDropdown ? 
           (<div className="dropDown">
             <div className="dropDownCommentContent">
             <p onClick={handleShowEdit}>edit</p>
             <p onClick={()=>handleDelete(c)}>delete</p>
             </div>
             </div>) : (<div></div>)}
           </div>
         </div>
        </div>
    )
}
export default SingleComment