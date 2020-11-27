const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const blockKeyElement = document.querySelector('[data-block-key]') as HTMLDivElement;
const scoreElement = document.querySelector('[data-total-scores]') as HTMLHeadingElement;
const infoMessageElement = document.querySelector('[data-current-score]') as HTMLDivElement;
const visionElement = document.querySelector('[data-vision]') as HTMLDivElement;
const loaderElement = document.querySelector('[data-loader]') as HTMLDivElement;
const startButtonElement = document.querySelector('[data-button-start]') as HTMLDivElement;
const restartButtonElement  = document.querySelector('[data-button-restart]') as HTMLDivElement;
const stopButtonElement  = document.querySelector('[data-button-stop]') as HTMLDivElement;

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;
    private intervalStatus: any;
    private currentRun = this.startGame.bind(this);

    constructor(
        private keyElement: HTMLDivElement,
        private scoreElement: HTMLHeadingElement,
        private infoMessageElement: HTMLDivElement,
        private visionElement: HTMLDivElement,
        private loaderElement: HTMLDivElement,
        private blockKeyElement: HTMLDivElement,
        private startButtonElement: HTMLDivElement,
        private restartButtonElement: HTMLDivElement,
        private stopButtonElement: HTMLDivElement,
    ) {}

    start() {
        this.setKey();
        this.intervalStatus = setInterval(this.setKey.bind(this), this.interval);
        this.infoMessageElement.classList.remove('finish');
        this.updateScore();
        this.resizeBlockVision();
        this.startButtonElement.setAttribute('disabled', 'true');
        this.restartButtonElement.setAttribute('disabled', 'true');
        this.stopButtonElement.removeAttribute('disabled');
    }

    restart() {
        this.score = 100;
        this.start();
    }

    stop() {
        this.updateScore();
        this.resizeBlockVision();
        this.finishGame();
        this.startButtonElement.removeAttribute('disabled');
        this.restartButtonElement.removeAttribute('disabled');
        this.stopButtonElement.setAttribute('disabled', 'true');
    }

    private startGame(event: any) {
        this.currentKey = event.key;
        if (this.currentKey.toUpperCase() === this.keyElement.textContent.toUpperCase()) {
            this.addScore();
            this.changeColorBlockKey('green');
        }
        else {
            this.removeScore();
            this.changeColorBlockKey('red');
        }
        this.updateScore();
        this.limitScoreGame();
        window.removeEventListener('keydown', this.currentRun);
    }

    private finishGame(): void {
        clearInterval(this.intervalStatus);
        this.stopButtonElement.setAttribute('disabled', 'true');
        this.restartButtonElement.removeAttribute('disabled');
        window.removeEventListener('keydown', this.currentRun);
    }

    private updateScore():void {
        this.scoreElement.innerHTML = String(this.score);
    }

    private resizeBlockVision() {
        this.visionElement.style.height = String(this.score + 'px');
        this.visionElement.style.width = String(this.score + 'px');
    }

    private showMessage(messageText: string, finishMessage: boolean):void {
        this.infoMessageElement.textContent = messageText;
        if (finishMessage) {
            this.startButtonElement.setAttribute('disabled', 'true');
            this.infoMessageElement.classList.add('finish');
        } else {
            this.infoMessageElement.classList.add('active');
            setTimeout(() => {
                this.infoMessageElement.classList.remove('active');
            }, 700)
        }
    }

    private static getRandomNumb(min: number, max:number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private addScore():void {
        const randomScore = Game.getRandomNumb(5, 10);
        this.score = this.score + randomScore;
        this.showMessage(`+${String(randomScore)}`, false);
        this.resizeBlockVision();
    }

    private removeScore():void {
        const randomScore = Game.getRandomNumb(20, 25);
        this.score = this.score - randomScore;
        this.showMessage(`-${String(randomScore)}`, false);
        this.resizeBlockVision();
    }

    private limitScoreGame():void {
        if (this.score >= 200) {
            this.finishGame();
            this.showMessage('You are \n winner!', true);
        } else if(this.score <= 0) {
            this.finishGame();
            this.showMessage('Game Over!', true);
        }
    }

    private setKey():void {
        this.loader();
        const currentScore = this.score;
        this.keyElement.innerHTML = `&#00${Game.getRandomNumb(66, 91)}`;
        window.addEventListener('keydown', this.currentRun);
        setTimeout(() => {
            if (currentScore === this.score) {
                this.removeScore();
                this.updateScore();
                this.limitScoreGame();
            }
        }, this.interval - 10)
    }

    private changeColorBlockKey(colorClass: string) {
        this.blockKeyElement.classList.toggle(colorClass);
        setTimeout(() => this.blockKeyElement.classList.toggle(colorClass), 500);
    }

    private loader():void {
        let counter = 0;
        let loader = this.loaderElement;
        const percents = 100;
        function progressLoader() {
            counter++;
            loader.style.width = counter + '%';
            if( counter == percents ) {
                clearInterval( timer );
            }
        }
        let timer = setInterval( progressLoader, this.interval/percents );
    }
}

const game = new Game(
    keyElement,
    scoreElement,
    infoMessageElement,
    visionElement,
    loaderElement,
    blockKeyElement,
    startButtonElement,
    restartButtonElement,
    stopButtonElement
);

startButtonElement.addEventListener('click', () => game.start());
restartButtonElement.addEventListener('click', () => game.restart());
stopButtonElement.addEventListener('click', () => game.stop());
