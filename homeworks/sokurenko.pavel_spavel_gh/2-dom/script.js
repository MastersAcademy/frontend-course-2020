let inputNode;
let send1Node;
let send2Node;
let typingIndicatorNode;

// создание dom карточек сообщений
function creater(btnID, text) {
    if ('content' in document.createElement('template')) {
        const avatarColorClass = ['color-one', 'color-two'];
        const authorName = ['Tom', 'Jerry'];

        const msgBodyNode = document.querySelector('[msg-body]');
        const msgTmlpNode = document.querySelector('[msg-tmlp]');
        const clone = msgTmlpNode.content.cloneNode(true);
        const msgAvatar = clone.querySelector('.avatar');
        const msgTitile = clone.querySelector('.msg-title');
        const msgBody = clone.querySelector('.msg-body');

        msgAvatar.classList.add(avatarColorClass[btnID]);
        msgTitile.textContent = authorName[btnID];
        msgBody.textContent = text;

        msgBodyNode.appendChild(clone);
        msgBodyNode.scrollTop = 65535;
    } else alert('Ошибка! Браузер не поддерживает <template>');
}

// проверка и вырезание пробелов
function validator(text) {
    if (text.replace(/\s+/g, '').length === 0) return false;
    return text.replace(/\s+/g, ' ').trim();
}

// приём, обработка и передача входного текста
function receiver(text, btnID) {
    inputNode.value = null;
    const validatedText = validator(text);
    if (!validatedText) return;
    creater(btnID, validatedText);
}

// Индикатор ввода
let timerId;
let typingStatus = false;
function typingIndicator() {
    // если выключет - включаем
    if (typingStatus === false) {
        typingStatus = true;
        typingIndicatorNode.classList.remove('hidden');
    }

    // повторное включение сбрасывает таймер выключения
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        typingStatus = false;
        typingIndicatorNode.classList.add('hidden');
    }, 1000);
}

window.onload = function () {
    /* Инициализация */
    inputNode = document.querySelector('[msg-input]');
    send1Node = document.querySelector('[msg-send1]');
    send2Node = document.querySelector('[msg-send2]');
    send1Node.addEventListener('click', () => receiver(inputNode.value, 0));
    send2Node.addEventListener('click', () => receiver(inputNode.value, 1));
    typingIndicatorNode = document.querySelector('[hidden]');

    // для сочетания клавиш + активация индикатора письма
    // https://www.gavsblog.com/blog/detect-single-and-multiple-keypress-events-javascript
    const keysPressed = {};
    inputNode.addEventListener('keydown', (event) => {
        // активация индикатора ввода
        // https://shikargar.files.wordpress.com/2010/10/keycodes.png
        if (
            (event.which >= 65 && event.which <= 90)
            || (event.which >= 48 && event.which <= 57)
            || (event.which >= 96 && event.which <= 111)
            || (event.which >= 187 && event.which <= 192)
            || event.which === 32
        ) typingIndicator();

        // отправляем сообщение через Enter или Ctrl+Enter
        keysPressed[event.key] = true;
        if (!keysPressed.Control && event.key === 'Enter') receiver(inputNode.value, 0);
        else if (keysPressed.Control && event.key === 'Enter') receiver(inputNode.value, 1);
    });
    inputNode.addEventListener('keyup', (event) => {
        delete keysPressed[event.key];
    });
};
