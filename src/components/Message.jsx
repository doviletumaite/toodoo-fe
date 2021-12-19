import moment from "moment"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getUsers } from "../redux/actions"

const Message = ({own, messages:c}) => {
    const userState =  useSelector(s => s.userInfo)
    const friendsState = useSelector(s => s.conversations.users)
    const thatFriend = friendsState.find(f => f._id === c.sender && f._id !== userState._id)
 
  
    return(
        <div className={ own ? "messageBox own" : "messageBox"}>
        <div className={ own ? "messageBody own" : "messageBody"}>
      {thatFriend==undefined ? <img src={own ? userState.profilePicture : ""} className="imgMessage"/> : <img src={own ? userState.profilePicture : thatFriend.profilePicture} className="imgMessage"/>}
        <div className="textContainer">
            <p className={ own ? "text own" : "text"}>{c.text}</p>
            <p className="time">{moment(c.createdAt).fromNow()}</p>
        </div>
        
        </div>
        </div>
    )
}
export default Message