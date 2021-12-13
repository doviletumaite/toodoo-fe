import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import CardList from "../components/CardList"
import List from "../components/List"
import NavBar from "../components/NavBar"
import { edidUser, edidUserProfilePicture, getList, postNewList, setListCard } from "../redux/actions"
import "../style/ProfilePage.css"
import del from "../style/images/delete.png"

const ProfilePage = () => {
    const state = useSelector(s=>s.userInfo)
 
    const dispatch = useDispatch()

    const [modal, setModal] = useState(false)
    const handleShowModalPersonalInfo = () => {setModal(!modal)}
    
    const [modalProfilePicture, setModalProfilePicture] = useState(false)
    const handleShowModalProfilePicture = () => {setModalProfilePicture(!modalProfilePicture)}

    const [editedName, setEditedName] = useState("")
    const [editedBio, setEditedBio] = useState("")
    const [picture, setPicture] = useState("")
    const handleEditedName = (e) => {setEditedName(e.target.value)}
    const handleEditedBio = (e) => {setEditedBio(e.target.value)}

    const handleEdit = () => {
      const newUserInfo = {username: editedName, bio: editedBio}
       dispatch(edidUser({newUserInfo}))
       setModal(!modal)
    }
    const handlePicuture = (e) => {
      const img = e.target.files[0]
      console.log("img",img)
      setPicture(img) 
    }
   const uploadPicture = () => {
     console.log("picture",picture)
    dispatch(edidUserProfilePicture(picture))
   }

   useEffect(() => {
    dispatch(getList(state._id));
  }, []);

  const listsState = useSelector(s => s.list.lists)
  console.log("listsss",listsState)

  const [newList, setNewList] = useState("")
  const handleNewList = (e) => {
    setNewList(e.target.value)
  }
  const handlePostNewList = () => {
    const bodyList = {user:state._id, title:newList }
    dispatch(postNewList(state._id, {bodyList}))
    console.log("bodyList",bodyList)
  }
  const setList = (list) => {
    dispatch(setListCard(list))
    console.log("list dispatched", list)
  }
  const stateListCard = useSelector(s=> s.list.lists)
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
                        <button className="button" onClick={handleShowModalProfilePicture}>edit profile picture</button>
                        {modalProfilePicture ? (<div className="inputPictureContainer">
                          <input className="uploadPicButtonInput" type="file" name="picture" id="picture" onChange={(e)=>handlePicuture(e)}/>
                          <button className="uploadPicButton" onClick={uploadPicture}>update</button>
                        </div>) : (<div></div>)}
                       </div>
                       <div className="userInfoBox">
                        <p className="userInfoBox_profileName" >{state.username}</p>
                        <p className="userInfoBox_bio" >{state.bio}</p>
                        <button className="editInfoButton" onClick={handleShowModalPersonalInfo}>edit personal info</button>
                        {modal ? 
                        (<div className="modalContainer">
                          
                         <input type="text" 
                         placeholder="edit your name"
                         value={editedName}
                         onChange={handleEditedName}
                         />
                         
                         <input type="text" 
                         placeholder="edit your bio"
                         value={editedBio}
                         onChange={handleEditedBio}
                         />
                         <button className="editInfoButtonInputs" onClick={handleEdit}>edit</button>
                        </div>) : (<div></div>)}
                        <p className="calendarsTitle">my lists of tasks:</p>
                        
                      { (Object.keys(listsState).length>= 1) ?
                        listsState.map(l=> (<List list={l}/>)).reverse() : ( 
                       <> <div className="calendarLabel" onClick={()=>setList(listsState)}>{listsState.title}</div>
                       {listsState ?  (<></>) : <img src={del} className="deleteIcon"/> }</>
                        )} 
                        
                        <p className="addCalendar">add a new list</p>
                        <div className="addListInputsWrapper">
                        <input className="addCalendarInput" 
                        value={newList} 
                        onChange={handleNewList} 
                        type="text"/>
                        <button className="addListButton" onClick={handlePostNewList}>add</button>
                        </div>
                        </div>
                   </div>
                </div>


                {/* list side */}
         
                { stateListCard ? (<CardList/>) : (<div></div>)}
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