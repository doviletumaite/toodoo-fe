import NavBar from "../components/NavBar"
import "../style/Showcase.css"
import user from "../style/images/user-pl.png"
import share from "../style/images/add-image.png"
import Post from "../components/Post"

const Showcase = () => {
   
    return (
        <div>
            <NavBar/>
            <div className="showcase-main">
            <div className="shareBox">
                
                <div className="shareBox-input-img">
                    <div className="shareBoxForBtn">
                   <img className="share-btn" src={share}/> 
                    </div>
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