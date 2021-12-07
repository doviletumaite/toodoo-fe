import "../style/Showcase.css";
import user from "../style/images/user-pl.png";
import post from "../style/images/post.jpeg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePost, edidPost, getComments, getPosts, getUser, postNewComment } from "../redux/actions";
import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import dots from "../style/images/dots.png"
import { useSSRSafeId } from "@react-aria/ssr";
import SinglePost from "./SinglePost";

const Post = () => {

  const state = useSelector((s) => s.post.posts)
  console.log("poooost",state)
 
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getPosts());
  }, []);


  return (
    <div>

      {
      state.map((p) => <SinglePost post={p}/>
       ).reverse()} 
    
    </div>
  );
};

export default Post;
