const input = document.querySelector('[data-text]');
const button = document.querySelector('[data-send]');
const message = document.querySelector('[data-message]');

button.onclick = function () {
    const inputText = input.value;
    if (inputText !== '') {
        message.innerHTML = inputText;
        input.value = '';
    } else {
        console.log('error');
    }
};
