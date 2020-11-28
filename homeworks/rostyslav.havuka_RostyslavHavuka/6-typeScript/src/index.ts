const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLInputElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLElement;
const keyStart = document.querySelector('[data-key-start]') as HTMLButtonElement;
const keyStop = document.querySelector('[data-key-stop]') as HTMLButtonElement;
const keyAgain = document.querySelector('[data-key-again]') as HTMLButtonElement;
const square = document.getElementById("box") as HTMLElement;

class Game {
  private currentKey: string = '';
  private score: number = 100;
  private intervalId: NodeJS.Timeout;
  private intervalStatusBarId: NodeJS.Timeout;
  private gameState: boolean = false;
  private timerProgressBar: number = 0;
  private squareWidth: number;

  constructor(
    private scoreElement: HTMLHeadingElement,
    private cubeScoreElement: HTMLDivElement,
    private keyElement: HTMLInputElement,
    private cubeElement?: HTMLDivElement,
    private progressBarElement?: HTMLElement,
    private square?: HTMLElement,
    private keyStart?: HTMLButtonElement,
    private keyStop?: HTMLButtonElement,
    private keyAgain?: HTMLButtonElement
  ) { }

  start() {
    this.randomKeyInterval()

    this.subscribeOnKeyPress()

    this.keyStart.addEventListener('click', (): void => {
      this.subscribeOnKeyStartClick();
    })

    this.keyStop.addEventListener('click', (): void => {
      this.subscribeOnKeyStopClick();
    })

    this.keyAgain.addEventListener('click', (): void => {
      this.subscribeOnKeyAgainClick();
    })
  }

  private subscribeOnKeyStartClick(): void {
    if (this.gameState === false) {
      this.squareWidth = 1;
      this.progressBar();
      this.progressBarElement.classList.remove('hidden');
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.subScoreTimer(this.score);
        this.sizeDown();
        this.squareWidth = 1;
        this.progressBar();
      }, 3000);
    }
    this.gameState = true;
  }

  private subscribeOnKeyStopClick(): void {
    this.gameState = false;
    this.progressBarElement.classList.add('hidden');
    clearInterval(this.intervalStatusBarId);
    this.timerProgressBar = 0;
    this.squareWidth = 99;
    clearInterval(this.intervalId);
    alert('your Score:' + this.score);
    this.score = 100;
    this.setCubeScore(this.score);
    this.resetScore('');
  }
  private subscribeOnKeyAgainClick(): void {
    if (this.gameState === true) {
      this.score = 100;
      this.squareWidth = 1;
      this.progressBar();
      this.setCubeScore(this.score);
      this.resetScore('');
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.subScoreTimer(this.score);
        this.sizeDown();
        this.squareWidth = 1;
        this.progressBar();
      }, 3000);
      this.gameState = true;
    }
  }
  private randomKeyInterval(): void {
    let possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    for (var i = 0; i < 1; i++)
      this.currentKey = possible.charAt(Math.floor(Math.random() * possible.length));
    keyElement.innerText = this.currentKey.toUpperCase();
  }

  private pressCorrectKey(): void {
    if (this.gameState === true) {
      this.randomKeyInterval();
      this.addScore();
      this.setNewInterval();
      this.sizeUp();
      clearInterval(this.intervalStatusBarId);
      this.squareWidth = 1;
      this.timerProgressBar = 0;
      this.progressBar();
    } else {
      alert('Please press "Start"');
    }
  }

  private pressUncorrectKey(): void {
    if (this.gameState === true) {
      this.subScore();
      this.randomKeyInterval();
      this.setNewInterval();
      this.sizeDown();
      clearInterval(this.intervalStatusBarId);
      this.squareWidth = 1;
      this.timerProgressBar = 0;
      this.progressBar();
    } else {
      alert('Please press "Start"');
    }
  }

  private setKey(key: string): void {
    if (key === keyElement.textContent.toLowerCase()) {
      this.pressCorrectKey();
    } else {
      this.pressUncorrectKey();
    }
  }

  private setNewInterval(): void {
    if (this.gameState === true) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.subScoreTimer(this.score);
        this.sizeDown();
        clearInterval(this.intervalStatusBarId);
        this.squareWidth = 1;
        this.timerProgressBar = 0;
        this.progressBar();
      }, 3000);
    }
  }

  private addScore(): void {
    let rndom: number = this.randomNumber(5, 10)
    this.score = this.score + rndom;
    this.setCubeScore(this.score);
    scoreElement.innerText = `+${rndom}`;
  }

  private subScore(): void {
    let rndom: number = this.randomNumber(20, 25);
    this.score = this.score - rndom;
    this.setCubeScore(this.score);
    scoreElement.innerText = `-${rndom}`;
  }

  private subScoreTimer(score: number): void {
    let rndom: number = this.randomNumber(10, 15);
    this.score = this.score - rndom;
    this.finishGame();
    this.setCubeScore(this.score);
    scoreElement.innerText = `-${rndom}`;
  }

  private subscribeOnKeyPress(): void {
    window.addEventListener('keypress', (key) => {
      this.setKey(key.key);
      this.finishGame();
    })
  }

  private randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private sizeUp(): void {
    let width: number = parseInt(this.square.style.width);
    let height: number = parseInt(this.square.style.height);
    this.square.style.width = (width + 3) + "px";
    this.square.style.height = (height + 3) + "px";
  }

  private sizeDown(): void {
    let width: number = parseInt(this.square.style.width);
    let height: number = parseInt(this.square.style.height);
    this.square.style.width = (width - 2) + "px";
    this.square.style.height = (height - 2) + "px";
  }

  private progressBar(): void {
    if (this.timerProgressBar == 0) {
      this.timerProgressBar = 1;
      this.squareWidth = 1;
      this.intervalStatusBarId = setInterval(() => {
        if (this.squareWidth >= 100) {
          clearInterval(this.intervalStatusBarId);
          this.timerProgressBar = 0;
        } else {
          this.squareWidth++;
          progressBarElement.style.width = this.squareWidth + "%";
        }
      }, 30);
    }
  }

  private finishGame(): void {
    if (this.score >= 200) {
      alert('You WON! Your Score: 200');
      this.subscribeOnKeyAgainClick();
    }
    if (this.score <= 0) {
      alert('Try Again! Your Score:0');
      this.subscribeOnKeyAgainClick();
    }
  }

  private setCubeScore(score: number) {
    return this.cubeScoreElement.innerText = score.toString();
  }

  private resetScore(string: string) {
   return this.scoreElement.innerText = string;
  }
}

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement, square, keyStart, keyStop, keyAgain);

game.start();