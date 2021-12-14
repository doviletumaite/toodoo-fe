import NavBar from "../components/NavBar";
import "../style/Showcase.css";
import user from "../style/images/user-pl.png";
import share from "../style/images/add-image.png";
import Post from "../components/Post";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewPost, postPicture, postPictureAndText } from "../redux/actions";

const Showcase = () => {
  const stateUser = useSelector((s) => s.userInfo);
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);
  const handleShow = () => { setShowModal(!showModal);};
  const handleShowFileInput = () => {setShowFileInput(!showFileInput)}
  

  const userId = stateUser._id
  const [text, setText] = useState("")
  const [picture, setPicture] = useState("")
  const handleText = (e) => {
    setText(e.target.value)
  }
  const body = { user: userId, text: text}

  const handlePost = (e) => {
  dispatch(postNewPost({body}))
  }
 
const uploadPicuture = (e) => {
    const img = e.target.files[0]
    setPicture(img)
    console.log("picture",picture)
    // dispatch(postPicture(userId, e.target.files[0]))
  }
const postPicAndText = () => {
  dispatch(postPictureAndText(picture,text, userId ))
  console.log("pic and text",picture,text )
}
  return (
    <div>
      <NavBar />
      <div className="showcase-main">
        <div className="shareBox">

          <button className="input-share" onClick={handleShow}>
            share something today! :)
          </button>
          <img className="profile-img" src={stateUser.profilePicture} />
        </div>

        {showModal ? (
          <div className="shareBox-modal">
            <input className="modal-Input"
            value={text}
            onChange={handleText}
            />
            <div className="buttonsAndFileWrapper">
            <div className="buttonWrapper">
              <button 
              className="postButton"
              type="submit"
              onClick={postPicAndText}
              >post it!</button>
              <img className="share-btn" src={share} onClick={handleShowFileInput} />
              </div>
              {
                showFileInput ? (
                <div className="labelInputPicture">add a picture!
               
                  <input type="file" name="picture" id="picture"  onChange={(e)=>uploadPicuture(e)} />
                  {/* <button type="submit" onClick={(e)=>uploadPicuture(e)}>send</button> */}
                </div>) : (<div></div>)
              }
              
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
