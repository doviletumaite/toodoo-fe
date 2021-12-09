import { useState } from "react"
import { useSelector } from "react-redux"
import NavBar from "../components/NavBar"
import "../style/ProfilePage.css"

const ProfilePage = () => {
    const state = useSelector(s=>s.userInfo)
    const date = new Date()
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    const [modal, setModal] = useState(false)
    const handleShowModalPersonalInfo = () => {setModal(!modal)}
    const today = dd + '/' + mm + '/' + yyyy;
    return (
        <div>
            <NavBar/>
            <div className="profilePage">
                <div className="profileAndListContainer">
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
                        <button className="editInfoButton" onClick={handleShowModalPersonalInfo}>edit personal info</button>
                        {modal ? 
                        (<div className="modalContainer">
                          <label>Name</label>
                         <input type="text"/>
                         <label>Bio</label>
                         <input type="text"/>
                        
                        </div>) : (<div></div>)}
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
    
                {/* calendar */}
                <div className="calendarContainer">
                    <table>
                    <tr>
           <td colSpan="14" className="month">MONTH</td>
                    </tr>
  <tr>
    <td>Monday</td>
    <td>Tuesday</td>
    <td>Wednesday</td>
    <td>Thursday</td>
    <td>Friday</td>
    <td>Saturday</td>
    <td>Sunday</td>
  </tr>

    <tr>
    <td>29</td>
    <td>30</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>

    <tr>
    <td>29</td>
    <td>30</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>

    <tr>
    <td>29</td>
    <td>30</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>

   <tr>
    <td>29</td>
    <td>30</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>

    <tr>
    <td>29</td>
    <td>30</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>

  <tr>
    <td>29</td>
    <td>30</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
                    </table>
                </div>
                <div className="extra_space"></div>
            </div>
        </div>
    )
}
export default ProfilePage