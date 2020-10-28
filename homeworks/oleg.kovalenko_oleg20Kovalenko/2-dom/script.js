const messages = document.querySelector('.messages-list');
const textInput = document.querySelector('.messages-input');
const button = document.querySelector('.messages-submit-button');

let typingTime = 0;

textInput.addEventListener('input', () => {
    const typing = document.querySelector('.messages-typing');
    typing.innerHTML = 'typing...';
    clearTimeout(typingTime);
    typingTime = setTimeout(() => {
        typing.innerHTML = '';
    }, 2000);
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    const str = textInput.value.trim();
    if (str.length) {
        const newMessages = document.createElement('li');
        newMessages.innerHTML = textInput.value;
        messages.appendChild(newMessages);
        messages.scrollTop = messages.scrollHeight;
        textInput.value = '';
    }
});
