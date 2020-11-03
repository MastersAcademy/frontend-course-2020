const inputIn = document.querySelector('.input-in');
const button = document.querySelector('button').addEventListener('click', myFunction);
const ul = document.querySelector('.out');
function myFunction() {
    const message = document.createElement('li');
    message.innerHTML = inputIn.value;
    ul.appendChild(message);
    inputIn.value = '';
};
