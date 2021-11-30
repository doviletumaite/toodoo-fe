import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "../style/NavBar.css"

const NavBar = () => {
    const state = useSelector(s=> s.userInfo)
    
    return ( 
        <div className="navbar">
            <Link to="/home" className="navbar-title-link" >
            <div className="navbar-title">
                toodoo
            </div>
           </Link>
           <Link to="/home" className="navbar-user-link" >
            <div className="navbar-user">
                {state.username}
            </div>
           </Link>
        </div>
    )
}

export default NavBar