const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;
const elemBar = document.querySelector('[data-my-bar]') as HTMLDivElement;
const resultElement = document.querySelector('[data-result]') as HTMLDivElement;

class Game {
    private score: number = 100;
    private interval: number = 2000;

    constructor(
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private cubeElement?: HTMLDivElement,
        private resultElement?: HTMLDivElement,
    ) {
    }

    start() {
        this.startKeysInterval();
    }

    private startKeysInterval() {
        this.subscribeOnKeyPress();
          let id : NodeJS.Timeout  = setInterval(() => {
            Game.drawProgressBar();
            Game.randAZ();
            let scoreCurr = Number.parseInt(this.scoreElement.innerHTML);
            if (scoreCurr == 200 || scoreCurr == 0) {
                clearInterval(id);
            }
        }, this.interval);
    }

    private static drawProgressBar() {
        return elemBar.classList.toggle('active_mybar');
    }

    private setScore(score: number) {
        this.scoreElement.innerHTML = score.toString();
        if (score >= 200) {
            this.resultElement.innerHTML = 'Победа';
            this.scoreElement.innerHTML = '200';
            this.cubeScoreElement.innerHTML = '0';
            this.cubeElement.style.width = '100px';
            this.cubeElement.style.height = '100px';
        }
        if (score < 0) {
            this.resultElement.innerHTML = 'Проигрыш';
            this.scoreElement.innerHTML = '0';
            this.cubeScoreElement.innerHTML = '0';
            this.cubeElement.style.width = '100px';
            this.cubeElement.style.height = '100px';
        }
    }

    private static randAZ(): string {
        let str: string = 'abcdefghijklmnopqrstuwvxyz';
        return keyElement.innerHTML = str.charAt(this.getRandomArbitrary(0, 25)).toUpperCase();
    }

    private setSizeCube(score: number, randomNum: number) {
        let size = String(score + randomNum) + 'px';
        this.cubeElement.style.width = size;
        this.cubeElement.style.height = size;
    }

    private setKey(key: string) {
        if (key === keyElement.innerHTML) {
            let randomNumPlus: number = Game.getRandomArbitrary(5, 10);
            this.addScore(randomNumPlus);
            cubeScoreElement.style.display = 'block';
            this.setSizeCube(this.score, randomNumPlus / 4);
        } else {
            let randNumMinus: number = Game.getRandomArbitrary(-20, -25);
            this.addScore(randNumMinus);
            this.setSizeCube(this.score, randNumMinus / 8);
            cubeScoreElement.style.display = 'block';
        }
    }


    private static getRandomArbitrary(min: number, max: number): number {
        return Math.ceil(Math.random() * (max - min) + min);
    }

    private addScore(score: number) {
        let scoreCurr = Number.parseInt(this.scoreElement.innerHTML);
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

