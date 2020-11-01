const btnSendNode = document.querySelector('[data-btn-send]');
const template = document.querySelector('[data-template']);

function sendMessage() {
    const newTxt = document.querySelector('[data-user-text]').value.trim();
if (!newTxt.length) return;
        const clone = template.content.cloneNode(true);
        const messageList = document.querySelector('[data-message-list]');
        const listItem = clone.querySelector('[data-template-item]');
        listItem.textContent = newTxt;
        messageList.appendChild(clone);
    } 
    document.querySelector('[data-user-text]').value = '';
}

document.querySelector('[data-send-form]').addEventListener('submit', event => {
    event.preventDefault();
    sendMessage();
});

