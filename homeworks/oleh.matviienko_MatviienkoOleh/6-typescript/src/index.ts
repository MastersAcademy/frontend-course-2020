const randomSymbol = document.getElementById('randomSymbol') as HTMLDivElement;
const randomInt = document.getElementById('randomInt') as HTMLDivElement;
const notification = document.getElementById('notification') as HTMLDivElement;

class Game {
    private interval: any;
    
    constructor (
      private text: string,
      private key: string,
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
        this.text = '';
        const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.text += possible.charAt(Math.floor(Math.random() * possible.length));
        randomSymbol.innerHTML = this.text;
    }

    private compareSymbols () {
        let random: number = 0;
        if(this.text) {
            if (this.key === this.text) {
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
    }

    private takeKeyFromTheKeyborde(event: any) {
        this.key = event.key.toUpperCase();
        this.compareSymbols();
        clearInterval(this.interval);
        this.setChar();
        this.interval = setInterval(this.setChar.bind(this), 2000);
        this.endGame(); 
    }

    private pressTheButton() {
        document.addEventListener('keydown', this.takeKeyFromTheKeyborde.bind(this));
    }
}

const game = new Game("", "", 100, randomSymbol, randomInt, notification);

game.start();