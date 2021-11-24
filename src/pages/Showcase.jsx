import NavBar from "../components/NavBar"
import "../style/Showcase.css"
import user from "../style/images/user-pl.png"
import post from "../style/images/post.jpeg"
import Post from "../components/Post"

const Showcase = () => {
    return (
        <div>
            <NavBar/>
            <div className="showcase-main">
            <div className="shareBox">
                <div className="shareBox-input-img">
                 <input className="input-share"></input>
                <img className="profile-img" src={user}/>
                </div>
                 <p className="shareBox-title">share something today :)</p>
            </div> 

           <Post/>

            </div>  

        </div>
    )
}

export default Showcase