import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getComments } from "../redux/actions"
import "../style/Showcase.css"

const Comment = ()=> {
    const posts = useSelector(s=> s.post.post)
    const dispatch = useDispatch()
    console.log("posts in comment component",posts)
    const comments = useSelector(s=> s.comments.comments)
    console.log("comments in comment component",comments)
    useEffect(() => {
    posts.forEach(p => {
      dispatch(getComments(p._id))
    }
 
    );
      }, []);
 return (
 <div>
      <div className="comment-session">
          <div className="comment">
         <img className="profile-img-comment"  />
          <div className="comment-detail">
           <p className="comment-name">name</p>
            <p className="comment-itself">
              {}
              </p>
           </div>
         </div>
       </div>
 </div>
 )
}

export default Comment