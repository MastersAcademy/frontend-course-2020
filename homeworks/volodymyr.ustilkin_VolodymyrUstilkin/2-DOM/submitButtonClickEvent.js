function cleanText(text) {
    return text.trim();
}

function addText(text) {
    const showMessagesContainer = document.getElementById('show-messages-container');
    const textContainer = document.createElement('div');

    textContainer.setAttribute('class', 'message-container');
    textContainer.innerHTML = text;
    showMessagesContainer.appendChild(textContainer);
}

function addNewMessage() {
    const inputtedText = document.getElementById('inputted-text');
    const text = inputtedText.value;

    const cleanedText = cleanText(text);
    if (cleanedText) {
        addText(cleanedText);
        inputtedText.value = '';
    } else {
        alert(`Text is not corrected ${cleanedText}`);
    }
}

document.getElementById('submit-button')
    .addEventListener('click', addNewMessage);
