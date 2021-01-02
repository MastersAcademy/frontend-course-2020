import 'normalize.css/normalize.css'
import '../styles/style.css';

const containerElement = document.querySelector('[data-container]') as HTMLDivElement;
const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;
const startBtnElement = document.querySelector('[data-button]') as HTMLButtonElement;
const letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;
    private isGameStarted: boolean = false;
    private updateIntervalId: number;

    constructor(
        private containerElement: HTMLDivElement,
        private scoreElement: HTMLHeadingElement,
        private keyElement: HTMLDivElement,
        private progressBarElement: HTMLDivElement,
    ) {
    }

    start() {
        this.isGameStarted = true;
        this.scoreElement.innerHTML = String(this.score);
        this.getLetters();
        this.subscribeOnKeyPress();
        this.move();
    }

    private getLetters(): void {
        this.updateIntervalId = setInterval(() => {
            this.currentKey = letters[Math.floor(Math.random() * letters.length)];
            this.keyElement.innerHTML = this.currentKey;
            this.move();
        }, this.interval) as any as number;
    }

    private move(): void {
        let barWidth: number = 0;
        const id = setInterval(frame.bind(this), this.interval / 100);

         function frame() {
            if (barWidth >= 100) {
                clearInterval(id);
                barWidth = 0;
            } else {
                barWidth++;
                this.progressBarElement.style.width = barWidth + "%";
            }
        }
    }

    private static getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    private subscribeOnKeyPress(): void {
        document.addEventListener('keypress', event => {
            this.updateScore(event.key.toUpperCase());
            this.endGame();
        });
    }

    private updateScore(key: string) {
        const keyName = key.toUpperCase();
        if (keyName === this.currentKey) {
            this.scoreElement.innerHTML = String(this.score += Game.getRandom(5, 10));
        } else {
            this.scoreElement.innerHTML = String(this.score -= Game.getRandom(20, 25));
        }
    }

    private endGame() {
        if (this.score >= 200) {
            alert('Congratulations!!! You awesome!!! ( ͡❛ ͜ʖ ͡❛)✌');
            containerElement.classList.add('finish');
            this.isGameStarted = false;
            clearInterval(this.updateIntervalId);
            return;
        }
        if (this.score <= 0) {
            alert('You lose ( ͡❛ ͜ʖ ͡❛)');
            this.isGameStarted = false;
            clearInterval(this.updateIntervalId);
            return;
        }
    }
}

const game = new Game(containerElement, scoreElement, keyElement, progressBarElement);

startBtnElement.addEventListener('click', () => game.start());
