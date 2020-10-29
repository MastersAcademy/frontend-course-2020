const button = document.querySelector('.button');
const input = document.querySelector('.input');

button.addEventListener('click', () => {
    const chatNode = document.getElementById('chat');
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
    }, 2000);
    return typingText;
});
