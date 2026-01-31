import { useState } from "react";
import './App.css'
import ChatInput from './ChatInput.jsx'
import ChatHeader from "./ChatHeader.jsx";
import Message from "./Message.jsx";

//main app component
function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="App-container">
    <ChatHeader name="React Bot" />
    <Message 
    chatMessages={chatMessages}
    setChatMessages={setChatMessages}
    />
    <ChatInput 
    chatMessages={chatMessages}
    setChatMessages={setChatMessages}
    />
    
    </div>
    
  )
}

export default App
