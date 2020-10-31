const button = document.querySelector('[data-button]');
const form = document.querySelector('[data-form]');

button.addEventListener('click', (evt) => {
    evt.preventDefault();
    const messages = document.getElementById('messages');
    const textbox = document.getElementById('textbox');
    const newMessage = document.createElement('li');
    newMessage.innerText = textbox.value;
    if (!textbox.value) {
        alert('Type your messege!!');
    } else {
    messages.appendChild(newMessage);
    form.reset();
    }
});
