import { useState } from "react"
import { useSelector } from "react-redux"
import "../style/Showcase.css";
import dots from "../style/images/dots.png"
import SingleComment from "./SingleComment";

const CommentList = () => {
 
    const comments = useSelector((s) => s.post.comments)
   
 return(
     <div>
        {
        comments.comments.map((c)=>(
          <SingleComment comment={c} /> ))
        }
     </div>
 )
}
export default CommentList