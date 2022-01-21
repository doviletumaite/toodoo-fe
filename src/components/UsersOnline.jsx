import { useSelector } from "react-redux"

const UsersOnline = ({usersOnlineState}) => {
    const usersOnline = useSelector(s=> s.conversations.friendsOnline)
  
 
    return (
        <>
    {usersOnlineState===[] ? (<></>) : (<div className="cardBody">
      <img src={usersOnlineState.profilePicture}/>
      <p>{usersOnlineState.username}</p>
     </div>) }
     </>
    )
}
export default UsersOnline