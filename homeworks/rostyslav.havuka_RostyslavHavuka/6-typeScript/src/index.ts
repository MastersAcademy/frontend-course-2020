const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLInputElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;
const keyStart = document.querySelector('[data-key-start]') as HTMLButtonElement
const keyStop = document.querySelector('[data-key-stop]') as HTMLButtonElement
const keyAgain = document.querySelector('[data-key-again]') as HTMLButtonElement

class Game {
  private currentKey: string = '';
  private score: number = 100;
  private interval: number = 2000;
  private intervalId: NodeJS.Timeout;
  private intervalStatusBarId: NodeJS.Timeout;
  private gameState: boolean = false;
  private timerProgressBar: number = 0;
  private width: number;

  constructor(
    private scoreElement: HTMLHeadingElement,
    private cubeScoreElement: HTMLDivElement,
    private keyElement: HTMLInputElement,
    private cubeElement?: HTMLDivElement,
    private progressBarElement?: HTMLDivElement,
  ) { }

  start() {
    window.addEventListener('load', this.startKeysInterval())

    this.subscribeOnKeyPress()

    keyStart.addEventListener('click', (): any => {
      if (this.gameState === false) {
        this.width = 1;
        this.progressBar();
        this.progressBarElement.classList.remove('hidden')
        clearInterval(this.intervalId)
        this.intervalId = setInterval(() => {
          this.subScoreTimer(this.score)
          this.sizeDown()
          this.width = 1;
          this.progressBar();
        }, 3000);
      }
      this.gameState = true
    })

    keyStop.addEventListener('click', (): any => {
      this.gameState = false;
      this.progressBarElement.classList.add('hidden')
      clearInterval(this.intervalStatusBarId)
      this.timerProgressBar = 0;
      this.width = 99;
      clearInterval(this.intervalId)
      alert('your Score:' + this.score)
      this.score = 100;
      cubeScoreElement.innerText = this.score.toString()
      this.scoreElement.innerText = '';
    })

    keyAgain.addEventListener('click', (): any => {
      if (this.gameState === true) {
        this.score = 100;
        this.width = 1;
        this.progressBar();
        cubeScoreElement.innerText = this.score.toString()
        this.scoreElement.innerText = '';
        clearInterval(this.intervalId)
        this.intervalId = setInterval(() => {
          this.subScoreTimer(this.score)
          this.sizeDown()
          this.width = 1;
          this.progressBar();
        }, 3000);
        this.gameState = true
      }
    })
  }

  private startKeysInterval(): any {
    let possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    for (var i = 0; i < 1; i++)
      this.currentKey = possible.charAt(Math.floor(Math.random() * possible.length));
    keyElement.value = this.currentKey.toUpperCase()
  }

  private trueGame(): void {
    if (this.gameState === true) {
      this.startKeysInterval()
      this.addScore()
      this.setNewInterval()
      this.sizeUp()
      clearInterval(this.intervalStatusBarId)
      this.width = 1;
      this.timerProgressBar = 0;
      this.progressBar()
    } else {
      alert('Please press "Start"')
    }
  }

  private falseGame(): void {
    if (this.gameState === true) {
      this.subScore()
      this.startKeysInterval()
      this.setNewInterval()
      this.sizeDown()
      clearInterval(this.intervalStatusBarId)
      this.width = 1;
      this.timerProgressBar = 0;
      this.progressBar()
    } else {
      alert('Please press "Start"')
    }
  }

  private setKey(e: any): void {
    if (e.key === keyElement.value.toLowerCase()) {
      this.trueGame()
    }
    else {
      this.falseGame()
    }
  }

  private setNewInterval(): void {
    if (this.gameState === true) {
      clearInterval(this.intervalId)
      this.intervalId = setInterval(() => {
        this.subScoreTimer(this.score)
        this.sizeDown()
        clearInterval(this.intervalStatusBarId)
        this.width = 1;
        this.timerProgressBar = 0;
        this.progressBar()
      }, 3000);
    }
  }

  private addScore(): void {
    let rndom: number = this.randomNumber(5, 10)
    this.score = this.score + rndom
    cubeScoreElement.innerText = this.score.toString()
    scoreElement.innerText = `+${rndom}`
  }

  private subScore(): void {
    let rndom: number = this.randomNumber(20, 25)
    this.score = this.score - rndom
    cubeScoreElement.innerText = this.score.toString()
    scoreElement.innerText = `-${rndom}`
  }

  private subScoreTimer(score: number): void {
    let rndom: number = this.randomNumber(10, 15)
    this.score = this.score - rndom
    this.finishGame()
    cubeScoreElement.innerText = this.score.toString()
    scoreElement.innerText = `-${rndom}`
  }

  private subscribeOnKeyPress(): void {
    window.addEventListener('keypress', (e) => {
      this.setKey(e)
      this.finishGame()
    })
  }

  private randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private sizeUp(): void {
    let obj: HTMLElement = document.getElementById("box");
    let width: number = parseInt(obj.style.width);
    let height: number = parseInt(obj.style.height);
    obj.style.width = (width + 3) + "px";
    obj.style.height = (height + 3) + "px";
  }

  private sizeDown(): void {
    let obj: HTMLElement = document.getElementById("box");
    let width: number = parseInt(obj.style.width);
    let height: number = parseInt(obj.style.height);
    obj.style.width = (width - 2) + "px";
    obj.style.height = (height - 2) + "px";
  }

  private progressBar(): void {
    if (this.timerProgressBar == 0) {
      this.timerProgressBar = 1;
      const element: any = document.getElementsByClassName('myBar');
      this.width = 1;
      this.intervalStatusBarId = setInterval(() => {
        if (this.width >= 100) {
          clearInterval(this.intervalStatusBarId)
          this.timerProgressBar = 0;
        } else {
          this.width++;
          for (const elem of element) {
            elem.style.width = this.width + "%";
          }
        }
      }, 30);
    }
  }

  private finishGame(): void {
    if (this.score >= 200) {
      alert('You WON! Your Score: 200')
      this.score = 100;
      this.width = 1;
      this.progressBar();
      cubeScoreElement.innerText = this.score.toString()
      this.scoreElement.innerText = '';
      clearInterval(this.intervalId)
      this.intervalId = setInterval(() => {
        this.subScoreTimer(this.score)
        this.sizeDown()
        this.width = 1;
        this.progressBar();
      }, 3000);
      this.gameState = true
    }
    if (this.score <= 0) {
      alert('Try Again! Your Score:0')
      this.score = 100;
      this.width = 1;
      this.progressBar();
      cubeScoreElement.innerText = this.score.toString()
      this.scoreElement.innerText = '';
      clearInterval(this.intervalId)
      this.intervalId = setInterval(() => {
        this.subScoreTimer(this.score)
        this.sizeDown()
        this.width = 1;
        this.progressBar();
      }, 3000);
      this.gameState = true
    }
  }
}

const game = new Game(scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement);

game.start();