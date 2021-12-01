import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "../style/NavBar.css"
import {useHistory} from "react-router"

const NavBar = () => {
    const state = useSelector(s=> s.userInfo)
    console.log("state navbar",state )
    const history = useHistory()
    return ( 
        <div className="navbar">
            <Link to={"/showcase/"+state._id} className="navbar-title-link" >
            <div className="navbar-title">
                toodoo
            </div>
           </Link>
           
           {state.username  ? 
           
           <div className="navbar-user" onClick={() => history.push("/profilePage/"+state._id)}>
                {state.username}
            </div>
           
            : <div></div>
            }
         
        </div>
    )
}

export default NavBar