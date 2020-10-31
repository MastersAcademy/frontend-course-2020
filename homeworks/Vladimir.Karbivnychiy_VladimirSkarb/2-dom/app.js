const btnSubmitNode = document.querySelector('[data-submit]');
const ulNode = document.querySelector('[data-list]');
const messages = document.querySelector('[data-messages]');
const inputTextNode = document.querySelector('[data-inputText]');
const messageNode = document.querySelector('[data-message]');
let timer = 0;
const typingMsg = document.querySelector('[data-typing]');

function scroll() {
    messages.scrollTop = messages.scrollHeight;
}

function sendMessage(event) {
    event.preventDefault();
    if (!inputTextNode.value || inputTextNode.value.trim().length === 0) {
        typingMsg.textContent = 'Please write text';
        typingMsg.classList.add('warning');
        typingMsg.classList.remove('hidden');
        inputTextNode.value = '';
    } else {
        const copyLi = messageNode.cloneNode();
        copyLi.textContent = inputTextNode.value.trim();
        copyLi.classList.remove('hidden');
        ulNode.appendChild(copyLi);
        inputTextNode.value = '';
    }
    scroll();
}

btnSubmitNode.addEventListener('click', sendMessage);

function showTypingMsg(event) {
    typingMsg.classList.remove('warning');
    typingMsg.textContent = 'Typing...';
    typingMsg.classList.remove('hidden');

    if (event.keyCode === 13) {
        typingMsg.classList.add('hidden');
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
        typingMsg.classList.add('hidden');
    }, 1000);
}

inputTextNode.addEventListener('keypress', showTypingMsg);

scroll();
