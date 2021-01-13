import {Pipe, PipeTransform} from '@angular/core';
import {Vechicles} from '../models';


@Pipe({
  name: 'transformModel'
})
export class TransformModelPipe implements PipeTransform {
  transform(vehicle: Vechicles): string {
    return `${vehicle.manufacturer}+${vehicle.model}`;
  }
}
