import './styles/style.css'
import './images/btn-bg2.png';

const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeScoreElement = document.querySelector('[data-cube]') as HTMLDivElement;
const keyElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const cubeElement = document.querySelector('[data-key]') as HTMLParagraphElement;
const progressBarLeftElement = document.querySelector('[data-progress-bar="left"]') as HTMLDivElement;
const progressBarRightElement = document.querySelector('[data-progress-bar="right"]') as HTMLDivElement;
const cubeResultElement = document.querySelector('[data-cube-result]') as HTMLParagraphElement;
const startButton = document.querySelector('[data-game="start"]') as HTMLButtonElement;
const endButton = document.querySelector('[data-game="end"]') as HTMLButtonElement;
const reloadButton = document.querySelector('[data-game="reload"]') as HTMLButtonElement;
const timeElement = document.querySelector('[data-game="time"]') as HTMLDivElement;

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;
    private base : string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    private eventHappend :boolean = false;
    private timerInterval : any = null;
    private timerTime : any = null;

    constructor(
        private scoreElement :HTMLHeadingElement,
        private cubeScoreElement :HTMLDivElement,
        private keyElement :HTMLDivElement,
        private cubeElement :HTMLParagraphElement,
        private progressBarLeftElement :HTMLDivElement,
        private progressBarRightElement :HTMLDivElement,
        private cubeResultElement :HTMLParagraphElement,
        private startButton :HTMLButtonElement,
        private endButton :HTMLButtonElement,
        private reloadButton :HTMLButtonElement,
        private timeElement :HTMLDivElement,) {
    }

    protected start() :void{
        this.scoreElement.textContent = this.score.toString();
        this.cubeElement.textContent = this.currentKey;
        this.cubeScoreElement.style.width = `${this.score}px`;
        this.cubeScoreElement.style.height = `${this.score}px`;
        this.startKeysInterval();
        this.eventListener();
    }

    protected getRandomInteger(min:number, max:number) :number {
        return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    }

    protected startKeysInterval() :void {
        this.timerInterval = setInterval(() => {
            if (Number(this.scoreElement.textContent) === 0) {
                this.stopGame();
                return;
            }

            this.cubeElement.textContent = this.base[this.getRandomInteger(0, this.base.length - 1)];
            this.progresBarAction();
            this.timeAction();

            const durationHandMAde = setTimeout(() => {
                if (this.eventHappend || Number(this.scoreElement.textContent) === 0) {
                    clearTimeout(durationHandMAde);
                    this.eventHappend = false;
                } else {
                    this.setScore(this.getRandomInteger(10, 15), "subtract");
                }
            }, this.interval);
        }, this.interval);
    }

    protected progresBarAction() :void {
            let width = 1;

            const timer = setInterval(()=> {
                if (width >= 50) {
                    clearInterval(timer);
                    width = 0;
                } else {
                    width++;
                    this.progressBarLeftElement.style.width = `${width}%`;
                    this.progressBarRightElement.style.width = `${width}%`;
                }
            }, 30);
    }

    protected timeAction() :void {
        let startValue = this.interval / 1000;

        const timer = () => {
            if (Number(this.scoreElement.textContent) === 0) {
                this.stopGame();
                this.timeElement.textContent = '';
                return;
            }
            if (startValue === 0) {
                startValue = 1;
            } else {
                startValue--;
            }
            this.timeElement.textContent = startValue.toString();
        };

        timer();
        this.timerTime = setInterval(timer, this.interval / 2);
    }

    protected setScore(score:number, flag:string) :void {

        const changeStyle = (flag:string) => {
            switch (flag) {
                case "add":
                    this.cubeScoreElement.style.width = Number(this.getCssStyle('width')) + Number(score) + "px";
                    this.cubeScoreElement.style.height = Number(this.getCssStyle('height')) + Number(score) + "px";
                    break;
                case "subtract":
                    this.cubeScoreElement.style.width = (Number(this.getCssStyle('width')) - Number(score)) + "px";
                    this.cubeScoreElement.style.height = (Number(this.getCssStyle('height')) - Number(score)) + "px";
                    break;
                default:
                    break;
                }
            };

            switch (flag) {
                case "add":
                    this.removeClass();
                    this.cubeResultElement.textContent = `+${score}`;
                    this.scoreElement.textContent = (Number(this.scoreElement.textContent) + Number(score)).toString();
                    changeStyle("add");
                    this.deletePop();
                    this.checkResult();
                    break;
                case "subtract":
                    this.removeClass();
                    this.cubeResultElement.textContent = `-${score}`;
                    this.scoreElement.textContent = (Number(this.scoreElement.textContent) - Number(score)).toString();
                    changeStyle("subtract");
                    this.deletePop();
                    this.checkResult();
                    break;
                default:
                    break;
                }
    }

    protected deletePop() :void{
        setTimeout(() => {
            this.cubeResultElement.classList.add("hidden");

            if (this.keyElement.classList.contains('green')) {
                this.keyElement.classList.remove("green")
            } else if (this.keyElement.classList.contains('red')) {
                this.keyElement.classList.remove("red");
            }
        }, 1000);
    };

    protected removeClass() :void {
        this.cubeResultElement.classList.remove("hidden");
    };

    protected getCssStyle(flag:string) :string {
        let digitOfStyle : string = ''

        switch (flag) {
            case 'width':
                let getElementCssWidth = window.getComputedStyle(this.cubeScoreElement);
                const getWidthElement = getElementCssWidth.getPropertyValue("width");
                digitOfStyle = getWidthElement.replace("px", "");
                break;
            case 'height':
                let getElementCssHeight = window.getComputedStyle(this.cubeScoreElement);
                const getHeightElement = getElementCssHeight.getPropertyValue("height");
                digitOfStyle = getHeightElement.replace("px", "");
                break;
            default:
                break;
        }

        return digitOfStyle;
    }

    protected checkResult() :void {
        if (Number(this.scoreElement.textContent) <= 0) {
            this.cubeElement.textContent = this.currentKey;
            this.scoreElement.textContent = String(0);
            console.log("You are lose!");
            this.stopGame();
        } else if (Number(this.scoreElement.textContent) >= 200) {
            console.log("You are win!");
            this.stopGame();
        }
    }

    protected eventListener() :void{
        document.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        document.addEventListener("keydown", (e) => {
            if (e.code === this.addKeyWord(this.cubeElement.textContent)()) {
                this.setScore(this.getRandomInteger(5, 10), "add");
                this.keyElement.classList.add("green");
                this.eventHappend = true;
            } else {
                this.setScore(this.getRandomInteger(20, 25), "subtract");
                this.keyElement.classList.add("red");
                this.eventHappend = true;
            }
        });

        // document.addEventListener("click", (e) => {
        //     if (!(e.target instanceof HTMLButtonElement)) {
        //         return;
        //     } else {
        //         const attributes = e.target.dataset.game;
        //         if (attributes === "start") this.startGame();
        //         if (attributes === "end") this.stopGame();
        //         if (attributes === "reload") this.reloadGame();
        //     }
        // });
    }

    protected addKeyWord(keyboardKey:string | null) :any {
        const word = "Key";
        return function () :string{
            return word + keyboardKey;
        };
    }

    public startGame() :void {
        this.startButton.setAttribute("disabled", "true");
        this.endButton.removeAttribute("disabled");
        this.reloadButton.setAttribute("disabled", "true");
        this.start();
    }

    public stopGame() :void {
        this.startButton.removeAttribute("disabled");
        this.endButton.setAttribute("disabled", "true");
        this.reloadButton.removeAttribute("disabled");
        this.cubeElement.textContent = this.currentKey;
        this.scoreElement.textContent = String(0);
        clearInterval(this.timerInterval);
        clearInterval(this.timerTime);
    }

    public reloadGame() :void {
        this.startButton.setAttribute("disabled", "true");
        this.endButton.removeAttribute("disabled");
        this.cubeScoreElement.style.width = `${this.score}px`;
        this.cubeScoreElement.style.height = `${this.score}px`;
        this.start();
    }

}

const game = new Game(scoreElement ,cubeScoreElement, keyElement, cubeElement ,progressBarLeftElement, progressBarRightElement ,cubeResultElement ,startButton ,endButton ,reloadButton ,timeElement);

startButton.addEventListener('click', (e)=> {
    game.startGame()
})

endButton.addEventListener('click', (e)=> {
    game.stopGame()
})

reloadButton.addEventListener('click', (e)=> {
    game.reloadGame()
})
