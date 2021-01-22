const form = document.querySelector('.form');
const input = document.querySelector('.input');

form.addEventListener('submit', () => {
    const chatNode = document.querySelector('.chat');
    const messageNode = document.createElement('div');

    if (input.value) {
        messageNode.innerHTML = input.value;
        chatNode.appendChild(messageNode);
        messageNode.classList.add('message');
    }
    input.value = '';
});

input.addEventListener('keyup', () => {
    const typingText = document.querySelector('.typing');
    typingText.hidden = false;
    setTimeout(() => {
        typingText.hidden = true;
    }, 1000);
    return typingText;
});
