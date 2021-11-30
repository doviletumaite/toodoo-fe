import "../style/Showcase.css";
import user from "../style/images/user-pl.png";
import post from "../style/images/post.jpeg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getComments, getPosts } from "../redux/actions";
import { useEffect } from "react";
import Comment from "../components/Comment.jsx";

const Post = () => {
  const state = useSelector((s) => s.post);
  console.log("state",state)

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getPosts());
  //  state.posts.map(p=>dispatch(getComments(p._id)))
  
    // console.log("state in comments",state.posts[1].comments)
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
        {
          p.comments ? ( 
         <Comment/>
        
           ) : (<div></div>)
        }
  
        </div>
      ))}
    </div>
  );
};

export default Post;
