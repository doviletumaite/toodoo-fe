import { useEffect, FormEvent, useState } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import "../style/Chat.css";
import Conversation from "../components/Conversation";
import Message from "../components/Message";
import UsersOnline from "../components/UsersOnline";
import {
  getConversation,
  getMessages,
  getUsers,
  incomingMessage,
  postNewMessage,
  searchUser,
  sendNewMessage,
  setSelectedChat,
  setUsersOnline,
} from "../redux/actions";
import { useRef } from "react";
import Found from "../components/Found";
import { Scrollbar } from "smooth-scrollbar-react";
import ScrollableFeed from "react-scrollable-feed";

const ADDRESS = process.env.REACT_APP_DEPLOYED_API;
const socketIO = io(ADDRESS, { transports: ["websocket"] });

const Chat = () => {
  const userState = useSelector((s) => s.userInfo);
  const chats = useSelector((s) => s.conversations.chats);
  const usersOnlineState = useSelector((s) => s.conversations.friendsOnline);
  const dispatch = useDispatch();

  const [chat, setChat] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [query, setQuery] = useState("");
  const selectedChat = useSelector((state) =>
    state.conversations.chats.find(
      (chat) => chat._id === state.conversations.active
    )
  );

  useEffect(() => {
    dispatch(getConversation(userState._id));
  }, []);

  const handleChat = (c) => {
    setChat(true);
    dispatch(setSelectedChat(c._id));
    dispatch(getMessages(c._id));
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    const receiverId = selectedChat.members.find((m) => m !== userState._id);

    const messageTosend = {
      sender: userState._id,
      text: newMessage,
      receiverId,
      conversationId: selectedChat._id,
    };
    socketIO.emit("sendMessage", messageTosend);

    dispatch(postNewMessage({ messageTosend }));
  };

  useEffect(() => {
    socketIO.emit("addUser", userState._id);
    socketIO.on("getUsers", (users) => {
      const usersOnline = async (id) => {
        try {
          const accessToken = localStorage.getItem("accessToken");

          let response = await fetch(ADDRESS + "/user/" + id, {
            headers: { Authorization: "Bearer " + accessToken },
          });

          if (response.ok) {
            let personOnline = await response.json();

            dispatch(setUsersOnline(personOnline));
          }
        } catch (error) {
          console.log(error);
        }
      };

      users.map((u) => {
        usersOnline(u.userId);
      });
    });

    socketIO.on("incoming-msg", (message) => {
      dispatch(incomingMessage(message));
      console.log("messageeeeCoooming", message);
    });
  }, []);

  const [peopleFromSearch, setPeopleFromSearch] = useState([])
  const find = () => {
    dispatch(searchUser(query));
    setPeopleFromSearch(query)
    console.log("people from search",query )
  };

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, newMessage]);

  return (
    <div>
      <NavBar />
      {/* left side  */}
      <div className="chatPageBody">
        <div className="conversations col left">
          <div className="serachBarContainer">
            <img
              className="profilePictureUser"
              src={userState.profilePicture}
            />
            <div className="searchItemsContainer">
              <label>search somebody</label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              
              <button onClick={find}>search</button>
                
            </div>
           <Found />
          </div>
          <div className="conversationList">
           
            {chats ? (
              chats.map((c) => (
                <Conversation conversation={c} onClick={() => handleChat(c)} />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* chat center side  */}
        <div className="chat col">
          <div className="messagesContainer">
            {chat && selectedChat ? (
              selectedChat.messages?.map((c) => (
                <div className="scrollReference" ref={scrollRef}>
                  <Message messages={c} own={c.sender === userState._id} />
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="inputForMessageContainer">
            <input
              type="text"
              placeholder="write something"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSubmitMessage}>send</button>
          </div>
        </div>
        {/* right side  */}
        <div className="onlineUsersList col right">
          <div className="header">users online</div>
          <div className="cardsList">
            {usersOnlineState ? (
              usersOnlineState.map((u) => <UsersOnline usersOnlineState={u} />)
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
