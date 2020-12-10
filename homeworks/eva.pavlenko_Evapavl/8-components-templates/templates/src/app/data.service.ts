import { Injectable } from '@angular/core';
import { Image } from './image';
import { Observable, of } from "rxjs";
import { IMAGES } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  images: Image[] | [] = [];

  constructor() {}

  getImages(): Observable<Image[]> {
    return of(IMAGES);
  }
}
