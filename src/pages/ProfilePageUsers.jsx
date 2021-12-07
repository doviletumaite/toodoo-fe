import { useSelector } from "react-redux"
import NavBar from "../components/NavBar.jsx"
import "../style/ProfilePage.css"

const ProfilePageUsers =  () => {
    const state = useSelector(s=>s.genericUserInfo.user)
    return (
        <div>
            <NavBar/>
            <div className="profilePage">
                {/* profile settings side  */}
                <div className="profileSetting">
                   <div className="profileCard">
                       <div className="img-btn-wrapper">
                       <img src={state.profilePicture} /> 
                       
                       </div>
                       <div className="userInfoBox">
                        <p className="userInfoBox_profileName">{state.username}</p>
                        <p className="userInfoBox_bio" >{state.bio}ciao</p>
                      

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
export default ProfilePageUsers