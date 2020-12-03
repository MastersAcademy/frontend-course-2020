export class ProgressBar {
    private width: number = 1;
    private intervalId?: number;

    constructor(private progressBarElement: HTMLDivElement) {}

    start() {
        this.width = 0;
        this.reset();
        this.intervalId = setInterval(this.move.bind(this), 20) as any as number;
    }

    private move() {
        if (this.width < 100) {
            this.width++;
            this.progressBarElement.style.width = this.width + "%";
        } else {
            this.reset();
        }
    }

    private reset() {
        clearInterval(this.intervalId);
        this.intervalId = 0;
    }
}
