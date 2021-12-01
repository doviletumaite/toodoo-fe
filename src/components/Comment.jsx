import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getComments } from "../redux/actions"
import "../style/Showcase.css"

const Comment = ({c})=> {
  console.log("C",c)
   
 
 return (
 <div>
 
{/*                   
          <div className="comment-session">
          <div className="comment">
         <img className="profile-img-comment" src={comments.comment.user.profilePicture} />
          <div className="comment-detail">
           <p className="comment-name">{comments.comment.user.username}</p>
            <p className="comment-itself">
              {comments.comment}
              </p>
           </div>
         </div>
       </div> */}
            
 </div>
 )
}

export default Comment