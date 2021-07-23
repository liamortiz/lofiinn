import ChatMessage from './ChatMessage';
import ChatForm from './ChatForm';

import './style.scss';

const ChatContainer = () => {
    return (
        <div id="chat-wrapper">
            <div id="chat-container">
                <ChatMessage/>
                <ChatMessage/>
                <ChatMessage/>
            </div>
            <ChatForm/>
        </div>
    )
}
export default ChatContainer;