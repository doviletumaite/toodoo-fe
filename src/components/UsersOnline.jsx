import { useSelector } from "react-redux"

const UsersOnline = () => {
    const userState =  useSelector(s => s.userInfo)
    return (
     <div className="cardBody">
      <img src={userState.profilePicture} />
      <p>Name</p>
     </div>
    )
}
export default UsersOnline