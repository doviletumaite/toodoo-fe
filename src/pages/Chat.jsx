import { useEffect, FormEvent, useState,} from 'react'
import { io } from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../components/NavBar'
import "../style/Chat.css"
import Conversation from '../components/Conversation'
import Message from '../components/Message'
import UsersOnline from '../components/UsersOnline'
import { getConversation } from '../redux/actions'

const ADDRESS = 'http://localhost:3003'
const socket = io(ADDRESS, { transports: ['websocket'] })
const Chat = () => {
   const userState =  useSelector(s => s.userInfo)
   const dispatch = useDispatch()
   useEffect(() => {
    dispatch(getConversation(userState._id))
  }, []);
  
    return(
        <div>
         <NavBar/>
         {/* left side  */}
         <div className='chatPageBody'>
          <div className="conversations col left">
               <div className="serachBarContainer">
              <img className='profilePictureUser' src={userState.profilePicture} />
              <div className="searchItemsContainer">
                <label>search somebody</label>
                <input type="text"/>     
                <button>search</button>
                </div>
            </div>
            <div className='conversationList'>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            <Conversation/>
            </div>
          </div>
          {/* chat center side  */}
          <div className="chat col">
            <div className="messagesContainer">
              <Message/>
              <Message own={true}/> 
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>

            </div>
            <div className="inputForMessageContainer">
              <input type="text" placeholder='write something'/>
              <button>send</button>
            </div>
          </div>
          {/* right side  */}
          <div className="onlineUsersList col right">
            <div className="header">users online</div>
            <div className="cardsList">
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>
              <UsersOnline/>

            
            </div>
          </div>
         </div>
        </div>
    )
}
export default Chat