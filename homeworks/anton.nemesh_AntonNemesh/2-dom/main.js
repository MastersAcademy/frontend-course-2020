const formEl = document.querySelector('[data-form]');
const inputEl = document.querySelector('[data-input]');

function validation(value) {
    return value.length !== 0;
}

function sendMessage(event) {
    event.preventDefault();
    const { value } = inputEl;
    if (validation(value)) {
        const message = document.createElement('p');
        message.textContent = value.trim();
        document.querySelector('[data-messages]').appendChild(message);
        inputEl.value = '';
    }
}

formEl.addEventListener('submit', sendMessage);
