const inputIn = document.querySelector('.input-in');
const button = document.querySelector('button');
const ul = document.querySelector('.out');
button.onclick = function () {
    const a = document.createElement('li');
    a.innerHTML = inputIn.value;
    ul.appendChild(a);
    inputIn.value = '';
}

