import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { setUsernameAction } from "../redux/actions"
import API from "../tools/api"
import {create} from "axios"
import NavBar from "../components/NavBar"
import "../style/Login.css";

const ShowcasePre = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const URL = create({baseURL: "http://localhost:3003"})
    const path  = history.location.pathname.split('/')
    console.log(path[2])
    console.log(path[3])
    const login = async () => {
        const data = await URL.get("/user/"+path[2],
        )
         localStorage.setItem("accessToken", path[3]);
       console.log(data)
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
            <NavBar/>
           
            <div className="wrapper">
      <div className="loginBox">
        <div className="loginTitle">just one second :)</div>
     
        <div className="buttonsGroup">   
        <button className="continueButton" onClick={()=>login()}>continue</button>
        </div>
      </div>
      </div>
        </div>
    )
}
export default ShowcasePre