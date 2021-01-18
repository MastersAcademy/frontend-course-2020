import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model';

@Pipe({
  name: 'infoCar'
})

export class InfoCarPipe implements PipeTransform {

  transform(car: Car): string {
    return `${car.manufacturer} - ${car.model}  (${car.fuel})`
  }

}
