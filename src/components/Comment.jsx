import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getComments } from "../redux/actions"
import "../style/Showcase.css"

const Comment = ()=> {
    const posts = useSelector(s=> s.post)
    const dispatch = useDispatch()
    console.log("posts in comment component",posts)
 
  
 return (
 <div>
     {
              posts.map(c=> (
                  
          <div className="comment-session">
          <div className="comment">
         <img className="profile-img-comment"  />
          <div className="comment-detail">
           <p className="comment-name">name</p>
            <p className="comment-itself">
              {c.comments.comment}
              </p>
           </div>
         </div>
       </div>
              ))}
 </div>
 )
}

export default Comment