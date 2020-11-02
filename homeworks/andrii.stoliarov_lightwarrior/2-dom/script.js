const inputMessage = document.querySelector('[data-input-message]');
const wallNode = document.querySelector('[data-wall]');

function autoScrollMessages() {
    const scrollHeight = Math.max(wallNode.scrollHeight,
        wallNode.offsetHeight, wallNode.clientHeight);
    wallNode.scrollTop = scrollHeight;
}

function insertMessage() {
    const text = inputMessage.value;

    // function trim to remove spaces at the beginning and end of a line
    const trimStr = text.trim();

    // empty line check
    if (trimStr.length === 0) return;

    const messageNode = document.querySelector('[data-message-template]');
    const clone = messageNode.content.cloneNode(true);
    const p = clone.querySelector('[data-message]');

    p.textContent = trimStr;

    wallNode.append(clone);

    autoScrollMessages();

    // clear the input field
    inputMessage.value = '';
}

function showStatus() {
    const typingStatusEl = document.querySelector('[data-status]');

    typingStatusEl.classList.remove('hidden-status');

    setTimeout(() => typingStatusEl.classList.add('hidden-status'), 1000);
}

inputMessage.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        insertMessage();
    }
});

document.querySelector('[data-input-button]').addEventListener('click', insertMessage);

inputMessage.addEventListener('input', showStatus);
