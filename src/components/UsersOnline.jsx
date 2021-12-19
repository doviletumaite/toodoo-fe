import { useSelector } from "react-redux"

const UsersOnline = ({usersOnlineState}) => {
    return (
     <div className="cardBody">
      <img src={usersOnlineState.profilePicture} />
      <p>{usersOnlineState.username}</p>
     </div>
    )
}
export default UsersOnline