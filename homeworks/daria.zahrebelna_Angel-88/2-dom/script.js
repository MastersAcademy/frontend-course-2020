const form = document.querySelector('[data-form]');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const masseges = document.querySelector('[data-masseges]');
    const textbox = document.querySelector('[data-textbox]');
    const newMessage = document.createElement('li');
    newMessage.innerText = textbox.value;
    if (!textbox.value.trim()) return;
    masseges.appendChild(newMessage);
    form.reset();
});
