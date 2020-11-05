const inputIn = document.querySelector('.input-in');
const button = document.querySelector('.button');
const ul = document.querySelector('.out');

button.addEventListener('click', function () {
    const massage = document.createElement('li');
    massage.innerHTML = inputIn.value;
    ul.appendChild(massage);
    inputIn.value = "";
})