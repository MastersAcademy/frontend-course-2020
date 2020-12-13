import { ProgressBar } from './ProgressBar';

export class Game {
    private currentScore: number = 100;
    private currentKey: string = '';
    private timerId?: number;
    private keyElement: HTMLDivElement;
    private scoreElement: HTMLDivElement;
    private cubeScoreElement: HTMLDivElement;
    private progressBar: ProgressBar;

    constructor(
        private winnerScreenElement: HTMLParagraphElement,
        private loserScreenElement: HTMLParagraphElement,
        private gameScreenElement: HTMLDivElement,
    ) {
        this.scoreElement = this.gameScreenElement.querySelector('[data-score]') as HTMLHeadingElement;
        this.cubeScoreElement = this.gameScreenElement.querySelector('[data-cube-score]') as HTMLDivElement;
        this.keyElement = this.gameScreenElement.querySelector('[data-key]') as HTMLDivElement;
        this.progressBar = new ProgressBar(this.gameScreenElement.querySelector<HTMLDivElement>('[data-progress-bar]')!);
    }

    start() {
        this.render();

        document.addEventListener('keydown', event => {
            this.onKeyPressed(event.key.toUpperCase());
        });

        this.nextLetter();
    }

    private nextLetter() {
        clearTimeout(this.timerId);
        
        if (this.isWinner) {
            this.renderWinner();
            return;
        }

        if (this.isLoser) {
            this.renderLoser();
            return;
        }

        this.currentKey = this.generateKey();
        this.keyElement.innerText = this.currentKey;
        this.progressBar.start();
        this.timerId = setTimeout(() => {
            this.subtractScore();
            this.nextLetter();
        }, 2000) as any as number;
    }

    private renderWinner() {
        this.winnerScreenElement.hidden = false;
        this.gameScreenElement.hidden = true;
    }

    private renderLoser() {
        this.loserScreenElement.hidden = false;
        this.gameScreenElement.hidden = true;
    }

    private render() {
        this.scoreElement.innerText = this.currentScore.toString();
    }

    private generateKey(): string {
        const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    private onKeyPressed(key: string) {
        if (key == this.currentKey){
            this.addScore();
        } else {
            this.subtractScore();
        }
        this.nextLetter();
    }

    private addScore() {
        const score: number = Math.floor(Math.random() * (10 - 5) + 5);
        this.currentScore += score;
        this.scoreElement.innerText = this.currentScore.toString();
        this.cubeScoreElement.innerText =  `+ ${score}`;
    }

    private subtractScore() {
        const score: number = Math.floor(Math.random() * (25 - 20) + 20);
        this.currentScore -= score;
        this.scoreElement.innerText = this.currentScore.toString();
        this.cubeScoreElement.innerText = `- ${score}`;
    }

    private get isWinner(): boolean {
        return this.currentScore >= 200;
    }

    private get isLoser(): boolean {
        return this.currentScore <= 0;
    }
}
