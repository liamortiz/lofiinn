const ChatForm = () => {

    function handleChange() {

    }
    function handleSubmit() {
        
    }

    return (
        <form id="message-form" onSubmit={handleSubmit}>
            <textarea name="message" onChange={handleChange}>
            </textarea>
            <button type="submit">Send</button>
        </form>
    )
}
export default ChatForm;