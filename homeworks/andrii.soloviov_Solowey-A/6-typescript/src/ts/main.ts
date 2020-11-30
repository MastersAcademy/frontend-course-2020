const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;
    private symbol: string = '';
    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private cubeElement?: HTMLDivElement,
        private progressBarElement?: HTMLDivElement,
    ) {}

    private getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    private startKeysInterval(interval: number) {
        setInterval( (event)=>{
            this.setKey(this.symbol);
        },interval);
    }

    private setScore(score: number) {
        scoreElement.innerHTML = score.toString();
    }

    private setKey(key: string) {
        let generatedSymbol = '';
        let str = '1234567890qwertyuiopasdfghjklzxcvbnm';
        for (let i = 0; i < 1; i++) {
            generatedSymbol += str[game.getRandom(0, str.length - 1)];
        }
        cubeElement.innerHTML = generatedSymbol.toUpperCase();
        cubeElement.classList.remove('correctSymbol', 'wrongSymbol');
        this.symbol = generatedSymbol;
    }

    private compare (key: string, generatedSymbol: string) {
        if (generatedSymbol.toUpperCase() === key.toUpperCase()) {
            cubeElement.classList.add('correctSymbol');
            this.setScore(this.addScore(this.score));
        } else {
            cubeElement.classList.add('wrongSymbol');
            this.setScore(this.minusScore(this.score));
        }
    }
    private addScore(score: number) {
        this.score = score;
        this.score = this.score + this.getRandom(5, 10);
        if (this.score >= 200){
            alert('You win')
        }
        return this.score
    }
    private minusScore(score: number) {
        this.score = this.score + this.getRandom(-20, -25);
        if (this.score <= 0){
            alert('You looooose))')
        }
        return this.score
    }

    private subscribeOnKeyPress() {
        document.addEventListener('keypress', (event: KeyboardEvent) => {
            this.compare(event.key, this.symbol);
        })
    }

    start() {
        this.startKeysInterval(this.interval);
        this.setScore(this.score);
        this.subscribeOnKeyPress();
    }
}

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);

game.start();
