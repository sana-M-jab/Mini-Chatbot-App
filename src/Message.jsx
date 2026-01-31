
import { useEffect } from 'react';
import ChatMessages from './ChatMessages'
import "./Message.css";
import { useRef } from 'react';

//to display chat messages
// and auto scroll to the latest message
// whenever a new message is added
function Message({ chatMessages }) {
    const chatMessagesRef =useRef(null)
    useEffect(() => {
      // Scroll to the bottom whenever chatMessages
      //  change
      const containerElem = chatMessagesRef.current;
      if (containerElem){
        containerElem.scrollTop = 
        containerElem.scrollHeight;
      }

    },[chatMessages])
  return (
    <div className="chat-messages-container"
    ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => (
                <ChatMessages
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              ))}
    </div>
  )}

export default Message
  