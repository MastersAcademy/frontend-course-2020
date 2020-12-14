import './styles/style.css';

const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;
    private randomNumber: number;
    private timer: NodeJS.Timeout;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private cubeElement?: HTMLDivElement,
    ) {
    }

    start(): void {
        this.startKeysInterval();
        this.subscribeOnKeyPress();
    }

    private startKeysInterval(): void {
        this.updateScore(String(this.score));
        this.timer = setInterval(() => {
            this.setKey();
        }, this.interval);
    }

    private setKey(): string {
        const letter: string = 'abcdefghijklmnopqrstuvwxyz';
        this.currentKey = letter.charAt(Math.floor(Math.random() * letter.length));
        this.updateRandomValue(this.currentKey.toUpperCase());
        return this.currentKey
    }

    private subscribeOnKeyPress(): void {
        document.addEventListener('keypress', event => {
            this.checkKey(event.key.toLowerCase())
        })

    }

    private checkKey(key: string): void {
        if (key === this.currentKey) {
            this.sameKey();
            this.gameEnd();
        } else {
            this.differentKey();
            this.gameEnd();
        }
    }

    private sameKey(): void {
        this.score += this.randomInteger(5, 10)
        this.updateCubeScore(`+${this.randomNumber}`);
        setTimeout(() => {
            this.updateCubeScore('');
        }, 1000);
        this.updateScore(String(this.score));
        this.cubeSize();
    }

    private differentKey(): void {
        this.score -= this.randomInteger(20, 25)
        this.updateCubeScore(`-${this.randomNumber}`);
        setTimeout(() => {
            this.updateCubeScore('');
        }, 1000);
        this.updateScore(String(this.score));
        this.cubeSize();
    }

    private randomInteger(min: number, max: number): number {
        let rand: number = min + Math.random() * (max + 1 - min);
        this.randomNumber = Math.floor(rand);
        return this.randomNumber
    }

    private gameEnd(): void {
        if (this.score >= 200) {
            this.updateScore('You are win!');
            clearInterval(this.timer);
            this.updateCubeScore('');
            this.updateRandomValue('');
        } else if (this.score <= 0) {
            this.updateScore('You are lose!');
            clearInterval(this.timer);
            this.updateCubeScore('');
            this.updateRandomValue('');
        }
    }

    private cubeSize(): void {
        this.cubeElement.style.width = String(this.score + 50 + 'px');
        this.cubeElement.style.height = String(this.score + 50 + 'px');
    }

    private updateScore(score: string): void {
        this.scoreElement.innerText = score;
    }

    private updateRandomValue(value: string): void {
        this.keyElement.innerText = value;
    }

    private updateCubeScore(score: string): void {
        this.cubeScoreElement.innerText = score;
    }
}

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement);

game.start();

