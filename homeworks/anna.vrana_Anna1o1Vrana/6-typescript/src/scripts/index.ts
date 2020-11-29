import '../styles/style.css';
import '../styles/normalize.css';

const containerElement = document.querySelector('[data-container]') as HTMLDivElement;
const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;
const startBtnElement = document.querySelector('[data-button]') as HTMLButtonElement;
const letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private pressedKey: string = ';'
    private interval: number = 2000;
    private isGameStarted: boolean = false;

    constructor(
        private containerElement: HTMLDivElement,
        private scoreElement: HTMLHeadingElement,
        private keyElement: HTMLDivElement,
        private progressBarElement?: HTMLDivElement,
    ) {
    }


    start() {
        this.isGameStarted = true;
        this.scoreElement.innerHTML = String(this.score);
                this.getLetters();
                this.subscribeOnKeyPress();
                this.startKeysInterval();
                this.endGame();
    }

    private startKeysInterval() {
        let counterProgress: number = 0;
        const progress = setInterval(() => {
            counterProgress++;
            this.progressBarElement.style.width = `${Number(this.progressBarElement.style.width.slice(0, -1)) + 1}%`
            if (counterProgress === 100) {
                this.progressBarElement.style.width = '0%';
            }
                if (this.pressedKey === this.currentKey) {
                    this.progressBarElement.style.width = '0%';
                }
        }, this.interval / 100);

    }
    private setScore(score: number) {
        // code...
    }

    private setKey(key: string) {
        // code...
    }

    private getLetters(): void {
        setInterval(() => {
            this.currentKey = letters[Math.floor(Math.random() * letters.length)];
            keyElement.innerHTML = this.currentKey;
        }, this.interval)
    }

    private getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    private subscribeOnKeyPress() {
        setInterval(() => {
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
        }, this.interval)
    }

    private endGame() {
        document.addEventListener('keypress', (event: KeyboardEvent) => {
        if (this.score >= 200) {
            containerElement.innerHTML = 'Congratulations!!! You awesome!!! ( ͡❛ ͜ʖ ͡❛)✌';
            this.isGameStarted = false;
        } else if (this.score <= 0) {
            containerElement.innerHTML ='You lose ( ͡❛ ͜ʖ ͡❛)';
            this.isGameStarted = false;
        } else {
            this.isGameStarted = true;
        }
    })
    }
}

const game = new Game(containerElement, scoreElement, keyElement, progressBarElement);

// startBtnElement.addEventListener('click', game.start();

game.start();

