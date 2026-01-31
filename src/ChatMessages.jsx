import "./ChatMessages.css";
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { VscRobot } from "react-icons/vsc";

//Receives messages array as props

//Renders a list of Message components

function ChatMessages({message , sender}) {
  return (
    <div className={
     sender === "user" 
     ? "chatbot-message-user" 
     : "chatbot-message-robot" }
    >
        {sender === "user" && <FaRegUserCircle  className="icone" />}
        <p className={sender === "user" ? "chat-message-text" : "chat-message-text-robot"}>{message}</p>
        {sender === "robot" && <VscRobot className="icone-robot" />}
    </div>
  )
}

export default ChatMessages
