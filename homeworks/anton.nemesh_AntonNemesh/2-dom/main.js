const form = document.querySelector('[data-form]');
const input = document.querySelector('[data-input]');

function validation(value) {
    const valueParse = value.split('');
    if (value.length === 0) {
        alert('Поле пустое, введите значение в поле и повторите попытку!');
        return false;
    }
    if (valueParse[0] === ' ') {
        alert('Пробелы в начале строки, удалите пробелы в начале строки и повторите попытку!');
        return false;
    }
    if (valueParse[valueParse.length - 1] === ' ') {
        alert('Пробелы в конце строки, удалите пробелы в конце строки и повторите попытку!');
        return false;
    }
    return true;
}

function sendMessage() {
    const { value } = input;
    if (validation(value)) {
        const { content } = document.querySelector('[data-message-template]');
        const message = content.querySelector('p');
        message.textContent = value;
        document.querySelector('[data-messages]').appendChild(content.cloneNode(true));
        input.value = '';
    }
}

form.addEventListener('submit', sendMessage);
