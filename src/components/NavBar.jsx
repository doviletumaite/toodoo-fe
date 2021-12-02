import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "../style/NavBar.css"
import {useHistory} from "react-router"
import { useEffect } from "react"
import chat from "../style/images/chat.png"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

const NavBar = () => {
    const state = useSelector(s=> s.userInfo)
    const history = useHistory()
   
    const renderTooltipChat = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          join the chat!
        </Tooltip>
      );
      
      const renderTooltipProfile = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          check out your profile!
        </Tooltip>
      );
  
    return ( 
        <div className="navbar">
            <Link to={"/showcase/"+state._id} className="navbar-title-link" >
            <div className="navbar-title">
                toodoo
            </div>
           </Link>

        

           <div className="logos-group">
           <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltipChat}
          >
           <Link to={"/chat/"+state._id} className="navbar-title-link" >
            <img className="chat-logo" src={chat}/>
           </Link>
           </OverlayTrigger>


           {state.username  ? 
              <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipProfile}
              >
           <div className="navbar-user" onClick={() => history.push("/profilePage/"+state._id)}>
                {state.username}
            </div>
            </OverlayTrigger>
            : <div></div>
            }
         </div>
        </div>
    )
}

export default NavBar