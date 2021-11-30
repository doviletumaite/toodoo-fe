import "../style/Showcase.css";
import user from "../style/images/user-pl.png";
import post from "../style/images/post.jpeg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getComments, getPosts } from "../redux/actions";
import { useEffect } from "react";
import Comment from "../components/Comment.jsx";

const Post = () => {
  const state = useSelector((s) => s.post.post);
  const commentState = useSelector((s) => s.comments);
  console.log("comments", commentState);
  const dispatch = useDispatch();
  console.log("posts", state);
  // const postId = state.post[0]._id
  const allId = state.map((p) => p._id);
  console.log("allId", allId);
  // console.log("posts id",postId)
  useEffect(() => {
    dispatch(getPosts());
    // state.map(p=>dispatch(getComments(p._id)))
    state.forEach(p => {
      dispatch(getComments(p._id))
      console.log("comment fro each",commentState )
    })
  }, []);
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
        
        {p.comments.forEach(c=> ( <div className="comment-session">
          <div className="comment">
         <img className="profile-img-comment"  />
          <div className="comment-detail">
           <p className="comment-name">name</p>
            <p className="comment-itself">
              {c.comment}
              </p>
           </div>
         </div>
       </div>))}
         
        
         
        </div>
      ))}
    </div>
  );
};

export default Post;
