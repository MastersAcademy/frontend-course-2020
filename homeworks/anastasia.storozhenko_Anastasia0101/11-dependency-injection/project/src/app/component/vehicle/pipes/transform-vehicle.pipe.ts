import { Pipe, PipeTransform } from '@angular/core';
import {Vehicle} from '../models/vehicle.model';

@Pipe({
  name: 'transformVehiclePipe'
})

export class TransformVehiclePipe implements PipeTransform {
  transform(vehicle: Vehicle): string {
    return `${vehicle.manufacturer} - ${vehicle.model} (${vehicle.fuel})`;
  }
}
