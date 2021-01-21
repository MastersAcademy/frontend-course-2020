import { Injectable } from '@angular/core';
import { TENDS } from '../const/tends';

@Injectable({
    providedIn: 'root'
})
export class TransitionHistoryService {

    private journey: string[] = [];

    constructor() { }

    public setTransitionHistory(pathTransition: string): void {
        this.journey.push(pathTransition);
    }

    private clearJourney(): void {
        this.journey = [];
    }

    public userTends(): void {
        const lengthTransition: number = this.journey.length;
        const indedxTends = TENDS.findIndex(el => el.journey.slice(0, lengthTransition).join() === this.journey.join());
        if (indedxTends >= 0) {
            if (TENDS[indedxTends].journey.length === lengthTransition) {
                console.log(TENDS[indedxTends].message);
                this.clearJourney();
            };
        } else {
            const lastTransition: string = this.journey[this.journey.length - 1];
            this.clearJourney();
            this.setTransitionHistory(lastTransition);
        };
    }
}
