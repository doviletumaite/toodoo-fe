import { useSelector } from "react-redux"
import NavBar from "../components/NavBar"
import "../style/ProfilePage.css"

const ProfilePage = () => {
    const state = useSelector(s=>s.userInfo)
  
    return (
        <div>
            <NavBar/>
            <div className="profilePage">
                {/* profile settings side  */}
                <div className="profileSetting">
                   <div className="profileCard">
                       <div className="img-btn-wrapper">
                       <img src={state.profilePicture}  /> 
                        <button className="button">edit profile picture</button>
                       </div>
                       <div className="userInfoBox">
                        <p className="userInfoBox_profileName" >{state.username}</p>
                        <p className="userInfoBox_bio" >{state.bio}ciao</p>
                        <button className="editInfoButton">edit personal info</button>

                        </div>
                   </div>
                </div>


                {/* list side */}
                <div className="listSession">

                </div>
            </div>
        </div>
    )
}
export default ProfilePage