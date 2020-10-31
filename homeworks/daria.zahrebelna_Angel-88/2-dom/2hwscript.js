const button = document.getElementById('button');

function createElem() {
    const messages = document.getElementById('messages');
    const textbox = document.getElementById('textbox');
    const newMessage = document.createElement('li');
    newMessage.innerText = textbox.value;
    if (!textbox.value) {
        alert('Type your messege!!');
        return;
    }
    messages.appendChild(newMessage);
    textbox.value = '';
}

button.addEventListener('click', createElem);
