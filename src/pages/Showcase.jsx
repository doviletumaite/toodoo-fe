import NavBar from "../components/NavBar"
import "../style/Showcase.css"
import user from "../style/images/user-pl.png"
import post from "../style/images/post.jpeg"

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

                 <div className="post-body">

            <div className="post-user">
            <img className="profile-img-post" src={user}/>
            <div className="post-user-pGroup">
            <p>name</p>
            <p>bio</p>
            <p>time</p>
            </div>
            </div>

            <div className="post-content-paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad minus, provident excepturi eius porro quas, nostrum doloremque, eum facilis delectus officia nam placeat ipsam libero dolorem pariatur. Reprehenderit, alias? fgwdsfhnijwfehd
            fkjsdfopawsjmfposdjkfpòosdjvfgòxdkjvflxfdkzjgvlisdzxgsdkjfhasdfhslkdhfsodlhfsdlohfsldj</div>
            {/* <label for="expanded" role="button">read more</label> */}
            <div className="post-content-img-container">
            <img className="post-content-img" src={post} />
            </div>
            <div className="line-comment"></div>

              <div className="comment-session">
                  <div className="comment">
              <img className="profile-img-comment" src={user}/>
              <div className="comment-detail">
              <p className="comment-name">name</p>
              <p className="comment-itself">comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo harum vitae ut tenetur, eveniet reprehenderit veritatis iste voluptates fugiat quibusdam voluptatem accusamus quos, ad fugit corporis dignissimos praesentium corrupti veniam!</p>
              </div>
                 </div>

              
              </div>
                  </div> 
           
            </div>  

        </div>
    )
}

export default Showcase