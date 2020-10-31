const formPublish = document.forms.publish;
const wallNode = document.querySelector('[data-wall]');

function autoScrollMessages() {
    const scrollHeight = Math.max(wallNode.scrollHeight,
        wallNode.offsetHeight, wallNode.clientHeight);
    wallNode.scrollTop = scrollHeight;
}

function insertMessage() {
    const text = formPublish.message.value;

    // function trim to remove spaces at the beginning and end of a line
    const trimStr = text.trim();

    // empty line check
    if (trimStr.length === 0) return;

    const messageNode = document.querySelector('[data-message-template]');
    const p = messageNode.content.querySelector('[data-message]');

    p.textContent = trimStr;
    const clone = messageNode.content.cloneNode(true);

    wallNode.append(clone);

    autoScrollMessages();

    // clear the input field
    formPublish.message.value = '';
}

function showStatus() {
    const tooltip = document.querySelector('[data-tooltip]');

    tooltip.classList.remove('tooltip');

    setTimeout(() => tooltip.classList.add('tooltip'), 1000);
}

formPublish.message.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        insertMessage();
    }
});

formPublish.button.addEventListener('click', insertMessage);

formPublish.message.addEventListener('input', showStatus);
