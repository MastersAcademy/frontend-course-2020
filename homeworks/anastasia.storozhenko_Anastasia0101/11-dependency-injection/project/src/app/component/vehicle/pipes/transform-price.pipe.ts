import { Pipe, PipeTransform } from '@angular/core';
import {Vehicle} from '../models';

@Pipe({
  name: 'transformPricePipe'
})

export class TransformPricePipe implements PipeTransform {
  transform(vehicle: Vehicle): string {
    return `${vehicle.cost.amount} ${vehicle.cost.currencyCode}`;
  }
}
