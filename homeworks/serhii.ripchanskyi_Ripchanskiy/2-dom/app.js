const getNode = (selector) => document.querySelector(selector);
const formNode = getNode('[data-msger-inputarea]');
const inputNode = getNode('[data-msger-input]');
const chatNode = getNode('[data-msger-chat]');
const typingTextNode = getNode('[data-msger-text-typing]');

const user = {
    name: 'Me',
    avatar: './images/avatar.svg',
};

const appendMessage = ({ name, avatar }, text, formatedTime) => {
    const msgHTML = `
      <div class='msg right-msg'>
      <img class='msg-img' src="${avatar}" alt="avatar">

        <div class='msg-bubble'>
          <div class='msg-info'>
            <div class='msg-info-name'>${name}</div>
            <div class='msg-info-time'>${formatedTime}</div>
          </div>

          <div class='msg-text'>${text}</div>
        </div>
      </div>
  `;

    chatNode.insertAdjacentHTML('beforeend', msgHTML);
    chatNode.scrollTo(0, chatNode.scrollHeight);
};

const createFormatedTime = () => new Date().toLocaleTimeString(
    [], {
        hour: '2-digit',
        minute: '2-digit',
    },
);

formNode.addEventListener('submit', (event) => {
    event.preventDefault();

    const msgText = inputNode.value.trim();

    if (!msgText) return;

    appendMessage(user, msgText, createFormatedTime());
    inputNode.value = '';
});

const debounce = (func, wait) => {
    let timeout;
    const later = () => {
        clearTimeout(timeout);
        func();
    };

    timeout = setTimeout(later, wait);
};

const removeTypingActive = () => { typingTextNode.classList = 'msger-text-typing-not-active'; };

inputNode.addEventListener('keypress', () => {
    typingTextNode.classList = '';
    debounce(removeTypingActive, 1000);
});
