// eslint-disable-next-line max-classes-per-file
class Main {
    constructor() {
        this.messageListModel = ['Test message', 'second message'];
        this.timerId = null;
        this.elementsList = {
            mainForm: document.querySelector('.chatbot-input form'),
            inputField: document.querySelector('.chatbot-input-field'),
            submitBtn: document.querySelector('.chatbot-input-submit-button'),
            textArea: document.querySelector('.chatbot-body ul'),
            typingField: document.querySelector('.chatbox-typing-field'),
        };
        this.elementsList.mainForm.addEventListener('submit', this.submitValue.bind(this));
        this.elementsList.inputField.addEventListener('keyup', this.showTyping.bind(this));
    }

    createMessages() {
        this.messageListModel.forEach((value) => {
            this.addNewItem(value);
        });
    }

    addNewItem(value) {
        const newLiNode = document.createElement('li');
        newLiNode.innerText = value;
        this.elementsList.textArea.appendChild(newLiNode);
    }

    showTyping() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.elementsList.typingField.classList.remove('hide');
        }
        this.timerId = setTimeout(() => {
            this.hideTyping();
        }, 500);
    }

    hideTyping() {
        this.elementsList.typingField.classList.add('hide');
    }

    submitValue(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const value = formData.get('value');
        if (value.trim()) {
            this.addNewItem(value);
            this.elementsList.mainForm.reset();
        }
        this.messageListModel.push(value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line new-cap
    this.main = new Main();
    this.main.createMessages();
});
