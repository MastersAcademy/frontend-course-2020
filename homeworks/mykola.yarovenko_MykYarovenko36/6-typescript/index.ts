const currentScoreEl = document.querySelector<HTMLParagraphElement>('[data-current-points]');
const plusScoreEl = document.querySelector<HTMLParagraphElement>('[data-plus-points]');
const minusScoreEl = document.querySelector<HTMLParagraphElement>('[data-minus-points]');
const gameKeyEl = document.querySelector<HTMLParagraphElement>('[data-game__key]');
const playBtnEl= document.querySelector<HTMLButtonElement>('[data-btn-play]');
const stopBtnEl = document.querySelector<HTMLButtonElement>('[data-btn-stop]');
const clearBtnEl = document.querySelector<HTMLButtonElement>('[data-btn-clear-score]');
const desktopKeyboardElements = document.querySelectorAll('[date-desktop-keyboard-key]') as NodeList;
const timerLoaderEl = document.querySelector<HTMLDivElement>('.loader_point');

class Game {
    private score: number = 100;
    private interval: number = 2000;
    private timeInterval: NodeJS.Timeout;
    private itemKeys: string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    private inputKey: string;

    constructor(
        private playBtn: HTMLButtonElement,
        private stopBtn: HTMLButtonElement,
        private clearBtn: HTMLButtonElement,
        private desktopKeyboard : NodeList,
        private gameKey: HTMLParagraphElement,
        private currentScore: HTMLParagraphElement,
        private plusScore : HTMLParagraphElement,
        private minusScore: HTMLParagraphElement,
        private timerLoader: HTMLDivElement,
    ) {}

    start() {
        this.currentScore.innerText = '' + this.score;
        [this.playBtn, this.stopBtn, this.clearBtn, ].forEach((el) => {
            el.addEventListener('click', (e): void => {
                const targetEl = e.target as HTMLButtonElement;
                if (targetEl.value === 'game-stop') {
                    this.gameStop();
                }
                if (targetEl.value === 'clear-score') {
                    this.scoreClear();
                }
                if (targetEl.value === 'game-start') {
                    this.gameStart();
                }
            });
        });
    }

    private gameStop() {
        [this.playBtn, this.clearBtn].forEach((el) => {
            el.disabled = false;
        });
        clearInterval(this.timeInterval);
        this.timerLoader.style.animation = '';
        this.currentScore.style.boxShadow = '';
    }

    private scoreClear() {
        this.gameKey.innerText = '';
        this.currentScore.innerText = '' + this.score;
    }

    private gameStart() {
        this.subscribeDesktopInput();
        this.subscribeKeyboardInput();
        [this.playBtn, this.clearBtn].forEach((el) => {
            el.disabled = true;
        });
        this.startKeysInterval();
    }

    private startKeysInterval() {
        this.timeInterval = setInterval((): void => {
            this.setKey(this.itemKeys);
            this.inputKey = '';
            this.setGameProgress();
            setTimeout(():void => {
                if (this.inputKey === '') {
                    this.minusPoints();
                }
            }, 1900);
        }, this.interval);
        this.timerLoader.style.animation = '2s infinite slidein';
    }

    private setKey(key: string[]) {
        this.gameKey.innerText = key[Math.floor(Math.random() * key.length)];
    }

    private setPoints():number {
        return Math.floor(Math.random() * 10) + 4;
    }

    private setGameProgress():void {
        const points: number = +this.currentScore.innerText;
        points >= 100 ? this.currentScore.style.boxShadow = '0 0 5px 5px rgb(4, 218, 32)' : this.currentScore.style.boxShadow = '0 0 5px 5px rgb(231, 55, 10)';
    }

    private setGameMessage(text: string) {
        alert(text);
        this.gameStop();
        setTimeout(():void => {
            this.scoreClear();
        }, 1000);
    }

    private plusPoints() {
        const currentPoints: number = +this.currentScore.innerText;
        const plusPoints: number = this.setPoints();
        this.plusScore.innerText = '+' + plusPoints;
        if (currentPoints >= 200) {
            this.setGameMessage('You WIN!');
        } else {
            this.currentScore.innerText = `${currentPoints + plusPoints}`;
        }
        setTimeout(():void => {
            this.plusScore.innerText = '';
        }, 600);
    }

    private minusPoints() {
        const currentPoints: number = +this.currentScore.innerText;
        const minusPoints: number = this.setPoints();
        this.minusScore.innerText = '-' + minusPoints;
        if (currentPoints <= 0) {
            this.setGameMessage('You LOSE!');
        } else {
            this.currentScore.innerText = `${currentPoints - minusPoints}`;
        }
        setTimeout(():void => {
            this.minusScore.innerText = '';
        }, 600);
    }

    private subscribeKeyboardInput() {
        document.addEventListener('keyup', (e: KeyboardEvent) => {
            if (e.key.match(/[a-z]/i) && e.key.toUpperCase() === this.gameKey.innerText) {
                this.plusPoints();
                this.inputKey = e.key.toUpperCase();
            }
            if (e.key.toUpperCase() !== this.gameKey.innerText) {
                this.minusPoints();
                this.inputKey = '';
            }
        })
    }

    private subscribeDesktopInput() {
        this.desktopKeyboard.forEach((el): void => {
            el.addEventListener('click', (e): void => {
                const targetEl = e.target as HTMLParagraphElement;
                this.inputKey = targetEl.innerText;
                targetEl.innerText === this.gameKey.innerText ? this.plusPoints() : this.minusPoints();
                });
        });
    }
}

const game = new Game(playBtnEl, stopBtnEl, clearBtnEl, desktopKeyboardElements, gameKeyEl, currentScoreEl, plusScoreEl, minusScoreEl, timerLoaderEl);
game.start();
