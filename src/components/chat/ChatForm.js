import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import gifIcon from '../../assets/gif.svg';
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
    const textForm = useRef(null);


    useEffect(() => {
        const textAreaElement = textArea.current;
        const listener = event => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            event.preventDefault();
            textForm.current.requestSubmit();
          }
        };
        textAreaElement.addEventListener("keydown", listener);
        return () => {
            textAreaElement.removeEventListener("keydown", listener);
        };
    }, []);

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

        if (message.length <= 0) return;

        props.addMessage({username: "Anonymous", message});

        event.target.reset();

        setMessage("");
        setCharacters(0);
        setShowPicker(false);

        textArea.current.focus();
    }
    return (
        <div id="chat-form-wrapper">
        <div className="divider"></div>
        <div id="user-information">
            <img src={defaultAvatar} alt=""/>
            <h6 className="user-name">Anonymous</h6>
        </div>
        <form id="message-form" onSubmit={handleSubmit} ref={textForm}>
            <textarea 
            placeholder="Say Something.." 
            name="message" 
            onChange={handleChange} 
            ref={textArea}
            maxLength="200"
            onClick={() => setShowPicker(false)}>
            </textarea>
            
            <div id="feature-tab">

            {showPicker && 
                <Picker onEmojiClick={handleChange} pickerStyle={pickerStyle}/>
            }
            <div id="picker-toggler" onClick={() => setShowPicker(!showPicker)}></div>
            <img className="gif-button" src={gifIcon} alt=""/>

            <div id="send-section">
                <span>{characters}/{maxCharacters}</span>
                <button type="submit" className="btn chat-form-button"></button>
            </div>
        </div>
        </form>
        </div>
    )
}

ChatForm.propTypes = {
    addMessage: PropTypes.func.isRequired
}

export default ChatForm;