const clickBtn = document.querySelector('[data-button]');
const ulList = document.querySelector('[data-list]');
const chatWapper = document.querySelector('[data-chat]');
const inputText = document.querySelector('[data-input]');
const messageData = document.querySelector('[data-message]');
const typingMessage = document.querySelector('[data-typing]');

function scroll() {
    chatWapper.scrollTop = chatWapper.scrollHeight;
}

function sendMessage(event) {
    event.preventDefault();
    if (!inputText.value || inputText.value.trim().length === 0) {
        typingMessage.textContent = 'Write a message...';
        typingMessage.classList.add('warning');
        typingMessage.classList.remove('hide');
        inputText.value = '';
    } else {
        const copyLi = messageData.cloneNode();
        copyLi.textContent = inputText.value.trim();
        copyLi.classList.remove('hide');
        ulList.appendChild(copyLi);
        inputText.value = '';
    }
    scroll();
}

clickBtn.addEventListener('click', sendMessage);

scroll();