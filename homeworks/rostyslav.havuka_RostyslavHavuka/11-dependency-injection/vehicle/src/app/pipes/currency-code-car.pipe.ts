import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model';

@Pipe({
  name: 'currencyCodeCar'
})

export class CurrencyCodeCarPipe implements PipeTransform {

  transform(car: Car): string {
    return car.cost.currencyCode
  }

}
