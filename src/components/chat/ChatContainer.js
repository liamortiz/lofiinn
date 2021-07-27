import ChatMessage from './ChatMessage';
import ChatForm from './ChatForm';
import { useState, useRef, useEffect } from 'react';
import lofiBot from '../../assets/robotic.svg';

import './_chat.scss';

const Robo = {
    username: "LofiInn Bot",
    message: "Welcome to Lofii Inn! Please keep everything safe for work including art, profile pictures and uploaded music.",
    icon: lofiBot
}

const ChatContainer = () => {

    const chatContainerElement = useRef(null);
    const chatWrapper = useRef(null);
    const [messages, setMessages] = useState([Robo]);
    const [showChat, setShowChat] = useState(true);

    useEffect(() => {
        const windowHeight = window.innerHeight;
        chatContainerElement.current.style=`height:${windowHeight - 360}px`;

        window.onresize = handleWindowResize;

        return () => {
            window.onresize=null;
        }
    }, []);

    useEffect(() => {
        chatWrapper.current.style=(showChat ? "height: 85%" : "height: 30px");
    }, [showChat]);

    function handleWindowResize() {
        const windowHeight = window.innerHeight;
        chatContainerElement.current.style=`height:${windowHeight - 360}px`;
    }


    function addMessage(message) {
        setMessages([...messages, message])
    }
    return (
        <div id="chat-wrapper" ref={chatWrapper}>
            <div id="chat-title" onClick={() => setShowChat(!showChat)}>
                <h2>{showChat ? 'Hide Chat' : 'Show Chat'}</h2>
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