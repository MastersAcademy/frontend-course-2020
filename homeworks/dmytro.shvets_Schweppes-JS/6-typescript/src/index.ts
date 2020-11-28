// main game element
const scoreElement = document.querySelector<HTMLHeadingElement>('[data-score]');
const cubeScoreElement = document.querySelector<HTMLHeadingElement>('[data-cube-score]');
const cubeElement = document.querySelector<HTMLDivElement>('[data-cube]');
const keyElement = document.querySelector<HTMLDivElement>('[data-key]');
const notification = document.querySelector<HTMLParagraphElement>('[data-notification]');
// progres barr element
const progressTop = document.querySelector<HTMLDivElement>('[data-progress-top]');
const progressRight = document.querySelector<HTMLDivElement>('[data-progress-right]');
const progressLeft = document.querySelector<HTMLDivElement>('[data-progress-left]');
const progressBottom = document.querySelector<HTMLDivElement>('[data-progress-bottom]');
// button element
const startBtn = document.querySelector<HTMLButtonElement>('[data-start]');
const stopBtn = document.querySelector<HTMLButtonElement>('[data-stop]');
const newGameBtn = document.querySelector<HTMLButtonElement>('[data-new]');

class Game {
    // main game variables
    private score: number = 100;
    private interval: number = 2000;
    private characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    private charactersLength: number = this.characters.length;
    // timers for animation
    private timerBottom!: number;
    private animationTimer!: number;
    private timerRight!: number;
    private timerTop!: number;
    private timerleft!: number;
    private disableAnimation!: number;

    private randomCharacters: string = '';
    private isKeyPress: boolean = false;

    constructor (
        private scoreElement: HTMLHeadingElement,
        private cubeScoreElement: HTMLHeadingElement,
        private cubeElement: HTMLDivElement,
        private keyElement: HTMLDivElement,
        private progressBottom: HTMLDivElement,
        private progressLeft: HTMLDivElement,
        private progressTop: HTMLDivElement,
        private progressRight: HTMLDivElement,
        private startBtn: HTMLButtonElement,
        private stoptBtn: HTMLButtonElement,
    ) {}

    // start text counting
    counting() {
        setTimeout(() => notification!.textContent = '1', 500);
        setTimeout(() => notification!.textContent = '2', 1000);
        setTimeout(() => notification!.textContent = '3', 1500);
        setTimeout(() => {
            document.addEventListener('keypress', this.submitting);
            notification!.textContent = 'Start typing!'
        }, 2000);
        setTimeout(() => notification!.textContent = '', 3000);
    }

    // perform animation every 2 seconds
    private cycleProgressAnimation() {
        this.animationTimer = window.setInterval(() => {
            this.startAnimation();
        }, this.interval);
    }

    // getting random character
    private generateLetter() {
        const index: number = Math.floor((Math.random() * this.charactersLength) + 1);
        this.randomCharacters = this.characters[index - 1];
        keyElement!.textContent = this.randomCharacters;
    }

    // checking current score
    private checkingScore(currentScore: number) {
        if (currentScore >= 200 || currentScore <= 0) {
            this.stopGame();
            scoreElement!.textContent = currentScore >= 200 ?  'You Win!' : 'You Lose!';
            startBtn!.disabled = true;
            stopBtn!.disabled = true;
        } else this.restartCycle();
    }

    // setting random point and change cube size
    private ganeratePoint(isCorrectKey: boolean) {
        // if pressed successfully
        if (isCorrectKey) {
            // generate random number
            const min: number = 5;
            const max: number = 10;
            const point: number = Math.floor((Math.random() * (max - min + 1)) + min);
            // changing cube size 
            this.score = this.score + point;
            cubeElement!.style.width = `${this.score}px`;
            cubeElement!.style.height = `${this.score}px`;
            // inserting this amount in DOM
            cubeScoreElement!.textContent = `+${point}`;
            scoreElement!.textContent = `${this.score}`;
            this.checkingScore(this.score);
        // if fail to press
        } else {
            // generate random number between min and max
            let min: number;
            let max: number;
            if (this.isKeyPress) {
                min = 20;
                max = 25;
            } else {
                min = 10;
                max = 15;
            }
            const point: number = Math.floor((Math.random() * (max - min + 1)) + min);
            // changing cube size 
            this.score = this.score - point;
            cubeElement!.style.width = `${this.score}px`;
            cubeElement!.style.height = `${this.score}px`;
            this.isKeyPress = false;
            // inserting this amount in DOM
            cubeScoreElement!.textContent = `-${point}`;
            scoreElement!.textContent = `${this.score}`;
            this.checkingScore(this.score);
        }
    }

    // stopping animation with little deley to apply styles correctly
    private stopAnimation() {
        // set transition 0 second to disable smoothness
        progressBottom!.style.transition = 'none';
        progressLeft!.style.transition = 'none';
        progressTop!.style.transition = 'none';
        progressRight!.style.transition = 'none';
        // return the progress line to the default position
        progressBottom!.style.width = '0';
        progressLeft!.style.height = '0';
        progressTop!.style.width = '0';
        progressRight!.style.height = '0';
        // turn on smoothness
        setTimeout(() => {
            progressBottom!.style.transition = '.48s all linear';
            progressLeft!.style.transition = '.48s all linear';
            progressTop!.style.transition = '.48s all linear';
            progressRight!.style.transition = '.48s all linear';
        }, 40);
    }

    // srting animation every two second
    private startAnimation() {
        keyElement!.classList.replace('hidden', 'animated');
        keyElement!.classList.replace('hidden-animated', 'animated');
        // ganerate characters every two second
        this.generateLetter();
        // start progress bar animations with deley for each / bottom line
        this.timerBottom = window.setTimeout(() => progressBottom!.style.width = '100%', 50);
        this.timerleft = window.setTimeout(() => progressLeft!.style.height = '100%', 480);
        this.timerTop = window.setTimeout(() => progressTop!.style.width = '100%', 960);
        this.timerRight = window.setTimeout(() => {
            progressRight!.style.height = '100%';
            keyElement!.classList.replace('animated-on-press', 'hidden-animated');
            keyElement!.classList.replace('animated', 'hidden-animated');
        }, 1440);
        this.disableAnimation = window.setTimeout(() => {
            this.stopAnimation();
            this.ganeratePoint(false);
        }, 1920);
    }

    // cleat all timer to start new cicl animation or stop the game
    private stoppingTimers() {
        clearInterval(this.disableAnimation);
        clearInterval(this.animationTimer);
        clearInterval(this.timerRight);
        clearInterval(this.timerTop);
        clearInterval(this.timerleft);
        clearInterval(this.timerBottom);
    }

    // restart cycle of animation whe key pressed
    private restartCycle() {
        keyElement!.textContent = '';
        // setting the same animation but with different animation name to correctly work
        if (keyElement!.classList.contains('animated-on-press')) {
            keyElement!.classList.replace('animated-on-press', 'animated');
        } else {
            keyElement!.classList.replace('animated', 'animated-on-press');
        }
        this.stopAnimation();
        // needed a little delay for all styles to be set in order and work correctly
        setTimeout(() => {
            this.stoppingTimers();
            this.startAnimation();
            this.cycleProgressAnimation();
        }, 50);
    }

    // identify the key that was pressed
    private submitting = (e: any) => {
        const pressedKey: string = e.key;
        const showedCharacters: string = this.randomCharacters.toLocaleLowerCase();
        if (pressedKey === showedCharacters) {
            this.ganeratePoint(true);
        }
        else {
            this.isKeyPress = true;
            this.ganeratePoint(false);
        }
    }

    start() {
        this.counting();
        this.cycleProgressAnimation();
        notification!.textContent = '';
    }

    stopGame() {
        keyElement!.textContent = '';
        notification!.textContent = '';
        this.stoppingTimers();
        progressBottom!.style.width = '0';
        this.stopAnimation();
        document.removeEventListener('keypress', this.submitting);
    }

    restart() {
        this.score = 100;
        scoreElement!.textContent = '100';
        cubeScoreElement!.textContent = '0';
        cubeElement!.style.width = `100px`;
        cubeElement!.style.height = `100px`;
        this.stopGame();
    }
}

const game = new Game(
    scoreElement!,
    cubeScoreElement!,
    cubeElement!,
    keyElement!,
    progressBottom!,
    progressLeft!,
    progressTop!,
    progressRight!,
    startBtn!,
    stopBtn!
);

function start() {
    game.start();
    startBtn!.disabled = true;
    setTimeout(() => stopBtn!.disabled = false, 2000);
}

function stop() {
    startBtn!.disabled = false;
    stopBtn!.disabled = true;
    game.stopGame();
}

function restart() {
    stopBtn!.disabled = true;
    startBtn!.disabled = false;
    game.restart();
}

startBtn!.addEventListener('click', start);
stopBtn!.addEventListener('click', stop);
newGameBtn!.addEventListener('click', restart);
