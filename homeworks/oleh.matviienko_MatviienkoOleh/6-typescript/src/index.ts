const randomSymbol = document.getElementById('randomSymbol') as HTMLDivElement;
const randomInt = document.getElementById('ranodomInt') as HTMLDivElement;
const notification = document.getElementById('notification') as HTMLDivElement;

class Game {
    private score: number = 100;
    private random: number;
    private interval: any;
    
    constructor (
      private randomSymbol: HTMLDivElement,
      private randomInt: HTMLDivElement,
      private notification: HTMLDivElement
    ) {}
  
    start() {
        this.interval = setInterval(this.setChar, 2000);
        this.pressTheButton();
    }

    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    private endGame() {
        if (this.score >= 200) {
          notification.classList.add("victory");
          notification.innerHTML = 'Victory!';
          clearInterval(this.interval);
        }
        if (this.score <= 0) {
          notification.classList.add('gameOver');
          notification.innerHTML = 'Game Over!';
          clearInterval(this.interval);
        }
    }
    
    private setChar() {
        let text: string = '';
        const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        text += possible.charAt(Math.floor(Math.random() * possible.length));
        randomSymbol.innerHTML = text;
        this.endGame();
    }

    private compareSymbols (event:any) {
        if (event.key.toUpperCase() === randomSymbol.innerHTML) {
            randomSymbol.style.backgroundColor = 'green';
            this.random = this.getRandomInt(5, 10);
            this.score += this.random;
            randomInt.innerHTML = '+' + this.random;
          } else {
            randomSymbol.style.backgroundColor = 'red';
            this.random = this.getRandomInt(20, 25);
            this.score -= this.random;
            randomInt.innerHTML = '-' + this.random;
          }
    }

    private pressTheButton() {
        document.addEventListener('keydown', this.compareSymbols);
    }
}

const game = new Game(randomSymbol, randomInt, notification);

game.start();