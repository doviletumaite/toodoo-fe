import NavBar from "../components/NavBar";
import "../style/Login.css";
import google from "../style/images/google.png";
import { Link } from "react-router-dom";

const Login = () => {
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
        <a href="">
          <button className="googleButton">
            <img src={google} />
            Sign in with Google
          </button>
        </a>

        <div className="registerString">not registered yet?</div>
        <Link to="/" className="registerLink">
          <button className="registerButton">create a new account!</button>
        </Link>
</div>
      </div>
    </div>
  );
};

export default Login;
