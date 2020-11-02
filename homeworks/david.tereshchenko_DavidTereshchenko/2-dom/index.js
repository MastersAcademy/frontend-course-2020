const inputNode = document.querySelector('.input');
const butNode = document.querySelector('.send-messages');
const listNode = document.querySelector('.chat-list');

function submitMessage(event){
    event.preventDefault();
    const vld = inputNode.value.trim();
    if (vld.length) {
        const addMessages = document.createElement('div');
        addMessages.classList.add('msg');
        addMessages.innerHTML = inputNode.value;
        listNode.appendChild(addMessages);
        inputNode.value = '';
    }
}

butNode.addEventListener('click', submitMessage);

inputNode.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submitMessage(event);
    }
})

