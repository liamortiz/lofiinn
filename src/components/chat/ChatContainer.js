import ChatMessage from './ChatMessage';
import ChatForm from './ChatForm';
import { useState, useRef, useEffect } from 'react';
import roboIcon from '../../assets/robotic.svg';

import './style.scss';

const Robo = {
    username: "LofiInn Bot",
    message: "Welcome to Lofii Inn! Please keep everything safe for work including art, profile pictures and uploaded music.",
    icon: roboIcon
}

const ChatContainer = () => {

    const chatWrapper = useRef(null);
    const [messages, setMessages] = useState([Robo]);

    useEffect(() => {
        if (chatWrapper.current) {
            const windowHeight = window.innerHeight;
            chatWrapper.current.style=`height: ${windowHeight}px`
        }
    }, []);

    function addMessage(message) {
        setMessages([...messages, message])
    }
    return (
        <div id="chat-wrapper" ref={chatWrapper}>
            <div id="chat-title">
                <h2>Lofi Inn Live</h2>
            </div>
            <div id="chat-container">
                {
                    messages.map((messageBody, index) => 
                    <ChatMessage key={`message-id-${index}`} messageBody={messageBody}/>)
                }
            </div>
            <ChatForm addMessage={addMessage}/>
        </div>
    )
}
export default ChatContainer;