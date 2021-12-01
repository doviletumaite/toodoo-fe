import "../style/Showcase.css";
import user from "../style/images/user-pl.png";
import post from "../style/images/post.jpeg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getComments, getPosts } from "../redux/actions";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";

const Post = () => {
  const [showComments, setShowComments] = useState(null)
  const [comment, setComment] = useState([])
  const state = useSelector((s) => s.post.posts)
 
  const commentsState = useSelector((s) => s.post.comments)
  console.log("commentsState in post",state)

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleShowComments = (e) => {
   e.preventDefault(e)
   setComment(commentsState)
  }
  return (
    <div>

      {state.map((p) => (
        <div className="post-body">
          <div className="post-user">
            <img className="profile-img-post" src={p.user.profilePicture} />
            <div className="post-user-pGroup">
              <p>{p.user.username}</p>
              <p>bio</p>
              <p>time</p>
            </div>
          </div>

          <div className="post-content-paragraph">{p.text}</div>

          <div className="post-content-img-container">
            <img className="post-content-img" src={p.picture} />
          </div>
          <div className="line-comment"></div>
          <button 
            className="showComments"
            onClick={(e)=>dispatch(getComments(p._id))}
            >show comments</button>
            
          <CommentList
          comment={commentsState}
          />
          
        </div>
     
      ))}
    
    </div>
  );
};

export default Post;
