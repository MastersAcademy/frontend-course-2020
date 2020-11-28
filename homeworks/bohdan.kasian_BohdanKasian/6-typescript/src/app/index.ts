// Your code

window.addEventListener('load', () => {
  const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
  const cubeElement = document.querySelector('[data-cube]') as HTMLDivElement;
  const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLParagraphElement;
  const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
  const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;
  const endGameElem = document.querySelector('[data-cube-end-game]') as HTMLDivElement;

  const startBtnElement = document.querySelector('.start') as HTMLParagraphElement;
  const restartBtnElement = document.querySelector('.restart') as HTMLParagraphElement;
  const endBtnElement = document.querySelector('.end') as HTMLParagraphElement;

  class Game {
    // number because Node is an error (I attach a screen)
    private letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    private startInterval!: number;

    constructor(
      private score: number,
      private currentKey: number,
      private currentKeyPress: number,
      private interval: number,
      private scoreElement: HTMLHeadingElement,
      private cubeScoreElement: HTMLDivElement,
      private keyElement: HTMLDivElement,
      private cubeElement: HTMLDivElement,
      private progressBarElement: HTMLDivElement,
      private endGameElem: HTMLDivElement
    ) {}

    start() {
      this.endGameElem.innerText = '';
      this.scoreElement.innerText = String(this.score);
      // @ts-ignore need to build a project
      this.startInterval = setInterval(() => this.startKeysInterval(), this.interval);

      window.addEventListener('keydown', (e: KeyboardEvent) => {
        this.currentKeyPress = e.key.toUpperCase().charCodeAt(0);

        this.subscribeOnKeyPress();
      });
    }

    public end = () => {
      clearInterval(this.startInterval);
      this.endGameElem.innerText = 'press start game';
    };

    private startKeysInterval = () => {
      let counterProgress: number = 0;
      let keyToPress: number = this.currentKeyPress;
      const currentKeyRandom: string = this.letters[Math.floor(Math.random() * this.letters.length)].toUpperCase();

      this.progressBarElement.style.width = '0%';
      this.keyElement.innerText = currentKeyRandom;
      this.currentKey = currentKeyRandom.charCodeAt(0);

      const progress = setInterval(() => {
        counterProgress++;
        this.progressBarElement.style.width = `${Number(this.progressBarElement.style.width.slice(0, -1)) + 1}%`
        if (counterProgress === 100) {
          clearInterval(progress);
          if (keyToPress === this.currentKeyPress) {
            this.removeScore(Math.floor(Math.random() * (15 - 10) + 10))
          }
        }
      }, this.interval / 100);

    };

    private domJobs = (point: number) => {
      this.scoreElement.innerText = String(this.score);
      this.cubeElement.style.width = `${this.score}px`;
      this.cubeElement.style.height = `${this.score}px`;
      this.cubeScoreElement.innerText = String(point);
    };

    private addScore(point: number) {
      this.score += point;
      this.domJobs(+point);
    }

    private removeScore(point: number) {
      this.score -= point;
      this.domJobs(-point);
    }

    private subscribeOnKeyPress = () => {
      if (this.currentKey === this.currentKeyPress) {
        const randomAddScore: number = Math.floor(Math.random() * (10 - 5) + 5);
        clearInterval(this.startInterval);
        this.addScore(randomAddScore);
        // @ts-ignore need to build a project
        this.startInterval = setInterval(this.startKeysInterval, this.interval);
        this.startKeysInterval();

      } else {
        const randomRemoveScore: number = Math.floor(Math.random() * (25 - 20) + 20);
        clearInterval(this.startInterval);
        this.removeScore(randomRemoveScore);
        // @ts-ignore need to build a project
        this.startInterval = setInterval(this.startKeysInterval, this.interval);
        this.startKeysInterval();
      }
      this.endGame()
    };

    private endGame() {
      if (this.score >= 200) {
        document.body.style.fontSize = '120px';
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.background = 'red';
        document.body.innerHTML = 'YOU DIED ))))))))';
      } else if (this.score <= 0) {
        document.body.style.fontSize = '120px';
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.background = 'green';
        document.body.innerHTML = 'YOU DIED';
      }
    }
  }

  const game = new Game(100, 0, 0, 2000, scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement, endGameElem);
  startBtnElement.addEventListener('click', () => game.start());
  restartBtnElement.addEventListener('click', () =>
    new Game(100, 0, 0, 2000, scoreElement, cubeScoreElement, keyElement, cubeElement, progressBarElement, endGameElem).start()
  );
  endBtnElement.addEventListener('click', () => game.end());
});
