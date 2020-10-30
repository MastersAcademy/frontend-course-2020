const inputData = document.querySelector(".form-control");
const sendButton = document.querySelector(".send-button");
const messages = document.querySelector(".messages");
const typingIndicator = document.querySelector(".typing");

sendButton.addEventListener("click", (e) => sendForm(e) );

function sendForm(event) {
    event.preventDefault();
    outMessageFromScreen();
    inputData.value = "";
    typingIndicator.innerHTML = "";
}

function outMessageFromScreen() {
  let div = document.createElement('div');
  div.innerHTML =  inputData.value;
  messages.appendChild(div);
}

// function verificationInputData() {
//   let validate = /[!@#$%&*]/.test(inputData.value);
// }

inputData.oninput = function() {
  typingIndicator.innerHTML = "typing";
};

