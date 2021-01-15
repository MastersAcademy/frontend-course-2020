import './styles.css';

const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private inputKey: string = '';
    private interval: number = 2000;
    private timerId: NodeJS.Timeout;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
    ) {}

    start() {
        this.updateGameHeader(this.score);
        this.subscribeOnKeyPress();
        this.timerId = this.startKeysInterval();
    }

    private startKeysInterval() {
        return setInterval(() => {
            this.compareKeys();
            this.checkGame()
        }, this.interval);
    }

    private checkGame() {
        if (this.score <= 0) {
            clearInterval(this.timerId);
            this.scoreElement.innerText = 'Game Over';
        } else if (this.score >= 200) {
            clearInterval(this.timerId);
            this.scoreElement.innerText = 'You Win';
        } else {
            this.setKey()
        }
    }

    private updateGameHeader(header: string | number) {
        this.scoreElement.innerText = String(header);
    }

    private subscribeOnKeyPress() {
        document.addEventListener('keypress', ({ key }: KeyboardEvent) => {
            this.inputKey = key.toUpperCase()
        });
    }

    private compareKeys() {
        if (this.currentKey) {
            this.currentKey === this.inputKey
                ? this.setScore(this.generateNumber(5, 10))
                : this.setScore(this.generateNumber(-25, -20));
        }
    }

    private setScore(value: number) {
        this.updateCubeScore(value);
        this.scoreElement.innerText = String(this.score +=value);
    }


    private setKey() {
        this.currentKey = this.generateRandomKey();
        this.keyElement.innerText = String(this.currentKey);
    }

    private updateCubeScore(score: number) {
        this.cubeScoreElement.innerText = String(score);
    }

    private generateNumber = (min: number, max: number) => Math.round(Math.random() * (max - min + 1) + min);

    private generateRandomKey = () => alphabet[Math.floor(Math.random() * alphabet.length)];
}

const game = new Game(scoreElement, cubeScoreElement, keyElement);

game.start();
