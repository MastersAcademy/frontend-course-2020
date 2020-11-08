const messageTemplateNode = (element) => {
    const { message, date } = element;
    const itemEl = document.createElement('li');
    itemEl.className = 'dialogs_list_element';
    itemEl.innerHTML = `
        <p>${message.trim()}</p>
        <p style="font-size: 12px">added: ${date}`;
    return itemEl;
};
const messagesState = [{ message: 'hello, tell me something!?', date: '02:28:23' }, { message: 'hello, tell me something!?', date: '03:08:23' }, { message: 'Hey, Bro!', date: '05:18:23' }, { message: 'maybe a coffee break?', date: '04:08:23' }];

messagesState.map((item) => {
    const dialogsElement = item;
    document.querySelector('[data-dialogs-list]').append(messageTemplateNode(dialogsElement));
    return dialogsElement;
});

const newMessageDate = new Date().toLocaleTimeString();

function InputEventPointer(obj) {
    this.message = obj.message;
    this.timer = obj.timer;
    this.showPointer = () => {
        const pointerMessage = this.message;
        const pointerTimer = this.timer;
        const pointer = document.querySelector('[data-message-status-pointer]');
        pointer.innerText = pointerMessage;
        pointer.hidden = false;
        setTimeout(() => {
            pointer.hidden = true;
        }, pointerTimer);
        return pointer;
    };
}
const typingPointer = {
    message: 'typing...',
    timer: 1000,
};
const sendingPointer = {
    message: 'sending...',
    timer: 2000,
};
const emptyMessagePointer = {
    message: 'message is empty',
    timer: 1500,
};
const messageIsTyping = new InputEventPointer(typingPointer);
const messageIsSend = new InputEventPointer(sendingPointer);
const messageIsEmpty = new InputEventPointer(emptyMessagePointer);

const postNewMessage = (textData) => {
    const messageText = textData.value;
    const itemEl = { message: `${messageText}`, date: newMessageDate };
    messagesState.push(itemEl);
    document.querySelector('[data-dialogs-list]').prepend(messageTemplateNode(itemEl));
    return messagesState;
};

function messageFormHandler(event) {
    const inputTextEl = document.querySelector('[data-message-input]');
    if (event.key === 'Enter' || event.type === 'click') {
        if (inputTextEl.value === '') {
            messageIsEmpty.showPointer();
        } else {
            postNewMessage(inputTextEl);
            inputTextEl.value = '';
            messageIsSend.showPointer();
        }
    } else {
        messageIsTyping.showPointer();
    }
}
document.querySelector('[data-submit-button]').addEventListener('click', messageFormHandler);
document.querySelector('[data-message-input]').addEventListener('keyup', messageFormHandler);
