import {Pipe, PipeTransform} from '@angular/core';
import {Vechicles} from '../models';


@Pipe({
  name: 'transformDiscription'
})
export class TransformDiscriptionPipe implements PipeTransform {
  transform(vehicle: Vechicles): string {
    return `${vehicle.manufacturer} - ${vehicle.model} (${vehicle.fuel})`;
  }
}
