import { Link } from "react-router-dom"
import "../style/NavBar.css"

const NavBar = () => {
    return ( 
        <div className="navbar">
            <Link to="/home" className="navbar-title-link" >
            <div className="navbar-title">
                toodoo
            </div>
           </Link>
        </div>
    )
}

export default NavBar