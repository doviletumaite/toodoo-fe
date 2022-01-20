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
  const [onlineUsers, setOnlineUsers] = useState([]);
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
      console.log("users from socket", users);

      const usersOnline = async (id) => {
        try {
          const accessToken = localStorage.getItem("accessToken");
          console.log("user id for user online", id);
          let response = await fetch(ADDRESS + "/user/" + id, {
            headers: { Authorization: "Bearer " + accessToken },
          });

          if (response.ok) {
            let peopleOnline = await response.json();
            setOnlineUsers(peopleOnline);
            dispatch(setUsersOnline(onlineUsers));
            console.log("people onlie", peopleOnline);
          }
        } catch (error) {
          console.log(error);
        }
      };
      console.log("users socket online", users);
      users.map((u) => {
        usersOnline(u.userId);
        console.log("user id online from socket", u);
      });
    });

    socketIO.on("incoming-msg", (message) => {
      dispatch(incomingMessage(message));
      console.log("messageeeeCoooming", message);
    });
  }, []);

  const find = () => {
    dispatch(searchUser(query));
  };

  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

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
          </div>
          <div className="conversationList">
            <Found />
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
            <div className="scrollReference" ref={scrollRef}>
              {chat && selectedChat ? (
                selectedChat.messages?.map((c) => (
                  <Message messages={c} own={c.sender === userState._id} />
                ))
              ) : (
                <></>
              )}
            </div>
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
