import NavBar from "../components/NavBar";
import "../style/Login.css";
import google from "../style/images/google.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import API from "../tools/api.js"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUsernameAction } from "../redux/actions";
import { useHistory } from "react-router";
import {create} from "axios"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

 const stateUser = useSelector(s=> s.userInfo.saveUser)
 console.log("stateUser",stateUser)
 const dispatch = useDispatch()
 const history = useHistory()

 const URL = create({baseURL: process.env.REACT_APP_DEPLOYED_API})

  const register = async () => {
    const {data} = await URL.post("/user/newaccount", 
    {username, email, password},
    {method: "POST"})
     dispatch(setUsernameAction(data))
  }
  

  const login = async () => {
    const {data} = await URL.post("/user/login",
    { email, password },
      { method: "POST" }
    )
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    getUserInfo()
  }

  const getUserInfo = async () => {
    const {data} = await API.get("/user/me")
    if(data){
      dispatch(setUsernameAction(data))
      history.push("/showcase/" + data._id)
    }
  }

  // const getUserInfo =async () => {
  //   const {data} = await API.get("/user/me")
  //   history.push("/showcase/" + data._id)
  //   console.log(" data._id",data._id )
  // }

  return (
    <div>
      <NavBar />
      <div className="wrapper">
      <div className="loginBox">
        <div className="loginTitle">create a new profile</div>
        <div className="input-container">
          <div className="input-controler">
            <label>your name</label>
            <input 
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="input-controler">
            <label>your email</label>
            <input 
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="input-controler">
            <label> password </label>
            <input 
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="buttonsGroup">
        <a>
            <button 
            className="loginButton"
            onClick={register}
            >submit</button>
          </a>
          <a>
            <button 
            className="loginButton"
            onClick={login}
            >join!</button>
          </a>
          <a href="https://toodooapi.herokuapp.com/user/googleLogin">
            <button className="googleButton">
              <img src={google} />
              Sign in with Google
            </button>
          </a>

          <Link to="/" className="registerLink">
            <button className="backToLoginButton">back to login page</button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Register;
