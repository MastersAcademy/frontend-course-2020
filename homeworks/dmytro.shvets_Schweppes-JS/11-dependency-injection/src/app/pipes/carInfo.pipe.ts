import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/Car';

@Pipe({
  name: 'carInfo'
})

export class CarInfoPipe implements PipeTransform {
  transform(car: Car): string {
    return `${ car.manufacturer } - ${ car.model } (${ car.fuel })`;
  }

}
