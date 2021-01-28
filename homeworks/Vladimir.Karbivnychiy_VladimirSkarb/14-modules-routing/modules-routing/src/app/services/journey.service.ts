import {Injectable} from '@angular/core';

import {dataJorney} from "../mocks/data";
import {Journey} from "../models/journey";

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  jorney: string[] = [];
  listJorney: Array<Journey> = dataJorney;

  initJorney(url: string) {
    if (url === '/') return
    this.jorney.push(url);
    const routerStr = this.jorney.toString();
    for (let i = 0; i < this.listJorney.length; i++) {
      if (routerStr.includes(this.listJorney[i].journey.toString())) {
        console.log(this.listJorney[i].message);
        this.jorney = []
      }
    }

  }
}
