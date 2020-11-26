const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;
const startButtonElement = document.querySelector('[data-game-start-btn]') as HTMLButtonElement;
const stopButtonElement = document.querySelector('[data-game-stop-btn]') as HTMLButtonElement;
const restartButtonElement = document.querySelector('[data-game-restart-btn]') as HTMLButtonElement;

class Game {
    private score: number = 100;
    private interval: number = 2000;
    private intervalId: number = null;
    private intervalEventDelay: number = 10;
    private currentEventTime: number = 0;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private cubeElement: HTMLDivElement,
        private progressBarElement: HTMLDivElement,
    ) {
        this.subscribeOnKeyPress();
    }

    start() {
        if (this.intervalId != null) {
            return;
        }

        this.startKeysInterval();
        Game.generateKey();
    }

    private startKeysInterval() {
        this.intervalId = window.setInterval(Game.intervalEvent, this.intervalEventDelay, this);
    }

    stopKeysInterval() {
        window.clearInterval(this.intervalId);
        this.intervalId = null;
    }

    private static intervalEvent(current: Game) {
        current.currentEventTime += current.intervalEventDelay;
        current.updateProgressBar();
        if (current.currentEventTime > current.interval) {
            current.addScore(Game.generateNumber(-10, -15));
            current.resetEvent();
        }
    }

    private updateProgressBar() {
        this.progressBarElement.style.width = String(100 - this.currentEventTime / this.interval * 100) + '%';
    }

    private setScore(score: number) {
        this.scoreElement.innerHTML = score.toString();
        let cubeSize: string = String(100 + score / 2) + 'px';
        this.cubeElement.style.width = cubeSize;
        this.cubeElement.style.height = cubeSize;
        if (score > 200) {
            alert('victory');
            this.restartGame();
        }
        if (score < 0) {
            alert('loss');
            this.restartGame();
        }
    }

    restartGame() {
        this.stopKeysInterval();
        this.setScore(this.score);
        this.resetEvent();
        this.cubeScoreElement.innerHTML = '';
    }

    private setKey(key: string) {
        if (key.toUpperCase() === keyElement.innerHTML) {
            let score: number = Game.generateNumber(5, 10);
            this.addScore(score);
        } else {
            this.addScore(Game.generateNumber(-20, -25));
        }
        this.resetEvent();
    }

    private resetEvent() {
        this.currentEventTime = 0;
        this.updateProgressBar();
        Game.generateKey();
    }

    private addScore(score: number) {
        let currentScore: number = Number.parseInt(this.scoreElement.innerHTML);
        this.cubeScoreElement.innerHTML = score.toString();
        this.setScore(currentScore + score);

    }

    private subscribeOnKeyPress() {
        document.addEventListener('keypress', (event: KeyboardEvent) => {
            this.setKey(event.key)
        })
    }

    private static generateKey(): void {
        let aCode: number = 'A'.charCodeAt(0);
        let zCode: number = 'Z'.charCodeAt(0);
        let generatedCode: number = Game.generateNumber(aCode, zCode);
        keyElement.innerHTML = String.fromCharCode(generatedCode);
    }

    private static generateNumber(min: number, max: number): number {
        return Math.floor(Math.random() * Math.floor(max - min)) + min;
    }
}

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);

startButtonElement.addEventListener('click', () => game.start());
stopButtonElement.addEventListener('click', () => game.stopKeysInterval());
restartButtonElement.addEventListener('click', () => game.restartGame());
