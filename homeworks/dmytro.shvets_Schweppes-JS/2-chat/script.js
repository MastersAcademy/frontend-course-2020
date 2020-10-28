const container = document.querySelector("[data-messages]");
const form = document.querySelector("[data-form]");
const input = document.querySelector('[data-input]');

let statusTyping = false;
let messages = [];
let timeout;

// Getting current array of messages
function gettingMessageAray () {
    messages = Array.from(document.querySelectorAll('[data-text]'));
}

// Creating cell in DOM
function cereatingCell (text) {
    const elementNode = document.createElement('p');
    gettingMessageAray();
    (messages.length % 2 == 0) ? elementNode.classList.add("first-user") : elementNode.classList.add("second-user");
    elementNode.setAttribute('data-text', '');
    // Adding an avatar
    const userIconNode = document.createElement('i');
    if (elementNode.classList.contains("first-user")) {
        userIconNode.classList.add("fas", "fa-user-astronaut");
    } else {
        userIconNode.classList.add("fas", "fa-user-secret");
    }
    elementNode.append(userIconNode);
    // Create element for text
    const textNode = document.createElement('span');
    elementNode.append(textNode);
    // Insert element and text in DOM
    container.append(elementNode);
    textNode.innerHTML = text;
}

// Sending message 
function addingMessage (e) {
    e.preventDefault();
    deletingStatus();
    cereatingCell(input.value.trim());
    container.scrollBy(0, 50);
    // Clear input
    form.reset();
}

// Deliting tiping status
function deletingStatus () {
    gettingMessageAray();
    for (elem of messages) {
        if(elem.lastChild.innerHTML == 'Typing . . .' ) {
            elem.remove();
            statusTyping = !statusTyping;
        }
    }
}

// setting status on keydown and remove after 1 second
function addingStatusTyping () {
    container.scrollBy(0, 50);
    if(!statusTyping) {
        cereatingCell('Typing . . .');
        statusTyping = !statusTyping;
    }
    clearTimeout(timeout)
    timeout = setTimeout(deletingStatus, 1000);
}

form.addEventListener('submit', addingMessage);
input.addEventListener('keydown', addingStatusTyping);