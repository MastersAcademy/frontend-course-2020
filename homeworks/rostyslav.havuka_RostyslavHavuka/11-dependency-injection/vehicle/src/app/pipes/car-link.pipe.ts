import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model';

@Pipe({
  name: 'carLink'
})
export class CarLinkPipe implements PipeTransform {

  transform(car: Car): string {
    return `https://www.google.com/search?q=${encodeURIComponent(car.vehicle)}`
  }

}
