//import css from "index.css";

const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;
    private intervalId : number;
    private intervalEventDelay: number = 10;
    private currentEventTime: number = 0;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private cubeElement?: HTMLDivElement,
        private progressBarElement?: HTMLDivElement,
    ) {
    }

    start() {
        this.subscribeOnKeyPress();
        this.startKeysInterval();
        this.generateKey();
        console.log('started');
    }

    private startKeysInterval() {
        this.intervalId = window.setInterval(this.intervalEvent, this.currentEventTime);
    }

    private intervalEvent() {
        this.currentEventTime += this.currentEventTime;
        if (this.currentEventTime > this.interval) {
            this.addScore(-20);
        }
    }

    private setScore(score: number) {
        scoreElement.innerHTML = score.toString();
    }

    private setKey(key: string) {
        if (key.toUpperCase() === keyElement.innerHTML) {
            this.addScore(10);
        } else {
            this.addScore(-25);
        }
        this.generateKey();
    }

    private addScore(score: number) {
        let currentScore: number = Number.parseInt(scoreElement.innerHTML);
        this.setScore(currentScore + score);

    }

    private subscribeOnKeyPress() {
        document.addEventListener('keypress', (event: KeyboardEvent) => {this.setKey(event.key)})
    }

    private generateKey(): void {
        let aCode :number = 'A'.charCodeAt(0);
        let zCode :number = 'Z'.charCodeAt(0);
        let generatedCode: number = Math.floor(Math.random() * Math.floor(zCode - aCode)) + aCode;
        keyElement.innerHTML = String.fromCharCode(generatedCode);
    }
}

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);

game.start();
