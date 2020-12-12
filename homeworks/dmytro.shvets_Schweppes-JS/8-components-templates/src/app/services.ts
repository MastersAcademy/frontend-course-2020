import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { data } from './gallery/data';

@Injectable({
  providedIn: 'root'
})
export class Service {

  public imageLink = new BehaviorSubject<string>(data[0].urls.regular);
  currentLink = this.imageLink.asObservable();

  constructor() { }

  changingLink(link: string) {
    this.imageLink.next(link);
  }
}
