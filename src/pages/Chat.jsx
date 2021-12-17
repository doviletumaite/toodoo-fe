import { useEffect, FormEvent, useState,} from 'react'
import { io } from 'socket.io-client'
import { Container, Row, Col, Button, ListGroup, Form, FormControl } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ADDRESS = 'http://localhost:3003'
const socket = io(ADDRESS, { transports: ['websocket'] })
const Chat = () => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
  const [onlineUsers, setOnlineUsers] = useState([])
  const [chatHistory, setChatHistory] = useState([])
  useEffect(() => {
    socket.on('connect', () => {
    console.log('Connection established!')
    })
    socket.on('loggedin', () => {
        console.log('The client now is logged in!')
     
        setLoggedIn(!loggedIn)
        fetchOnlineUsers()
        socket.on('newConnection', () => {
          console.log('new user connected!')
          fetchOnlineUsers()
        })
        socket.on('message', (newMessage) => {
          
            setChatHistory((updatedChatHistory) => [...updatedChatHistory, newMessage])
         
          })
      
      })
 } )

 const fetchOnlineUsers = async () => {
    try {
      let response = await fetch(ADDRESS + '/chat/usersOnline')
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        let onlineUsers= data.onlineUsers
        setOnlineUsers(onlineUsers)
      } else {
        console.log('Something went wrong fetching the online users :(')
      }
    } catch (error) {
      console.log(error)
    }
  }
 
  const user = useSelector(s=>s.userInfo)

  const handleUsernameSubmit = async (e) => {
    e.preventDefault()

    socket.emit('setRoom', {
        username: user.userName,
      room: room
    })

    const res = await fetch(ADDRESS + '/chat/' + room)
    const oldHistory = await res.json()

    setChatHistory(oldHistory)

  }

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    // console.log(e)

    const newMessage = {
      text: message,
      sender: username,
      timestamp: Date.now(),
      id: socket.id,
    }

    socket.emit('sendMessage', { message: newMessage, room })

    // a useState setter function can work in two ways
    setChatHistory([...chatHistory, newMessage])
    setMessage('')
  }
  const [room, setRoom] = useState("blue")
  const toggleRoom = () => {
    setRoom(r => r === "blue" ? "red" : "blue")
  }

    return(
        <div>
  <Container fluid className="px-4">
      <Row className="my-3" style={{ height: '95vh' }}>
        <Col md={10} className="d-flex flex-column justify-content-between">
          {/* MAIN MESSAGES AREA */}
          {/* TOP SECTION: USERNAME FIELD */}
          <Form onSubmit={handleUsernameSubmit} className="d-flex">
            <FormControl
              placeholder="Insert your username here"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loggedIn}
            />
            {/* <FormControl type="text" onChange={handleRoomInput} value={room} /> */}
            {/* <button type="submit" className="btn btn-primary ml-2"> submit </button> */}
            <Button onClick={toggleRoom} variant={room === "blue" ? "primary" : "danger"} className="ml-2">Room</Button>
          </Form>
          {/* MIDDLE SECTION: CHAT HISTORY */}
          <ListGroup>
            {chatHistory.map((message, i) => (
              <ListGroup.Item key={i}>
                <strong>{message.sender}</strong>
                <span className="mx-1"> | </span>
                <span>{message.text}</span>
                <span className="ml-2" style={{ fontSize: '0.7rem' }}>
                  {new Date(message.timestamp).toLocaleTimeString('en-US')}
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
          {/* BOTTOM SECTION: NEW MESSAGE INPUT FIELD */}
          <Form onSubmit={handleMessageSubmit}>
            <FormControl
              placeholder="Send a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={!loggedIn}
            />
          </Form>
        </Col>
        <Col md={2} style={{ borderLeft: '2px solid black' }}>
          {/* CONNECTED USERS AREA */}
          <div className="my-3">Connected users:</div>
          <ListGroup>
            {onlineUsers
              .filter(u => u.room === room)
              .map((user) => (
                <ListGroup.Item key={user.id}>{user.username}</ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
        </div>
    )
}
export default Chat