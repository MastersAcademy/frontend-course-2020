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
const paranjaElement = document.querySelector('[data-game="paranja"]') as HTMLDivElement;
const resultElement = document.querySelector('[data-game="result"]') as HTMLParagraphElement;

class Game {
    private score: number = 100;
    private currentKey: string = '';
    private interval: number = 2000;
    private base : string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    private eventHappend :boolean = false;
    protected timerInterval : any = null;
    protected timerTime : any = null;

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
        private timeElement :HTMLDivElement,
        private paranjaElement: HTMLDivElement,
        private resultElement : HTMLParagraphElement,) {
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
                } else {
                    this.setScore(this.getRandomInteger(10, 15), "subtract");
                }

                this.eventHappend = false;

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
        let digitOfStyle : string = '';

        switch (flag) {
            case 'width':
                const getElementCssWidth = window.getComputedStyle(this.cubeScoreElement);
                const getWidthElement = getElementCssWidth.getPropertyValue("width");
                digitOfStyle = getWidthElement.replace("px", "");
                break;
            case 'height':
                const getElementCssHeight = window.getComputedStyle(this.cubeScoreElement);
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
            this.showResult(false);
            this.stopGame();
        } else if (Number(this.scoreElement.textContent) >= 200) {
            this.showResult(true);
            this.stopGame();
        }
    }

    protected showResult(flag:boolean) :void{
        if (flag) this.resultElement.textContent = 'You are win!';
        else this.resultElement.textContent = 'You are lose!';
        this.paranjaElement.classList.remove('hidden');

    }

    protected eventListener() :void {

        document.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        document.addEventListener("keydown", (e) => {
            if (this.eventHappend) return;

            if (e.code === this.addKeyWord(this.cubeElement.textContent)()) {
                this.setScore(this.getRandomInteger(5, 10), "add");
                this.keyElement.classList.add("green");
                } else {
                    this.setScore(this.getRandomInteger(20, 25), "subtract");
                    this.keyElement.classList.add("red");
                }

            this.eventHappend = true;

        });

        document.addEventListener('click', (e) => {
            if (!(e.target instanceof HTMLButtonElement)) {
                return;
            } else {
                const attributes = e.target.dataset.game;
                if (attributes === "close") this.close();
            }
        })
    }

    protected addKeyWord(keyboardKey:string | null) :any {
        const word = "Key";
        return function () :string {
            return word + keyboardKey;
        };
    }

    protected close() :void{
        this.paranjaElement.classList.add('hidden');
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
        clearInterval(this.timerInterval);
        clearInterval(this.timerTime);
        this.cubeElement.textContent = this.currentKey;
        this.scoreElement.textContent = '';
    }

    public reloadGame() :void {
        this.startButton.setAttribute("disabled", "true");
        this.endButton.removeAttribute("disabled");
        this.cubeScoreElement.style.width = `${this.score}px`;
        this.cubeScoreElement.style.height = `${this.score}px`;
        this.start();
    }

}

const game = new Game(scoreElement ,cubeScoreElement, keyElement, cubeElement ,progressBarLeftElement, progressBarRightElement ,cubeResultElement ,startButton ,endButton ,reloadButton ,timeElement,paranjaElement,resultElement);

startButton.addEventListener('click', (e)=> {
    game.startGame()
})

endButton.addEventListener('click', (e)=> {
    game.stopGame()
})

reloadButton.addEventListener('click', (e)=> {
    game.reloadGame()
})
