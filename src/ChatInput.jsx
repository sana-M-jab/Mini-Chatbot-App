import { useState } from "react";
import "./ChatInput.css";

//to input text and send it to chatbot
function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState("");
    function saveInputText(event){
        setInputText(event.target.value);
    }
    
    function handleKeyDown(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            sendMessage();
        }
    }
    
    async function sendMessage() {
          const text = inputText.trim();
          if (!text) return; // don't send empty messages
          setInputText('');

          const userMessage = {
            message: text,
            sender: 'user',
            id: crypto.randomUUID()
          };

          const typingId = crypto.randomUUID();
          const typingMessage = {
            message: "Typing...",
            sender: 'robot',
            id: typingId
          };

          // add user message and typing placeholder
          setChatMessages(prev => [...prev, userMessage, typingMessage]);

          try {
            const response = await window.chatbot.getResponseAsync(text);
            // replace the typing message with the actual response
            setChatMessages(prev => prev.map(m => m.id === typingId ? { ...m, message: response } : m));
          } catch (err) {
            console.error(err);
            setChatMessages(prev => prev.map(m => m.id === typingId ? { ...m, message: 'Error getting response' } : m));
          }
        }
    
    return(

        <div className="chatbot-container">
            <input
            className="chatbot-input"
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}
              onKeyDown={handleKeyDown}
              value={inputText}
            />
            <button
            className="send-button"
            onClick={sendMessage}
            >Send</button>
        </div>
    )
}
export default ChatInput;