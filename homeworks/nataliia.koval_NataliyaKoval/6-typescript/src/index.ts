const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;
const letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;
    private timerId: NodeJS.Timeout;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private cubeElement?: HTMLDivElement,
        private progressBarElement?: HTMLDivElement,
    ) {}

    start() {
      scoreElement.innerText = String(this.score);
      this.startKeysInterval();
      this.subscribeOnKeyPress();
    }

    private startKeysInterval() {
      this.timerId = setInterval(() => {
        this.generateLetter();
      }, this.interval);
    }

    private subscribeOnKeyPress() {
        document.addEventListener('keypress', (event: KeyboardEvent) => {
            this.setKey(event.key.toUpperCase());
        });
    }

    private generateLetter(): string {
        let indexOfLetter: number = Math.floor((Math.random()*letters.length));
        this.currentKey = letters[indexOfLetter];
        keyElement.innerText = this.currentKey;
        return this.currentKey;
    }

    private setKey(key: string) {
        if (this.currentKey === key) {
            this.increaseScore();
        } else {
            this.reduceScore();
        }
    }
   
    private increaseScore() {
        let newNumber: number = this.generateNumber(5, 10);
        this.score += newNumber;
        cubeScoreElement.innerText = `+${newNumber}`;
        scoreElement.innerText = String(this.score);
        this.stopTheGame();
    }

    private reduceScore() {
        let newNumber: number = this.generateNumber(20, 25);
        this.score -= newNumber;
        cubeScoreElement.innerText = `-${newNumber}`;
        scoreElement.innerText = String(this.score);
        this.stopTheGame();
    }

    private stopTheGame() {
        if (this.score === 200) {
            scoreElement.innerText = 'You win!';
            clearInterval(this.timerId);
            cubeScoreElement.innerText = '';
            keyElement.innerText = '';
        } else if (this.score <= 0) {
            scoreElement.innerText = 'You lose';
            clearInterval(this.timerId);
            cubeScoreElement.innerText = '';
            keyElement.innerText = '';
        }
    }

    private generateNumber(min: number, max: number): number {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
  
}
const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);

game.start();