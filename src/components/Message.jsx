import { useSelector } from "react-redux"

const Message = ({own}) => {
    const userState =  useSelector(s => s.userInfo)
    return(
        <div className={ own ? "messageBox own" : "messageBox"}>
        <div className={ own ? "messageBody own" : "messageBody"}>
        <img src={userState.profilePicture} className="imgMessage"/>
        <div className="textContainer">
            <p className="text own">ciaogsffddfhjnwsdfp j epftj wpifijws  werf jwepofj weopèdj sedf sedfh sdf hsdif hifehg sdfgwdi sdof eprfujdwepdu ped fps drfp dfgpujg wpoiujg prfdg pis</p>
            <p className="time">5 min ago</p>
        </div>
        
        </div>
        </div>
    )
}
export default Message