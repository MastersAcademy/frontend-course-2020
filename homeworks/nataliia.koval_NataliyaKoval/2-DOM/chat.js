const input = document.querySelector('input');
const button = document.querySelector('button');
const dialogWindow = document.querySelector('.dialogWindow');

function createMessage(event) {
    event.preventDefault();

    if (input.value.trim().length > 0) {
        const message = document.createElement('p');
        message.innerText = input.value;
        dialogWindow.appendChild(message);
        input.value = '';
    }
}

button.addEventListener('click', createMessage);

const typing = document.querySelector('.typing');

function sayTyping() {
    typing.innerText = 'Typing...';
}

input.addEventListener('keyup', sayTyping);

const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const stopSayTyping = debounce(() => {
    typing.innerText = '';
}, 1000);

input.addEventListener('keyup', stopSayTyping);
