const contentElem = document.querySelector('.content-container');
const formElem = document.querySelector('.input-form');
const inputElem = document.querySelector('.input');
const typingElem = document.querySelector('.typing');
let isMyMessage = true;
let isTyped = false;

const addMessage = (message) => {
    var div = document.createElement('div');
    div.innerHTML = `<span>${message}</span>`;
    div.classList.add(
        isMyMessage ? 'message-wrapper-right' : 'message-wrapper'
    );
    contentElem.appendChild(div);
    isMyMessage = !isMyMessage;
    inputElem.value = '';
    contentElem.scrollTo(0, contentElem.scrollHeight);
};

const checkMessage = (message) => {
    if (!message) {
        alert('Message can not be empty');
        return;
    }
    addMessage(message.trim());
};

formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = new FormData(formElem).get('message');
    checkMessage(message);
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