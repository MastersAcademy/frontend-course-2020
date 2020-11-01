const buttonSend = document.getElementById('send');
const inputMessage = document.getElementById('input-message');
const messageTemplate = document.getElementById('message-template').content;
const viewMessage = document.getElementById('view-message');
const viewWrapper = document.getElementById('view-wrapper');
const typedInfo = document.querySelector('.type');
const newMessage = () => {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let session = 'AM';
    if (hours > 12) session = 'PM';
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    const time = `${hours}:${minutes} ${session}`;
    const copyTemplate = document.importNode(messageTemplate, true);
    copyTemplate.querySelector('.message-text').textContent = inputMessage.value;
    copyTemplate.querySelector('.send-time').textContent = time;
    viewMessage.appendChild(copyTemplate);
    console.log(viewMessage.offsetHeight);
    viewWrapper.scrollTop += viewMessage.offsetHeight;
};
const validMessage = () => {
    if (inputMessage.value === '') {
        inputMessage.placeholder = 'Write something here';
        inputMessage.classList.add('invalid');
    } else {
        inputMessage.classList.remove('invalid');
        inputMessage.placeholder = 'Type your message...';
        inputMessage.value.trim();
        newMessage();
    }
};

inputMessage.onfocus = () => {
    typedInfo.classList.add('blink');
};

inputMessage.onblur = () => {
    setInterval(typedInfo.classList.remove('blink'), 1000);
    clearInterval();
};
buttonSend.onclick = () => {
    validMessage();
    inputMessage.value = '';
};
