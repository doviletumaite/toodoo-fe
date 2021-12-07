import "../style/Showcase.css";
import user from "../style/images/user-pl.png";
import post from "../style/images/post.jpeg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getComments, getPosts, getUser, postNewComment } from "../redux/actions";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import dots from "../style/images/dots.png"
import { useSSRSafeId } from "@react-aria/ssr";

const Post = () => {
  const [showComments, setShowComments] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  const [showAddComment, setShowAddComment] = useState(false)
  const [comment, setComment] = useState("")

  const state = useSelector((s) => s.post.posts)
  console.log("poooost",state)
  const commentsState = useSelector((s) => s.post.comments)
  const userGeneric = useSelector((s) => s.genericUserInfo)
  const stateUser = useSelector((s) => s.userInfo)

  const thisPost = ( postID) => state.find(post => post._id === postID)
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleShowComments = () => {setShowComments(!showComments)}
  
  const handleShowDropdown = () => {setShowDropDown(!showDropDown)}
  
  const handleShowAddComments = () => {setShowAddComment(!showAddComment)}

  const handleUser = (id) => {
    dispatch(getUser(id))
    console.log("grab this id",id)
  }

  const handleComment = (e) => {
   setComment(e.target.value)
   console.log("comment", comment)
  }

  const userID = stateUser._id
  
  const handlePostComment = (id) => {
   const bodyComment = {user: userID, comment: comment }
   console.log("post id", id)
   console.log("body comment",bodyComment )
  dispatch(postNewComment(id,{bodyComment}))
  }
  return (
    <div>

      {state.map((p) => (
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
            <img src={dots} className="dots" onClick={handleShowDropdown}/>
          </div>
        { showDropDown ? 
        <div className="dropdown-container" showDropDown={showDropDown}>
           <div className="dropdown-content">
          <p>edit</p>
          <p>delete</p>
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
            </div> 

            <button 
            className="addComments"
            onClick={handleShowAddComments} 
            >add comments</button>
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
         </div>) : <div></div>}
        
            {
            p._id===commentsState._id ?  (

               <CommentList /> ) : (<div></div>)
            }
         
          
        </div>
     
      )).reverse()} 
    
    </div>
  );
};

export default Post;
