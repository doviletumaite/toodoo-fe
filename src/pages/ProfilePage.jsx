import { useSelector } from "react-redux"
import NavBar from "../components/NavBar"
import "../style/ProfilePage.css"

const ProfilePage = () => {
    const state = useSelector(s=>s.userInfo)
    const date = new Date()
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    const today = dd + '/' + mm + '/' + yyyy;
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
                        <p className="calendarsTitle">my calendars:</p>
                        <div className="calendarLabel"> GIM </div>
                        <div className="calendarLabel"> SCHOOL </div>
                        <p className="addCalendar">add a new calendar</p>
                        <input className="addCalendarInput" type="text"/>
                        </div>
                   </div>
                </div>


                {/* list side */}
                <div className="listSession">
                <div className="dailyList">
                <p className="list-Title">GIM</p>
                  <div className="list">
                  <p className="date">today's date: {today}</p>   
                <p className="dailyGoals">my daily goals:</p>

                     <div className="inputs-list">
                <input type="text" placeholder="add some tasks!"/>
                    </div>

                    <div className="checks">
                <input className="checkbox" type="checkbox"/>
                <label className="label">run 30 min</label>
                     </div>
                  </div>
                </div>
                <div className="calendar"></div>
                </div>
            </div>
        </div>
    )
}
export default ProfilePage