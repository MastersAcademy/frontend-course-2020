const templateNode = document.querySelector('[data-template]');

function sendMessage() {
    const newTxt = document.querySelector('[data-user-text]').value.trim();
    if (!newTxt.length) return;
    const clone = templateNode.content.cloneNode(true);
    const messageListNode = document.querySelector('[data-message-list]');
    const listItemNode = clone.querySelector('[data-template-item]');
    listItemNode.textContent = newTxt;
    messageListNode.appendChild(clone);
    document.querySelector('#user-text').value = '';
}

document.querySelector('[data-send-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    sendMessage();
});
