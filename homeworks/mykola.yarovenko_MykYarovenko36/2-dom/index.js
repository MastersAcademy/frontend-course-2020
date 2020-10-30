const clearInput = (element) => {
    const item = element;
    item.value = '';
    return item;
};
const newDate = () => {
    const date = new Date();
    return date.toLocaleTimeString();
};
const messageTemplateNode = (message, date = newDate()) => {
    const item = document.createElement('li');
    const messageText = document.createElement('p');
    messageText.innerText = message.trim();
    const messageDate = document.createElement('p');
    messageDate.style.fontSize = '12px';
    messageDate.innerText = `added: ${date}`;
    item.append(...[messageText, messageDate]);
    return item;
};
const messagesState = [{ message: 'hello, tell me something!?', date: '02:28:23' }, { message: 'hello, tell me something!?', date: '03:08:23' }, { message: 'Hey, Bro!', date: '05:18:23' }, { message: 'maybe a coffee break?', date: '04:08:23' }];
messagesState.forEach((item) => {
    document.querySelector('[chat]').append(messageTemplateNode(item.message, item.date));
});
function newMessage(event) {
    const inputMessage = document.querySelector('[message-input]');
    const sendCursor = {
        message: 'sending!',
        timeout: 2000,
    };
    const setCursor = (eventTypeText = 'typing...', timeout = 1000) => {
        const typingCursor = document.querySelector('[typing]');
        typingCursor.innerText = eventTypeText;
        typingCursor.hidden = false;
        setTimeout(() => {
            typingCursor.hidden = true;
        }, timeout);
        return typingCursor;
    };
    setCursor();
    if (event.key === 'Enter' || event.type === 'click') {
        if (inputMessage.value === '') {
            event.preventDefault();
        } else {
            const item = { message: `${inputMessage.value}`, date: newDate() };
            messagesState.push(item);
            document.querySelector('[chat]').prepend(messageTemplateNode(item.message, item.date));
            setCursor(sendCursor.message, sendCursor.timeout);
            clearInput(inputMessage);
        }
    }
}
document.querySelector('[submit-button]').addEventListener('click', newMessage);
document.querySelector('[message-input]').addEventListener('keyup', newMessage);
