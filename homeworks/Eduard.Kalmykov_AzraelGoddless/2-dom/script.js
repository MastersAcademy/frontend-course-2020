let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let ul = document.querySelector('.out');

button.onclick = function () {

  let a = document.createElement('li');
  a.innerHTML = inputIn.value;
  ul.appendChild(a);
  inputIn.value = "";
}