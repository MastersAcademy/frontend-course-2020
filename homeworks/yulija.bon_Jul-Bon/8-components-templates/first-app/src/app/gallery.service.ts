import { Injectable } from '@angular/core';
import {Image} from './images';
import {IMAGES} from "./data-images";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class GalleryService {

  constructor() { }

  // public getImages(): Image[] {
  //   return IMAGES;
  // }

  getImages(): Observable<Image[]> {
    return of(IMAGES);
  }
}
