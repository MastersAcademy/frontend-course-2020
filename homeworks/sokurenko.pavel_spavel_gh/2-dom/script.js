/* initialization */
const inputNode = document.querySelector('[data-msg-input]');
const send1Node = document.querySelector('[data-msg-send1]');
const send2Node = document.querySelector('[data-msg-send2]');
const typingIndicatorNode = document.querySelector('[data-hidden]');

// create dom-cards for messages
function creater(btnID, text) {
    if ('content' in document.createElement('template')) {
        const avatarColorClass = ['color-one', 'color-two'];
        const authorName = ['Tom', 'Jerry'];

        const msgBodyNode = document.querySelector('[data-msg-body]');
        const msgTmlpNode = document.querySelector('[data-msg-tmlp]');
        const clone = msgTmlpNode.content.cloneNode(true);
        const msgAvatar = clone.querySelector('.avatar');
        const msgTitile = clone.querySelector('.msg-title');
        const msgBody = clone.querySelector('.msg-body');

        msgAvatar.classList.add(avatarColorClass[btnID]);
        msgTitile.textContent = authorName[btnID];
        msgBody.textContent = text;

        msgBodyNode.appendChild(clone);
        msgBodyNode.scrollTop = 65535;
    } else alert('Ошибка! Браузер не поддерживает <template>');
}

// validation and trim spaces from the text
function validator(text) {
    if (text.replace(/\s+/g, '').length === 0) return false;
    return text.replace(/\s+/g, ' ').trim();
}

// reception, processing and transmission of the input text
function receiver(text, btnID) {
    inputNode.value = null;
    const validatedText = validator(text);
    if (!validatedText) return;
    creater(btnID, validatedText);
}
send1Node.addEventListener('click', () => receiver(inputNode.value, 0));
send2Node.addEventListener('click', () => receiver(inputNode.value, 1));

// typing indicator
let timerId;
let typingStatus = false;
function typingIndicator() {
    if (typingStatus === false) {
        typingStatus = true;
        typingIndicatorNode.classList.remove('hidden');
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
        typingStatus = false;
        typingIndicatorNode.classList.add('hidden');
    }, 1000);
}

// hot keys  and  activation of the typing indicator
// https://www.gavsblog.com/blog/detect-single-and-multiple-keypress-events-javascript
const keysPressed = {};
inputNode.addEventListener('keydown', (event) => {
    // activation of the typing indicator
    // https://shikargar.files.wordpress.com/2010/10/keycodes.png
    if (
        (event.which >= 65 && event.which <= 90)
        || (event.which >= 48 && event.which <= 57)
        || (event.which >= 96 && event.which <= 111)
        || (event.which >= 187 && event.which <= 192)
        || event.which === 32
    ) typingIndicator();

    // hot keys : Enter or Ctrl+Enter
    keysPressed[event.key] = true;
    if (!keysPressed.Control && event.key === 'Enter') receiver(inputNode.value, 0);
    else if (keysPressed.Control && event.key === 'Enter') receiver(inputNode.value, 1);
});
inputNode.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
});
