import PropTypes from 'prop-types';

const ChatMessage = (props) => {
    return (
        <div id="chat-message">
            <img src="https://funny-photo.s3.amazonaws.com/preview/navi_avatar/smiling-girl-blue-face-effect.jpg"/>
            <h6 className="user-name">John Julies</h6>
            
            <p className="user-message">{props.message}</p>
        </div>
    )
}

ChatMessage.propTypes = {
    message: PropTypes.string.isRequired
}

export default ChatMessage;