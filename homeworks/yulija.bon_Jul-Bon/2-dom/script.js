const input = document.querySelector('[data-text]');
const button = document.querySelector('[data-send]');
const container = document.querySelector('#messages-box');
const messageTemplate = document.querySelector('#message-template');

button.onclick = function () {
    const inputText = input.value;
    const inputTextReplace = inputText.replace(/^\s*/, '').replace(/\s*$/, '');
    console.log(inputText);
    console.log(inputTextReplace);

    if (inputText !== '') {
        const cloneTemplate = messageTemplate.content.cloneNode(true);
        const messageBody = cloneTemplate.querySelectorAll('[data-message]');
        messageBody[0].textContent = inputTextReplace;
        container.appendChild(cloneTemplate);
        input.value = '';
    } else {
        console.log('error');
    }

    // const scrollinDiv = document.querySelector('.messages-box ');
    // setInterval(function () {
    //     scrollinDiv.scrollTop = 9999;
    // }, 100);
};
