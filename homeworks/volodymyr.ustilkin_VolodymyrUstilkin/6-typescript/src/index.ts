const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;
    private intervalId : number = 0;
    private intervalEventDelay: number = 100;
    private currentEventTime: number = 0;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private cubeElement: HTMLDivElement,
        private progressBarElement: HTMLDivElement,
    ) {
    }

    start() {
        this.subscribeOnKeyPress();
        this.startKeysInterval();
        this.generateKey();
    }

    private startKeysInterval() {
        this.intervalId = window.setInterval(this.intervalEvent, this.intervalEventDelay, this);
    }

    private intervalEvent(current : Game) {
        current.currentEventTime += current.intervalEventDelay;
        current.changeProgressBar();
        if (current.currentEventTime > current.interval) {
            current.addScore(current.generateNumber(-10, -15));
            current.resetEvent();
            console.log('time failed');
        }
    }

    private changeProgressBar() {
        let maxSize : number = 200 / this.interval;
        let step = this.interval / maxSize;
        let size : number = 200;
        this.progressBarElement.style.width = String(100 - this.currentEventTime/this.interval*100) +'%';
        console.log(this.currentEventTime/this.interval);

    }

    private setScore(score: number) {
        this.scoreElement.innerHTML = score >= 0 ? '+' + score.toString() : score.toString();
        if (score > 200) {
            alert('victory');
            this.restartGame();
        }
        if (score < 0) {
            alert('loss');
            this.restartGame();
        }
    }

    private restartGame() {
        this.scoreElement.innerHTML = this.score.toString();
        this.cubeScoreElement.innerHTML = '';
        window.clearInterval(this.intervalId);
    }

    private setKey(key: string) {
        if (key.toUpperCase() === keyElement.innerHTML) {
            let score: number = this.generateNumber(5, 10);
            this.addScore(score);
        } else {
            this.addScore(this.generateNumber(-20, -25));;
        }
        this.resetEvent();
    }

    private resetEvent() {
        this.currentEventTime = 0;
        this.generateKey();
    }

    private addScore(score: number) {
        let currentScore: number = Number.parseInt(this.scoreElement.innerHTML);
        this.cubeScoreElement.innerHTML = score.toString();
        this.setScore(currentScore + score);

    }

    private subscribeOnKeyPress() {
        document.addEventListener('keypress', (event: KeyboardEvent) => {this.setKey(event.key)})
    }

    private generateKey(): void {
        let aCode :number = 'A'.charCodeAt(0);
        let zCode :number = 'Z'.charCodeAt(0);
        let generatedCode: number = this.generateNumber(aCode, zCode);
        keyElement.innerHTML = String.fromCharCode(generatedCode);
    }

    private generateNumber (min: number, max : number) : number {
        return Math.floor(Math.random() * Math.floor(max - min)) + min;
    }
}

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);

game.start();
