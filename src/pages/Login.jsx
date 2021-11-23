import NavBar from "../components/NavBar"
import "../style/Login.css"

const Login = () => {
    return(
        <div>
           <NavBar/>  
        <div className="loginBox">
            <div className="loginTitle">login on your profile</div>
            <div className="input-container">
                <div className="input-controler">
                <label>your name</label>
                <input className="input"></input>
                </div>
                <div className="input-controler">
                <label>your email</label>
                <input className="input"></input>
                </div>
                <div className="input-controler">
                <label> password </label>
                <input className="input"></input>
                </div>
                <button className="Google-button">Sign in with Google</button>
            </div>
        </div>
        </div>
    )
    }
    
    export default Login