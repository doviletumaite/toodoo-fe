import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getUsers } from "../redux/actions"
import SingleConversation from "./SingleConversation"

const Conversation = ({conversation:c, onClick:handleChat}) => {
 
    const dispatch = useDispatch()
  
    const userState =  useSelector(s => s.userInfo)

    const friendId = c.members.find( uid => uid !== userState._id )
    
    const friend =  useSelector(s => s.conversations.users.find( u => u._id === friendId))
   
    useEffect(() => {
       //const friendID = c.members.find(m => m !== userState._id)
        dispatch(getUsers(friendId))
      }, []);

      // const isActive = store.activeChat === c.id

      //setChat() { !isActive &&dispatch(setCurrentChat(c.id))}
  
    return ( !friend 
        ? <div>Loading...</div>
        : <div onClick={handleChat}>
           {/* {    friend && (Object.keys(friend).length>= 1) ?
          
                friend.map(f =>  */}

                <div className="convCardBody">
                    <img src={friend.profilePicture} className="convUserImg" />
                    <p className="userName">{friend.username}</p>
                </div> 
         {/* ): (<></>) */}
             
         
       </div>
        // {/* <div className="convCardBody">
        //  <img src={friend.profilePicture} className="convUserImg" />
        //  <p className="userName">{friend.username}</p>
         
        // </div> */}
       
     
    )
}
export default Conversation