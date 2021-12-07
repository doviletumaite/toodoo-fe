import NavBar from "../components/NavBar";
import "../style/Showcase.css";
import user from "../style/images/user-pl.png";
import share from "../style/images/add-image.png";
import Post from "../components/Post";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewPost } from "../redux/actions";

const Showcase = () => {
  const stateUser = useSelector((s) => s.userInfo);
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    setShowModal(!showModal);
  };

  const userId = stateUser._id
  const [text, setText] = useState("")
 
  const handleText = (e) => {
    setText(e.target.value)
    console.log(text)
  }
  const body = { user: userId, text: text}
  const handlePost = () => {
  dispatch(postNewPost({body}))
  console.log("post",body )
  }

  return (
    <div>
      <NavBar />
      <div className="showcase-main">
        <div className="shareBox">
          {/* <div className="shareBox-input-img"> */}

          <button className="input-share" onClick={handleShow}>
            share something today :)
          </button>
          <img className="profile-img" src={stateUser.profilePicture} />
        </div>

        {showModal ? (
          <div className="shareBox-modal" showModal={showModal}>
            <input className="modal-Input"
            value={text}
            onChange={handleText}
            />
            <div className="buttonWrapper">
              <button 
              className="postButton"
              type="submit"
              onClick={handlePost}
              >post it!</button>
              <img className="share-btn" src={share} />
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <Post />
      </div>
    </div>
  );
};

export default Showcase;
