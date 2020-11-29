const randomSymbol = document.getElementById('randomSymbol') as HTMLDivElement;
const randomInt = document.getElementById('randomInt') as HTMLDivElement;
const notification = document.getElementById('notification') as HTMLDivElement;

class Game {
    private interval: any;
    
    constructor (
      private score: number,
      private randomSymbol: HTMLDivElement,
      private randomInt: HTMLDivElement,
      private notification: HTMLDivElement
    ) {}
  
    start() {
        this.interval = setInterval(this.setChar.bind(this), 2000);
        this.pressTheButton();
    }

    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    private showEndMessage(message: string) {
          notification.classList.add("endGame");
          notification.innerHTML = message;
          clearInterval(this.interval);
    }

    private endGame() {
        if (this.score >= 200) {
          this.showEndMessage("Victory!");
        }
        if (this.score <= 0) {
          this.showEndMessage("Game Over!");
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
      let random: number = 0;
        if (event.key.toUpperCase() === randomSymbol.innerHTML) {
            randomSymbol.style.backgroundColor = 'green';
            random = this.getRandomInt(5,10);
            this.score += random;
            randomInt.innerHTML = '+' + random;
          } else {
            randomSymbol.style.backgroundColor = 'red';
            random = this.getRandomInt(15,25);
            this.score -= random;
            randomInt.innerHTML = '-' + random;
          }
    }

    private pressTheButton() {
        document.addEventListener('keydown', this.compareSymbols.bind(this));
    }
}

const game = new Game(100, randomSymbol, randomInt, notification);

game.start();