import NavBar from "../components/NavBar";
import "../style/Login.css";
import google from "../style/images/google.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {create} from "axios"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [query, setQuery] = useState("")

  const dispatch = useDispatch()
  const data = useSelector((s) => s)

  const URL = create({baseURL: "http://localhost:3003"})
  return (
    <div>
      <NavBar />
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
        </div>
        <div className="buttonsGroup">
          <a href="">
            <button className="loginButton">login</button>
          </a>
          <a href="http://localhost:3003/user/googleLogin">
            <button className="googleButton">
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
  );
};

export default Login;
