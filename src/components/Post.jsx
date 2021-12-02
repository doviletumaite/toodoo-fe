import "../style/Showcase.css";
import user from "../style/images/user-pl.png";
import post from "../style/images/post.jpeg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getComments, getPosts, setGenericUserInfoAction } from "../redux/actions";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";

const Post = () => {
  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState([])

  const state = useSelector((s) => s.post.posts)
  console.log("state of post",state)
  const commentsState = useSelector((s) => s.post.comments)
  console.log("commentsState in post",commentsState)

  const usergeneric = useSelector((s) => s.post.genericUserInfo)
  console.log("Generic",usergeneric)

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleShowComments = () => {
   setShowComments(!showComments)
  }
  return (
    <div>

      {state.map((p) => (
        <div className="post-body">
          <div className="post-user">
            <img className="profile-img-post" src={p.user.profilePicture} />
            <div className="post-user-pGroup">
              <Link to={"/profilePageUsers/"+p.user.username}
             
              >
              <p  onClick={dispatch(setGenericUserInfoAction(p[0]))} >{p.user.username}</p>
              </Link>
              <p>bio</p>
              <p>time</p>
            </div>
          </div>

          <div className="post-content-paragraph">{p.text}</div>

          <div className="post-content-img-container">
            <img className="post-content-img" src={p.picture} />
          </div>
         

          <div onClick={(e)=>dispatch(getComments(p._id)) } >
          <button 
            className="showComments"
            onClick={handleShowComments}
            
            >show comments</button>
             
            </div>
            {/* <div className="line-comment"></div> */}
            {
            p._id===commentsState._id && showComments ?  (

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
