const contentContainer = document.querySelector(".content-container");
const inputForm = document.querySelector(".input-form");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submit");
const typingText = document.querySelector(".typing");
let isMyMessage = true;
let isTyped = false;

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkMessage(input.value);
});

input.addEventListener("keydown", () => {
    if(!isTyped){
        isTyped = true;
        typingText.style = "display: flex;";
        setTimeout(() => {
            typingText.style = "display: none;";
            isTyped = false;
        }, 1000);
    }
});

const checkMessage = (message) => {
    if (message === "") {
        alert("Message can't be empty");
    } else {
        addMessage(message.trim());
    }
};

const addMessage = (message) => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.innerText = message;
    div.classList.add(
        isMyMessage ? "message-wrapper-right" : "message-wrapper"
    );
    div.appendChild(span);
    contentContainer.appendChild(div);
    isMyMessage = !isMyMessage;
    input.value = "";
};


