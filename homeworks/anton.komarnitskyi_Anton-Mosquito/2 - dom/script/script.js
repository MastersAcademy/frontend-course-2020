class SimpleChat {
    constructor() {
        this._mainContainer = document.querySelector('[data-chat="containerForInnerBlock"]');
        this._incomingData = document.querySelector('[data-chat="dataInput"]');
        this._wrapperForAllNode = null;
        this._wrapperForInfoAndMessageBlock = null;
        this._parapgraphForNode = null;
        this._styleTextNode = null;
        this._wrapperForImage = null;
        this._counter = 0;
    }

    init() {
        this.createElement();
        this.eventListener();
        this.createTooltip();
        this.createAlertMessage();
    }

    createElement() {
        const sectionNode = document.createElement('section');

        const divNode = document.createElement('div');

        const pNode = document.createElement('p');

        const smallNode = document.createElement('small');

        const imgForUserNode = document.createElement('img');

        this._wrapperForAllNode = sectionNode;
        this._wrapperForInfoAndMessageBlock = divNode;
        this._parapgraphForNode = pNode;
        this._styleTextNode = smallNode;
        this._wrapperForImage = imgForUserNode;
    }

    get section() {
        return this._wrapperForAllNode.cloneNode(true);
    }

    get div() {
        return this._wrapperForInfoAndMessageBlock.cloneNode(true);
    }

    get p() {
        return this._parapgraphForNode.cloneNode(true);
    }

    get small() {
        return this._styleTextNode.cloneNode(true);
    }

    get img() {
        return this._wrapperForImage.cloneNode(true);
    }

    createChatRows(flag, textContent) {
        const now = new Date();

        const timeNormilize = () => {
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();

            if (hours < 10) {
                hours = `0${hours}`;
            }
            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }

            return `${hours}:${minutes}:${seconds}`;
        };

        const userBlock = (text) => {
            const mainBlock = this.section;
            mainBlock.classList.add('chat__user');

            const divForInfo = this.div;
            divForInfo.classList.add('chat__user-info');

            const nameOfUser = this.p;
            nameOfUser.innerText = 'Anie Smith';

            const timeMessage = this.p;
            const styleForTime = this.small;
            styleForTime.innerText = timeNormilize();

            const avatar = this.img;
            avatar.src = 'img/avatar_2.png';
            avatar.classList.add('chat__user-avatar');

            const messageBlock = this.div;
            messageBlock.classList.add('chat__user-message');

            const message = this.p;
            message.innerText = text;

            messageBlock.appendChild(message);
            timeMessage.appendChild(styleForTime);
            divForInfo.appendChild(nameOfUser);
            divForInfo.appendChild(timeMessage);
            mainBlock.appendChild(divForInfo);
            mainBlock.appendChild(avatar);
            mainBlock.appendChild(messageBlock);

            this._mainContainer.appendChild(mainBlock);
        };

        const opponentBlock = (text) => {
            const mainBlock = this.section;
            mainBlock.classList.add('chat__opponent');

            const messageBlock = this.div;
            messageBlock.classList.add('chat__opponent-message');

            const message = this.p;
            message.innerText = text;

            const avatar = this.img;
            avatar.src = 'img/avatar_1.png';
            avatar.classList.add('chat__opponent-avatar');

            const divForInfo = this.div;
            divForInfo.classList.add('chat__opponent-info');

            const nameOfUser = this.p;
            nameOfUser.innerText = 'Jack Silverston';

            const timeMessage = this.p;
            const styleForTime = this.small;
            styleForTime.innerText = timeNormilize();

            messageBlock.appendChild(message);
            mainBlock.appendChild(messageBlock);
            mainBlock.appendChild(avatar);
            timeMessage.appendChild(styleForTime);
            divForInfo.appendChild(nameOfUser);
            divForInfo.appendChild(timeMessage);
            mainBlock.appendChild(divForInfo);

            this._mainContainer.appendChild(mainBlock);
        };

        return flag === 'user' ? userBlock(textContent) : opponentBlock(textContent);
    }

    createTooltip() {
        const tooltipContainer = this.div;
        tooltipContainer.className = 'interface__form-tooltip';
        tooltipContainer.dataset.tooltip = 'tooltip';
        tooltipContainer.innerText = this._incomingData.dataset.tooltip;

        this._incomingData.parentElement.appendChild(tooltipContainer);
    }

    createAlertMessage() {
        const messageContainer = this.div;
        messageContainer.className = 'interface__form-alert-message';
        messageContainer.dataset.message = 'alert';
        messageContainer.innerText = `This field can't be empty!`;

        this._incomingData.parentElement.appendChild(messageContainer);
    }

    eventListener() {
        document.addEventListener('click', (e) => {
            const atributesForCheck = e.target.dataset.chat;
            if (atributesForCheck !== 'ActionButton') return;
            this.action();
        });

        document.addEventListener('submit', (e) => {
            e.preventDefault();
        });

        document.addEventListener('input', (e) => {
            const atributesForCheck = e.target.dataset.chat;
            if (atributesForCheck !== 'dataInput') return;
            this.actionWithToolTip();
        });
    }

    action() {
        const textContent = this._incomingData.value.trim();
        if (!textContent) {
            this.actionAlerMessage();
            return
        }
        const superFlag = ['user', 'opponent'][this._counter % 2];
        this.createChatRows(superFlag, textContent);
        this._incomingData.value = '';
        this._counter++;
    }

    actionWithToolTip() {
        const tooltip = document.querySelector('[data-tooltip="tooltip"]');

        tooltip.style.display = 'block';

        setTimeout(() => {
            tooltip.style.display = 'none';
        }, 1000);
    }

    actionAlerMessage() {
        const alertMessage = document.querySelector('[data-message="alert"]');
        alertMessage.style.display = 'block';

        setTimeout(() => {
            alertMessage.style.display = 'none';
        }, 2000);
    }
}

const chat = new SimpleChat();
chat.init();
