const scoreElement = document.querySelector<HTMLDivElement>('[data-score]');
const cubeElement = document.querySelector<HTMLDivElement>('[data-cube]');
const cubeScoreElement = document.querySelector<HTMLDivElement>('[data-cube-score]');
const keyElement = document.querySelector<HTMLDivElement>('[data-key]');
const barElement = document.querySelector<HTMLDivElement>('[data-my-bar]');
const resultElement = document.querySelector<HTMLDivElement>('[data-result]');

class Game {
    private score: number = 100;
    private interval: number = 2000;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private cubeElement?: HTMLDivElement,
        private resultElement?: HTMLDivElement,
    ) {}

    start() {
        this.startKeysInterval();
    }

    private startKeysInterval() {
        this.subscribeOnKeyPress();
        let id: NodeJS.Timeout = setInterval(() => {
            Game.drawProgressBar();
            Game.randAZ();
            const scoreCurr = Number.parseInt(this.scoreElement.innerHTML);
            if (scoreCurr === 200 || scoreCurr === 0) {
                clearInterval(id);
            }
        }, this.interval);
    }

    private static drawProgressBar() {
        return barElement.classList.toggle('active-mybar');
    }

    private stopGame(resultStr: string, resultNum: string) {
        this.resultElement.innerHTML = resultStr;
        this.scoreElement.innerHTML = resultNum;
        this.cubeScoreElement.innerHTML = '0';
        this.cubeElement.style.width = '100px';
        this.cubeElement.style.height = '100px';
    }

    private setScore(score: number) {
        this.scoreElement.innerHTML = score.toString();
        if (score >= 200) this.stopGame('Победа', '200');
        if (score < 0) this.stopGame('Проигрыш', '0');

    }

    private static randAZ(): string {
        const str: string = 'abcdefghijklmnopqrstuwvxyz';
        return keyElement.innerHTML = str.charAt(this.getRandomArbitrary(0, 25)).toUpperCase();
    }

    private setSizeCube(score: number, randomNum: number) {
        const size = String(score + randomNum) + 'px';
        this.cubeElement.style.width = size;
        this.cubeElement.style.height = size;
    }

    private setPlusMinusKeyAndSizeCube(num1: number, num2: number, dividNum: number) {
        const randomNum: number = Game.getRandomArbitrary(num1, num2);
        this.addScore(randomNum);
        cubeScoreElement.style.display = 'block';
        this.setSizeCube(this.score, randomNum / dividNum);
    }

    private setKey(key: string) {
        if (key === keyElement.innerHTML) {
            this.setPlusMinusKeyAndSizeCube(5, 10, 4);
        } else {
            this.setPlusMinusKeyAndSizeCube(-20, -25, 8);
        }
    }


    private static getRandomArbitrary(min: number, max: number): number {
        return Math.ceil(Math.random() * (max - min) + min);
    }

    private addScore(score: number) {
        const scoreCurr = Number.parseInt(this.scoreElement.innerHTML);
        this.cubeScoreElement.innerHTML = score.toString();
        this.setScore(scoreCurr + score);
    }

    private subscribeOnKeyPress() {
        document.body.addEventListener('keydown', (e) => {
            this.setKey(e.key.toUpperCase());
        });
    }
}

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, resultElement);

game.start();

