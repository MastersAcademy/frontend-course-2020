const headCubNum = document.querySelector('.head-cub-num') as HTMLHeadingElement;
const cube = document.querySelector('.cube') as HTMLDivElement;
const cubeScore = document.querySelector('.cube-score') as HTMLDivElement;
const cubeNum = document.querySelector('.cube-num') as HTMLDivElement;
const cubeScoreLetters = document.querySelector('.cube-score-letters') as HTMLDivElement;
const myBar = document.querySelector('.myBar') as HTMLDivElement;
const progressBar = document.querySelector('.myProgress') as HTMLDivElement;

const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]

class Game {
  private score: number = 100;
  private currentKey: string = '';
  private interval: number = 2000;
  private sign: string = "+";

  constructor(
    private headCubNum: HTMLHeadingElement,
    private cubeScore: HTMLDivElement,
    private cubeNum: HTMLDivElement,
    private cube: HTMLDivElement,
  ) {

  }

  start() {
    this.autoSaveInterval();
    this.subscribeOnKeyPress();
  }

    private startKeysInterval = setInterval(() => {
        this.cubeScore.style.background = '#eee';
        this.setChar();
        this.setScore(this.score);
        this.progressBar();
    }, this.interval);

    private autoSaveInterval() {
        this.startKeysInterval
    }


  private setScore(score: number) {
    if (score >= 200) {
        alert('player win');
        clearInterval(this.startKeysInterval);
    }
    if (score <= 0) {
        alert('player lost');
        clearInterval(this.startKeysInterval);
    }
  }

  private progressBar() {
    let i = 0;
    if (i == 0) {
        i = 1;
        let width = 1;
        let id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
              clearInterval(id);
              i = 0;
            } else {
              width++;
              myBar.style.width = width + "px";
            }
          }
        }
    }


  private setKey(key: string) {
        let v = 0;
        if (key == this.currentKey) {
            cubeScore.style.background = '#228B22';
            v = this.randomNumberAdd(5, 10)
            this.sign = "+"
        } else {
            cubeScore.style.background = '#F00';
            v = this.randomNumberAdd(20, 25)
            this.sign = "-"
        }
        this.addScore(v);
        cubeNum.innerHTML = String(this.sign + v);

        cubeNum.classList.add("hidden");
        setTimeout(() => {
            cubeNum.classList.remove("hidden");
        }, 1500);
  }

  private addScore(score: number) {
      if (this.sign == "+") {
        this.score += score;
      } else {
        this.score -= score;
      }
    headCubNum.innerHTML = String(this.score);
  }

  private subscribeOnKeyPress() {
    window.addEventListener('keydown', (e) => {
        this.setKey(e.key.toUpperCase());
    })
  }

  private randomNumberAdd(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  private setChar() {
    this.currentKey = characters[Math.floor(Math.random() * characters.length)];
    cubeScoreLetters.innerHTML = this.currentKey;
  }

}

const game = new Game(headCubNum, cubeScore, cube, cubeNum);

game.start();


