import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar.jsx";
import SinglePostGenericUser from "../components/SinglePostGenericUser.jsx";
import { getPostsByUserID } from "../redux/actions/index.js";
import "../style/ProfilePage.css";

const ProfilePageUsers = () => {
  const state = useSelector((s) => s.genericUserInfo.user);
  const dispatch = useDispatch();
  const [postUser, setPostUser] = useState([])
  const posts = useSelector((s) => s.genericUserInfo.posts);
  useEffect(() => {
    
    setPostUser(posts[0])
    console.log("post in use state",postUser)
  }, []);
  
  return (
    <div>
      <NavBar />
      <div className="profilePage">
        {/* profile settings side  */}
        <div className="profileSetting">
          <div className="profileCard">
            <div className="img-btn-wrapper">
              <img src={state.profilePicture} />
            </div>
            <div className="userInfoBox">
              <p className="userInfoBox_profileName">{state.username}</p>
              <p className="userInfoBox_bio">{state.bio}</p>
            </div>
          </div>
        </div>
        <div className="postsUserContainer">{ postUser.map((p) => <SinglePostGenericUser post={p} />).reverse() }</div>
      </div>
    </div>
  );
};
export default ProfilePageUsers;
