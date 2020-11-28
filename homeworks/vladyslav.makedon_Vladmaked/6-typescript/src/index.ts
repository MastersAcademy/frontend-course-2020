const scoreElement = document.querySelector('[data-score]') as HTMLHeadingElement;
const cubeScoreElement = document.querySelector('[data-cube-score]') as HTMLDivElement;
const keyElement = document.querySelector('[data-key]') as HTMLDivElement;
const progressBarElement = document.querySelector('[data-progress-bar]') as HTMLDivElement;
const messageElement = document.querySelector('[data-mesage]') as HTMLDivElement;

import {fromEvent, Observable, Subscription} from 'rxjs';

class Game {
  private totalScore: number = 100;
  private randomKey: string = '';
  private characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  private interval: number = 2000;
  private keyDown: string = '';
  private isTrueKey: boolean = false;
  private fromEventSub: Observable<Event>;
  private sub: Subscription;
  private randomAddScore: number = 0;
  private randomDecreaseScore: number = 0;
  private stateInterval: NodeJS.Timeout;

  constructor(
    private scoreElement: HTMLHeadingElement,
    private cubeScoreElement: HTMLDivElement,
    private keyElement: HTMLDivElement,
    private progressBarElement?: HTMLDivElement,
    private messageElement?: HTMLDivElement
  ) {
  }

  start() {
    this.setScore(this.totalScore)
    this.renderScore(this.totalScore);
    this.subscribeOnKeyPress();
    this.setNewTour();
    this.startKeysInterval();
  }

  private setNewTour(): void {
    if (this.totalScore <= 0) {
      this.stopKeysInterval();
      this.messageElement.innerText = 'You lose!';
      this.messageElement.style.display = 'flex';
      this.sub.unsubscribe();
      return;
    } else if (this.totalScore >= 200) {
      this.messageElement.innerText = 'You win!';
      this.messageElement.style.display = 'flex';
      this.sub.unsubscribe();
      this.stopKeysInterval();
      return;
    }
    this.setBackgroundColorKey('inherit');
    this.setKey();
    this.renderKey(this.randomKey);
    this.startProgressBar(this.progressBarElement);
    setTimeout(() => {
      if (this.keyDown === '') {
        this.randomDecreaseScore = Game.getRandomDecreaseScore();
        this.decreaseScore(this.randomDecreaseScore);
        this.cubeScoreElement.innerText = `- ${this.randomDecreaseScore.toString()}`;
      }
      this.keyDown = ''
    }, this.interval - 5)
  }

  private startKeysInterval(): void {
    this.stateInterval = setInterval(async () => {
      this.setNewTour()
    }, this.interval)
  }

  private stopKeysInterval(): void {
    clearInterval(this.stateInterval)
  }

  private setScore(totalScore: number): void {
    this.totalScore = totalScore;
  }

  private renderScore(totalScore: number): void {
    this.scoreElement.innerText = totalScore.toString();
  }

  private setBackgroundColorKey(color: string): void {
    this.keyElement.style.backgroundColor = color;
  }

  private setKey(): void {
    this.randomKey = Game.getRandomKey(this.characters)
  }

  private static getRandomKey(characters: string): string {
    return characters.charAt(Math.floor(Math.random() * characters.length)).toUpperCase();
  }

  private renderKey(key: string): void {
    this.keyElement.innerText = key;
  }

  private startProgressBar(progressBarElement: HTMLDivElement): void {
    let width = 0;
    const id = setInterval(() => {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        progressBarElement.style.width = width + "%";
      }
    }, this.interval / 100);
  }

  private static getRandomAddScore(): number {
    return Math.floor((Math.random() * 5) + 25);
  }

  private static getRandomDecreaseScore(): number {
    return Math.floor((Math.random() * 5) + 20);
  }

  private addScore(score: number): void {
    this.totalScore += score;
    this.renderScore(this.totalScore);
  }

  private decreaseScore(score: number): void {
    this.totalScore -= score;
    this.renderScore(this.totalScore);
  }

  private subscribeOnKeyPress(): void {
    this.fromEventSub = fromEvent(window, 'keydown');
    this.sub = this.fromEventSub.subscribe((keyboardEvent: KeyboardEvent) => {
      if (this.keyDown === '') {
        this.keyDown = keyboardEvent.key.toUpperCase();
        this.isTrueKey = this.randomKey === this.keyDown;
        this.setBackgroundColorKey(this.isTrueKey ? 'green' : 'brown')
        this.randomAddScore = Game.getRandomAddScore();
        this.randomDecreaseScore = Game.getRandomDecreaseScore();
        if (this.isTrueKey) {
          this.addScore(this.randomAddScore);
          this.cubeScoreElement.innerText = `+ ${this.randomAddScore.toString()}`;
        } else {
          this.decreaseScore(this.randomDecreaseScore);
          this.cubeScoreElement.innerText = `- ${this.randomDecreaseScore.toString()}`;
        }
      }
    })
  }
}

const game = new Game(scoreElement, cubeScoreElement, keyElement, progressBarElement, messageElement);

game.start();
