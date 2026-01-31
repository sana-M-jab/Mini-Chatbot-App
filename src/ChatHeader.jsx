import './ChatHeader.css';
import React from 'react';
import { FaRobot } from "react-icons/fa6";
//Displays chatbot name
function ChatHeader(props) {
  return (
    <div className="chat-header">
      <h2>{props.name}</h2><FaRobot className='robot-icone' />
    </div>
  )
}

export default ChatHeader
