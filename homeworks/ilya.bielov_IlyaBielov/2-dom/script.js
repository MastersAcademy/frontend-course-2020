(() => {
    const templateNode = document.querySelector('[data-template]');
    const templateLiNode = templateNode.content.firstElementChild;

    const placeForTextNode = document.querySelector('[data-place-for-text]');
    const placeForMessagesNode = document.querySelector('[data-place-for-message]');
    const sendButtonNode = document.querySelector('[data-send-btn]');
    const typingTextNode = document.querySelector('[data-typing-text]');

    const createMessage = (message) => {
        const liNode = templateLiNode.cloneNode(true);
        liNode.innerText = message;

        return liNode;
    };

    const addToPlaceForMessages = (liNode) => placeForMessagesNode.appendChild(liNode);

    const messengerHandler = (node) => {
        if (node.value.trim() === '') return;

        const messageNode = createMessage(node.value.trim());
        addToPlaceForMessages(messageNode);

        placeForTextNode.value = null; // because linter got error for [node.value = null]
        typingTextNode.classList.remove('--show');
    };

    let timeout = null;
    placeForTextNode.addEventListener('input', (() => {
        typingTextNode.classList.add('--show');

        clearTimeout(timeout);
        timeout = setTimeout(() => typingTextNode.classList.remove('--show'), 1000);
    }));

    placeForTextNode.addEventListener('keypress', (e) => e.key === 'Enter' && messengerHandler(placeForTextNode));
    sendButtonNode.addEventListener('click', () => messengerHandler(placeForTextNode));
})();
