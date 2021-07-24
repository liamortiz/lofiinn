import PropTypes from 'prop-types';
import defaultAvatar from '../../assets/default-avatar.svg';

const ChatMessage = (props) => {
    return (
        <div id="chat-message">
            <div id="chat-avatar">
            <img alt="avatar" src={props.messageBody.icon || defaultAvatar}/>
            </div>
            <div id="message-details">
                <h6 className="user-name">{props.messageBody.username}</h6>
                <p className="user-message">{props.messageBody.message}</p>
            </div>
        </div>
    )
}

ChatMessage.propTypes = {
    messageBody: PropTypes.exact({
        username: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        icon: PropTypes.string
    })
}

export default ChatMessage;