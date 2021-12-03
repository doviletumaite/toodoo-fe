import "../style/Showcase.css";
import user from "../style/images/user-pl.png";
import post from "../style/images/post.jpeg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getComments, getPosts, getUser } from "../redux/actions";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";

const Post = () => {
  const [showComments, setShowComments] = useState(false)

  const state = useSelector((s) => s.post.posts)
  console.log("state of post",state)
  const commentsState = useSelector((s) => s.post.comments)
 

  const userGeneric = useSelector((s) => s.genericUserInfo)
  console.log("Generic",userGeneric)

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleShowComments = () => {
   setShowComments(!showComments)
  }

  const handleUser = (id) => {
    dispatch(getUser(id))
    console.log("Id user that i'm looking for", id)
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
          </div>

          <div className="post-content-paragraph">{p.text}</div>

          <div className="post-content-img-container">
            <img className="post-content-img" src={p.picture} />
          </div>
         

          <div onClick={()=>dispatch(getComments(p._id)) } className="showCommentDiv" >
            <button 
            className="showComments"
            onClick={handleShowComments} 
            >show comments</button>
          </div> 
           
        
            {
            p._id===commentsState._id ?  (

               <CommentList
              
          showComments={showComments}
          
          /> ) : (<div></div>)
            }
         
          
        </div>
     
      ))}
    
    </div>
  );
};

export default Post;
