const inputFormNode = document.querySelector('[data-input-form]');
const messageInputNode = document.querySelector('[data-message-input]');
const messageOutputTemplateNode = document.querySelector('[data-message-output-template]');
const messageBodyNode = messageOutputTemplateNode.content.querySelector('[data-message-body]');
const messagesOutputNode = document.querySelector('[data-messages-output]');
const errorMessageNode = document.querySelector('[data-error-message]');
const statusTypingNode = document.querySelector('[data-typing-status]');

function createMessage() {
    messageBodyNode.textContent = messageInputNode.value;
    const message = document.importNode(messageOutputTemplateNode.content, true);
    messagesOutputNode.appendChild(message);
}

function trimMessage() {
    messageInputNode.value = messageInputNode.value.trim();
}


function checkMessage() {
    trimMessage();
    const errorMessage = [];
    if (!messageInputNode.value) {
        errorMessage.push('Please enter your message.');
    }
    errorMessageNode.innerText = errorMessage.length > 0 ? errorMessage : '';
    return messageInputNode.value;
}



messageInputNode.addEventListener('input', debounce(() => {
    statusTypingNode.hidden = true;
}, 1000));

inputFormNode.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (checkMessage()) {
        createMessage();
        scrollMessagesOutput();
    }
    inputFormNode.reset();
});

messagesOutputNode.addEventListener('click', (evt) => {
    if (!evt.target.closest('[data-btn-delete-message]')) {
        return;
    }
    const messageNode = evt.target.closest('[data-messages-output-item]');
    messageNode.remove();
});