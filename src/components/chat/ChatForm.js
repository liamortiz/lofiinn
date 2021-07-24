import { useState, useRef } from "react";
import PropTypes from 'prop-types';
import emojiIcon from '../../assets/chat-emoji.svg';
import gifIcon from '../../assets/chat-gif.svg';
import defaultAvatar from '../../assets/default-avatar.svg';
import Picker from 'emoji-picker-react';

const ChatForm = (props) => {

    const pickerStyle = {
        position: "absolute",
        top: "-400px",
        left: "50px"
    }

    const [message, setMessage] = useState("");
    const [characters, setCharacters] = useState(0);
    const [showPicker, setShowPicker] = useState(false);
    const maxCharacters = 200;
    const textArea = useRef(null);

    function handleChange(event, emojiObject=null) {
        if (message.length + 1 > maxCharacters) {
            // Show error
            return;
        }
        const _message = (emojiObject) ? message + emojiObject.emoji : event.target.value;
        if (emojiObject) {
            textArea.current.value += emojiObject.emoji;
            textArea.current.focus();
            setShowPicker(false);
        }

        setCharacters(_message.length)
        setMessage(_message);
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.addMessage({username: "Anonymous", message});

        event.target.reset();
        setMessage("");
        setCharacters(0);
        setShowPicker(false);
    }
    return (
        <>
        <div className="divider"></div>
        <div id="user-information">
            <img src={defaultAvatar}/>
            <h6 className="user-name">Anonymous</h6>
        </div>
        <form id="message-form" onSubmit={handleSubmit}>
            <textarea 
            placeholder="Say Something.." 
            name="message" 
            onChange={handleChange} 
            ref={textArea}
            maxLength="200">
            </textarea>
            
            <div id="feature-tab">

            {showPicker && 
                <Picker onEmojiClick={handleChange} pickerStyle={pickerStyle}/>
            }
            <img id="picker-toggler" src={emojiIcon} onClick={() => setShowPicker(!showPicker)}/>
            <img src={gifIcon}/>

            <div id="send-section">
                <span>{characters}/{maxCharacters}</span>
                <button type="submit" className="btn chat-form-button"></button>
            </div>
        </div>
        </form>
        </>
    )
}

ChatForm.propTypes = {
    addMessage: PropTypes.func.isRequired
}

export default ChatForm;