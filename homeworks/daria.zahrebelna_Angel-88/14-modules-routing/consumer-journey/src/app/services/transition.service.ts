import {Injectable} from '@angular/core';
import {Journey} from "../models";
import {JOURNEYS} from "../mocks";

@Injectable({
    providedIn: 'root'
})
export class TransitionService {
    journey: string[] = [];
    journeys: Journey[] = JOURNEYS;

    constructor() {
    }

    checkTransition(url: string): void {
        this.journey.push(url);
        let res = this.journeys.every((journeysElem) => {
            if (JSON.stringify(journeysElem.journey.slice(0, this.journey.length)) === JSON.stringify(this.journey)) {
                if (this.journey.length === journeysElem.journey.length) {
                    console.log(journeysElem.message);
                    this.journey = [];
                }
                return false;
            }
            return true;
        });
        if (res) {
            this.journey = [];
        }
    }
}

