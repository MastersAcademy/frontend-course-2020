import { Injectable } from '@angular/core';
import { Image } from './models/image';
import { Observable, of } from "rxjs";
import { IMAGES } from './mocks/data';

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
