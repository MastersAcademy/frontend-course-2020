const inputData = document.querySelector(".form-control");
const sendButton = document.querySelector(".send-button");
const messages = document.querySelector(".messages");
const typingIndicator = document.querySelector(".typing");
let timer;

sendButton.addEventListener("click", (e) => {
  e.preventDefault();
  if(inputData.value != "") {
    sendForm()
  }
} );

function sendForm(event) {
    outMessageToScreen();
    inputData.value = "";
    typingIndicator.innerHTML = "";
}

function outMessageToScreen() {
  let div = document.createElement('div');
  div.innerHTML =  inputData.value.trim();
  messages.appendChild(div);
}

inputData.oninput = function() {
  typingIndicator.innerHTML = "Typing...";
  clearTimeout(timer);
  timer = setTimeout(() => {
    typingIndicator.innerHTML = "";
  }, 1000);
};