import { useState } from "react";
import PropTypes from 'prop-types';

const ChatForm = (props) => {

    const [message, setMessage] = useState("");

    function handleChange(event) {
        setMessage(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        props.addMessage(message);

        event.target.reset();
        setMessage("");
    }

    return (
        <form id="message-form" onSubmit={handleSubmit}>
            <textarea name="message" onChange={handleChange}>
            </textarea>
            <button type="submit">Send</button>
        </form>
    )
}

ChatForm.propTypes = {
    addMessage: PropTypes.func.isRequired
}

export default ChatForm;