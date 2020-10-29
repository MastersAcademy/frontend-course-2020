let input = document.querySelector("input");
let button = document.querySelector("button");
let dialogWindow = document.querySelector("#dialogWindow");

button.addEventListener("click", createMessage);

function createMessage(event){
    event.preventDefault();
    
    if (input.value.trim().length > 0) {
        
        let message = document.createElement("p");
        
        message.innerText = input.value;
        dialogWindow.appendChild(message);
        input.value = "";
    }
}

input.addEventListener("keydown", sayTyping);
let typing = document.querySelector("#typing");

function sayTyping() {
    typing.innerText = "Typing...";
    if (self.TMR) clearTimeout (TMR); 
    TMR = setTimeout (stopSayTyping, 1000); 
}

function stopSayTyping() {
    typing.innerText = "";  
}