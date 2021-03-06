import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/NavBar.css";
import { useHistory } from "react-router";
import { useEffect } from "react";
import chat from "../style/images/chat.png";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import options from "../style/images/options.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogout } from "../redux/actions";
import stickybits from "stickybits";

const NavBar = () => {
  const state = useSelector((s) => s.userInfo);
  const dispatch = useDispatch()
  const history = useHistory();
  const pathname = history.location.pathname;

  // const renderTooltipChat = (props) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     join the chat!
  //   </Tooltip>
  // );

  // const renderTooltipProfile = (props) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     check out your profile!
  //   </Tooltip>
  // );
  const [dropDown, setDropDown] = useState(false)
  const showDropdown = () => {
    setDropDown(!dropDown)
  }
  
  const logout = () => {
    history.push("/")
    window.localStorage.clear()
  }

  stickybits('navbar',{
    customStickyChangeNumber: null,
    noStyles: false,
    stickyBitStickyOffset: 0,
    scrollEl: window,
    parentClass: 'js-stickybit-parent',
    stickyClass: 'js-is-sticky',
    stuckClass: 'js-is-stuck',
    stickyChangeClass: 'js-is-sticky--change',
    useFixed: false,
    verticalPosition: 'top',
    useStickyClasses: true,
    useGetBoundingClientRect: false
  });
  return (
    <div className="navbar">

    {
      pathname !== "/" && pathname !==  "/register" ? (
      <Link to={"/showcase/" + state._id} className="navbar-title-link">
        <div className="navbar-title">toodoo</div>
      </Link>) : (<div className="navbar-title">toodoo</div> )
      
      }

      <div className="logos-group">
        {pathname !== "/" && pathname !==  "/register" ? (
          <>
            {/* <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipChat}
            > */}
              <Link to={"/chat/" + state._id} className="navbar-title-link">
                <img className="chat-logo" src={chat} />
                
              </Link>
            {/* </OverlayTrigger> */}
            <Link to={"/chat/" + state._id} className="navbar-chat-link">
            <div className="messages">chat</div>
            </Link>
            <img className="user_pic" src={state.profilePicture} />

            {/* <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipProfile}
            > */}
            <div className="userBox">
              <div
                className="navbar-user"
                onClick={() => history.push("/profilePage/" + state._id)}
              >
                {state.username}
              
              </div></div>
                <img src={options} className="options" onClick={showDropdown}/>
            {/* </OverlayTrigger> */}
          </>
        ) : (
          <div></div>
        )}

        {dropDown ? <div className="dropdown" onClick={logout}>logout</div> : (<></>)}
      </div>
    </div>
  );
};

export default NavBar;
