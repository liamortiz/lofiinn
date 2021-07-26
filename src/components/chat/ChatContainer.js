import ChatMessage from './ChatMessage';
import ChatForm from './ChatForm';
import { useState, useRef, useEffect } from 'react';
import roboIcon from '../../assets/robotic.svg';

import './_chat.scss';

const Robo = {
    username: "LofiInn Bot",
    message: "Welcome to Lofii Inn! Please keep everything safe for work including art, profile pictures and uploaded music.",
    icon: roboIcon
}

const ChatContainer = () => {

    const chatContainerElement = useRef(null);
    const [messages, setMessages] = useState([Robo]);

    useEffect(() => {
        const windowHeight = window.innerHeight;
        chatContainerElement.current.style=`height: ${windowHeight-372}px`;
        window.onresize=handleWindowResize;

        return () => {
            window.onresize=null;
        }
    }, []);

    function handleWindowResize() {
        const windowHeight = window.innerHeight;
        chatContainerElement.current.style=`height: ${windowHeight-372}px`;
    }

    function addMessage(message) {
        setMessages([...messages, message])
    }
    return (
        <div id="chat-wrapper">
            <div id="chat-title">
                <h2>Lofi Inn Live</h2>
            </div>
            <div id="chat-container" ref={chatContainerElement}>
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