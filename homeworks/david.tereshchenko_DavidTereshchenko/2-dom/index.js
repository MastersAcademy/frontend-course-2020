const inputNode = document.querySelector('.input');
const butNode = document.querySelector('.send-messages');
const listNode = document.querySelector('.chat-list');

butNode.addEventListener('click', function(event){
    event.preventDefault();
    const vld = inputNode.value.trim();
    if(vld.length) {
        const addMessages = document.createElement('div');
        addMessages.classList.add('msg');
        addMessages.innerHTML = inputNode.value;
        listNode.appendChild(addMessages);
        butNode.value = '';
    
    }
})
function scroll() {
    listNode.scrollTop = listNode.scrollHeight;
}
