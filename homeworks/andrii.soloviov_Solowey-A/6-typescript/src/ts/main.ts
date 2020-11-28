const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private cubeElement?: HTMLDivElement,
        private progressBarElement?: HTMLDivElement,
    ) {}

    start() {
        this.startKeysInterval(game.interval);
        this.setScore(game.score);
        this.subscribeOnKeyPress();
    }

    private getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    public startKeysInterval(interval) {
        setInterval( ()=>{
            let result = '';
            let str = '1234567890qwertyuiopasdfghjklzxcvbnm';
            for (let i = 0; i < 1; i++) {
                result += str[game.getRandom(0, str.length - 1)];
            }
            cubeElement.innerHTML = result.toUpperCase();
            cubeElement.classList.remove('true');
            cubeElement.classList.remove('false');
        },interval);
    }

    private setScore(score: number) {
        scoreElement.innerHTML = score.toString();
    }

    private addScore(score: number) {
        let currentScore = Number.parseInt(scoreElement.innerHTML);
        this.setScore(currentScore + score);
    }

    private changeScore(event) {
        let keyNum;
        keyNum = event.keyCode;
        let symbol = String.fromCharCode(keyNum).toUpperCase();
        if(symbol === cubeElement.innerHTML) {
            let score = game.getRandom(5, 10)
            this.addScore(score);
            cubeScoreElement.innerHTML = '+' + score.toString();
            cubeElement.classList.remove('false');
            cubeElement.classList.add('true');

        } else {
            let score = game.getRandom(-20, -25)
            this.addScore(score);
            cubeScoreElement.innerHTML = score.toString();
            cubeElement.classList.remove('true');
            cubeElement.classList.add('false');
        }
    }
    private subscribeOnKeyPress() {
        window.addEventListener("keypress", (event) => {
            game.changeScore(event)
            let currentScore = Number.parseInt(scoreElement.innerHTML);
            if (currentScore >= 200){
                alert('You win');
            } else if (currentScore <= 0) {
                alert('You loss');
            }
        })
    }
}

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);

game.start();
