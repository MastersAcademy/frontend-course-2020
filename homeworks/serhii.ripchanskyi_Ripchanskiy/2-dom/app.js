function getNode(selector) {
    return document.getElementsByClassName(selector)[0];
}

const formNode = getNode('msger-inputarea');
const inputNode = getNode('msger-input');
const chatNode = getNode('msger-chat');
const typingTextNode = getNode('msger-text-typing');

const PERSON_IMG = './images/avatar.svg';
const PERSON_NAME = 'Me';

function appendMessage(name, img, side, text) {
    const formatedDate = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const msgHTML = `
      <div class='msg ${side}-msg'>
        <div class='msg-img' style='background-image: url(${img})'></div>

        <div class='msg-bubble'>
          <div class='msg-info'>
            <div class='msg-info-name'>${name}</div>
            <div class='msg-info-time'>${formatedDate}</div>
          </div>

          <div class='msg-text'>${text}</div>
        </div>
      </div>
  `;

    chatNode.insertAdjacentHTML('beforeend', msgHTML);
    chatNode.scrollTo(0, chatNode.scrollHeight);
}

formNode.addEventListener('submit', (event) => {
    event.preventDefault();

    const msgText = inputNode.value.trim();

    if (!msgText) return;

    appendMessage(PERSON_NAME, PERSON_IMG, 'right', msgText);
    inputNode.value = '';
});

function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
        typingTextNode.className = 'msger-text-typing-active';
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const isTyping = debounce(() => {
    typingTextNode.className = 'msger-text-typing';
}, 1000);

inputNode.addEventListener('keypress', isTyping);
