import { useSelector } from "react-redux"

const UsersOnline = ({usersOnlineState}) => {
    const usersOnline = useSelector(s=> s.conversations.friendsOnline)
    console.log("list of online friend in the component",usersOnlineState )
  
 
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