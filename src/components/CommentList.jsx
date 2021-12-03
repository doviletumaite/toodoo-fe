import { useState } from "react"
import { useSelector } from "react-redux"
import "../style/Showcase.css";

const CommentList = () => {
 
    const comments = useSelector((s) => s.post.comments.comments)

 return(
     <div>
        {
        comments.map((c)=>(
            <div className="comment-session">
              <div className="line-comment"></div>
            <div className="comment">
           <img className="profile-img-comment" src={c.user.profilePicture} />
            <div className="comment-detail">
            
             <p className="comment-name">{c.user.username}</p>
              <p className="comment-itself">
                {c.comment}
                </p>
             </div>
           </div>
         </div>
         ))
        }
     </div>
 )
}
export default CommentList