import "../style/Showcase.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {  getPosts } from "../redux/actions";
import { useEffect } from "react";
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
