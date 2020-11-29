import '../styles/style.css';
import '../styles/normalize.css';

const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;
const startBtnElement = document.querySelector('[data-button]') as HTMLButtonElement;
const letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;
    private isGameStarted: boolean = false;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private cubeElement?: HTMLDivElement,
        private progressBarElement?: HTMLDivElement,
    ) {
    }


    start() {
        this.isGameStarted = true;
        this.scoreElement.innerHTML = String(this.score);
        this.getLetters();
        this.subscribeOnKeyPress();
    }

    private getLetters(): void {
        this.currentKey = letters[Math.floor(Math.random() * letters.length)];
        keyElement.innerHTML = this.currentKey;
    }

    private getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    private subscribeOnKeyPress() {
        document.addEventListener('keypress', (event: KeyboardEvent) => {
            const keyName = event.key;
            if (keyName.toLowerCase() === this.currentKey.toLowerCase()) {
                this.scoreElement.innerHTML = String(this.score += this.getRandom(5, 10));
            } else if (keyName.toLowerCase() !== this.currentKey.toLowerCase()) {
                this.scoreElement.innerHTML = String(this.score -= this.getRandom(20, 25));
            } else {
                this.scoreElement.innerHTML = String(this.score -= this.getRandom(10, 15));
            }
        });
    }

    private endGame() {
        if (this.score >= 200) {
            alert('Congratulations!!! You awesome!!!');
            this.isGameStarted = false;
        } else if (this.score <= 0) {
            alert('You lose XD');
            this.isGameStarted = false;
        } else {
            this.isGameStarted = true;
        }
    }
}

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);

game.start();

