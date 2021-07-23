import ChatMessage from './ChatMessage';
import ChatForm from './ChatForm';
import { useState } from 'react';
import './style.scss';

const ChatContainer = () => {

    const [messages, setMessages] = useState([]);

    function addMessage(message) {
        if (message.length > 1) {
            setMessages([...messages, message])
        }
    }
    return (
        <div id="chat-wrapper">
            <div id="chat-container">
                {
                    messages.map((message, index) => 
                    <ChatMessage key={`message-id-${index}`} message={message}/>)
                }
            </div>
            <ChatForm addMessage={addMessage}/>
        </div>
    )
}
export default ChatContainer;