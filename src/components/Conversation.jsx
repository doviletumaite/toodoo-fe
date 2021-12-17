import { useSelector } from "react-redux"

const Conversation = () => {
    const userState =  useSelector(s => s.userInfo)
    return (
        <div className="convCardBody">
         <img src={userState.profilePicture} className="convUserImg" />
         <p className="userName">Name</p>
         
        </div>
    )
}
export default Conversation