import NavBar from "../components/NavBar";
import "../style/Login.css";
import google from "../style/images/google.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router";
import {create} from "axios"
import API from "../tools/api.js";
import { setUsernameAction } from "../redux/actions";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [query, setQuery] = useState("")

  const dispatch = useDispatch()
  const data = useSelector((s) => s)
  const history = useHistory()

  const URL = create({baseURL: "http://localhost:3003"})

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

  return (
    <div>
      <NavBar />
      <div className="wrapper">
      <div className="loginBox">
        <div className="loginTitle">login on your profile</div>
        <div className="input-container">
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
            onChange={(e) => setPassword(e.currentTarget.value)}
            ></input>
          </div>
        </div>
        <div className="buttonsGroup">
          <Link to={query}>
            <button 
            className="loginButton"
            onClick={(e)=>login()}
            >login</button>
          </Link>
          <a href="http://localhost:3003/user/googleLogin">
            <button className="googleButton"
            onClick={() => dispatch(setUsernameAction(data))}
            >
              <img src={google} />
              Sign in with Google
            </button>
          </a>

          <div className="registerString">not registered yet?</div>
          <Link to="/register" className="registerLink">
            <button className="registerButton">create a new account!</button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
