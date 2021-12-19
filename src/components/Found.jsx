import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createConversation } from "../redux/actions"

const Found = () => {
    const userState = useSelector(s=> s.userInfo)
    const foundFriend = useSelector(s=> s.conversations.friends[0])
    const chatState = useSelector(s=> s.conversations.chats)
    const dispatch = useDispatch()
   const [visibility,setVisibility] = useState("")

    const newConversation = (id) => {
     
        const body = {senderId:userState._id, receiverId:id }
        const find = chatState.find(m => m.members === id)
        console.log("fiiind ***", find)
       dispatch(createConversation({body}))
       setVisibility("hidden")
    }
    return (
        <div>
       { foundFriend ?  <div className={visibility === "hidden" ? "hidden" :"convCardBody"} onClick={()=>newConversation(foundFriend._id)}>
        <img src={foundFriend.profilePicture} className="convUserImg" />
        <div>
        <p className="userName">{foundFriend.username}</p>
        </div>
    </div> : (<></>) }
    </div>
    )
}
export default Found