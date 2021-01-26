import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor() { }

  go(str: string): void {
    console.log(str);
  }
}
