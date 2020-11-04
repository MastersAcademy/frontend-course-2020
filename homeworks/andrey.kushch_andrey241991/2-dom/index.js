const contentElem = document.querySelector('[data-content-container]');
const formElem = document.querySelector('[data-input-form]');
const inputElem = document.querySelector('[data-input]');
const typingElem = document.querySelector('[data-typing]');
let isMyMessage = true;
let isTyped = false;
const MESSAGE_KEY = 'message';
const ERROR_MESSAGE = 'Message can not be empty';

const addMessage = (message) => {
    const div = document.createElement('div');
    div.innerHTML = `<span>${message}</span>`;
    div.classList.add(
        'message-wrapper',
        isMyMessage ? 'message-wrapper-right' : 'message-wrapper-left'
    );
    contentElem.appendChild(div);
    isMyMessage = !isMyMessage;
    inputElem.value = '';
    contentElem.scrollTo(0, contentElem.scrollHeight);
};

formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = new FormData(formElem).get(MESSAGE_KEY);
    if (!message) {
        alert(ERROR_MESSAGE);
        return;
    }
    addMessage(message.trim());
});

inputElem.addEventListener('keydown', () => {
    if (!isTyped) {
        isTyped = true;
        typingElem.style = 'visibility: visible;';
        setTimeout(() => {
            typingElem.style = 'visibility: hidden;';
            isTyped = false;
        }, 1000);
    }
});
