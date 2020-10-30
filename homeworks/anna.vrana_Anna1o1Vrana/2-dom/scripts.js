const btnSendNode = document.querySelector('#btn-send');
const valueResualt = document.querySelector('#valueResualt');
const typing = document.querySelector('.typing');
const userInput = document.querySelector('#user-text');

function sendMessage() {
    const newTxt = document.querySelector('#user-text').value;

    if (!newTxt.trim() && newTxt.trim().length !== 0 && 'content' in document.createElement('template')) {
        const template = document.querySelector('#template');
        const clone = template.content.cloneNode(true);
        const mesList = document.querySelector('#message-list');
        const listItem = clone.querySelector('#template-item');
        listItem.textContent = newTxt;
        mesList.appendChild(clone);
    } else {
        const vlres = valueResualt.innerHTML = newTxt;
        valueResualt.classList.remove('hide');
    }
    document.querySelector('#user-text').value = '';
}
btnSendNode.addEventListener('click', sendMessage);