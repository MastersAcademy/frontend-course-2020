const input = document.querySelector('[data-text]');
const button = document.querySelector('[data-send]');
const container = document.querySelector('#messages-box');
const messageTemplate = document.querySelector('#message-template');
const typingBox = document.querySelector('.typing-box');
const errorMessage = document.createElement('p');

function createError() {
    errorMessage.innerText = 'You need to enter text here';
    errorMessage.setAttribute('data-validation', 'error');
    errorMessage.classList.add('error');
    typingBox.appendChild(errorMessage);
}

function removeError() {
    const errorElement = document.querySelector('[data-validation]');

    if (errorElement) {
        const errorAttr = errorElement.getAttribute('data-validation');
        if (errorAttr === 'error') {
            errorElement.remove();
        }
    }
}

function addMessage() {
    const inputText = input.value;
    const inputTextReplace = inputText.replace(/^\s*/, '').replace(/\s*$/, '');
    if (inputText !== '') {
        const cloneTemplate = messageTemplate.content.cloneNode(true);
        const messageBody = cloneTemplate.querySelectorAll('[data-message]');
        messageBody[0].textContent = inputTextReplace;
        container.appendChild(cloneTemplate);
        input.value = '';
        removeError();
    } else {
        createError();
    }
}

button.addEventListener('click', addMessage);
