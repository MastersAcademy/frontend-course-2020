document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const msgInput = document.getElementById('input');
    const messageFlowList = document.getElementById('messages');

    function getMessage() {
        return msgInput.value;
    }

    function validateMessage(messege) {
        try {
            if (!messege) throw new Error('input should not be empty');
            if (!(messege === messege.trim())) throw new Error('input must not contain spaces');
            return messege;
        } catch (error) {
            alert(error);
            throw error;
        }
    }

    function createMessage(messege) {
        const messageBubble = document.createElement('li');
        messageBubble.innerHTML = messege;
        return messageBubble;
    }

    function insertMessage(messageBubble) {
        messageFlowList.appendChild(messageBubble);
    }

    function clearInput() {
        msgInput.value = '';
    }

    function mainAppFlow() {
        let message = getMessage();
        message = validateMessage(message);
        const messageBubble = createMessage(message);
        insertMessage(messageBubble);
        clearInput();
    }

    function keyboardHandler(event) {
        if (event.key === 'Enter') mainAppFlow();
    }

    function clickHandler(event) {
        if (event.type === 'mouseup') mainAppFlow();
    }

    button.addEventListener('mouseup', clickHandler);
    msgInput.addEventListener('keypress', keyboardHandler);
});
