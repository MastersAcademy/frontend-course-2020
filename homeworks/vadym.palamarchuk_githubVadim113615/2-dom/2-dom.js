class SendMessage {
    constructor(el) {
        this.el = el;
        this.findElements();
        this.listenEvents();
        this.isValid = false;
        this.rightPositionMessage = true;
        this.isTyping = false;
        this.timeOutTyping = this.debounce(() => {
            this.isTyping = !this.isTyping;
            SendMessage.renderTypingState(this.elements.typing, this.isTyping);
        }, 1000);
    }

    findElements() {
        this.elements = {
            messages: this.el.querySelector('.js-messages'),
            form: this.el.querySelector('.js-form'),
            inputMessage: this.el.querySelector('.js-input'),
            message: this.el.querySelector('.js-message').content.querySelector('.js-message-wrap'),
            nameTime: this.el.querySelector('.js-message').content.querySelector('.js-user-time'),
            messageTxt: this.el.querySelector('.js-message').content.querySelector('.js-message-txt'),
            typing: this.el.querySelector('.js-txt'),
        };
    }

    listenEvents() {
        this.elements.form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.validate();
            if (this.isValid) {
                this.createMessage();
                this.elements.form.reset();
            }
        });

        this.elements.inputMessage.addEventListener('input', () => {
            if (!this.isTyping) {
                this.isTyping = !this.isTyping;
                SendMessage.renderTypingState(this.elements.typing, this.isTyping);
            }
            this.timeOutTyping();
        });
    }

    debounce(func, wait) {
        let timeout;
        return () => {
            clearTimeout(timeout);
            timeout = setTimeout(func, wait);
        };
    }

    static isEmptyField(input) {
        return !input.value.trim();
    }

    validate() {
        if (SendMessage.isEmptyField(this.elements.inputMessage)) {
            this.isValid = false;
        } else {
            this.isValid = true;
        }
    }

    createMessage() {
        const time = new Date().toLocaleTimeString('uk-UA', { timeZone: 'utc' });
        this.elements.nameTime.innerHTML = `${time} User`;
        this.elements.messageTxt.innerHTML = this.elements.inputMessage.value;
        SendMessage.changeMessagePositions(this.elements.message, this.rightPositionMessage);
        this.rightPositionMessage = !this.rightPositionMessage;
        const cloneElement = document.importNode(this.el.querySelector('.js-message').content, true);
        this.elements.messages.appendChild(cloneElement);
        this.elements.messages.scrollTop = this.elements.messages.scrollHeight;
    }

    static changeMessagePositions(element, toggle) {
        element.classList.toggle('message-right', toggle);
    }

    static renderTypingState(element, toggle) {
        element.classList.toggle('visible-typing', toggle);
    }
}

const sendMessage = new SendMessage(document.querySelector('.js-chat'));
console.dir(sendMessage);