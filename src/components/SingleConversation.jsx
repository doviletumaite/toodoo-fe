const SingleConversation = ({conversation:f}) => {
    console.log("F", f)
    return (
        <div className="convCardBody">
         <img src={f.profilePicture} className="convUserImg" />
         <p className="userName">{f.username}</p>
         
        </div>
    )
}
export default SingleConversation