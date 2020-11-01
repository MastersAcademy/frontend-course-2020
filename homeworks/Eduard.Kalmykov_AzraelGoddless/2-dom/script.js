const inputIn = document.querySelector('.input-in');
const button = document.querySelector('button');
const ul = document.querySelector('.out');
button.onclick = function () {
    const message = document.createElement('li');
    message.innerHTML = inputIn.value;
    ul.appendChild(message);
    inputIn.value = '';
};
