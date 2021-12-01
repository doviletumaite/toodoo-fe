import { useState } from "react"
import { useSelector } from "react-redux"
import  Comment  from "./Comment.jsx"

const CommentList = () => {
 
    const comments = useSelector((s) => s.post.comments.comments)
    console.log("comments in comm list ",comments )
    
 return(
     <div>
        {
        comments.map((c)=>(
            <div className="comment-session">
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