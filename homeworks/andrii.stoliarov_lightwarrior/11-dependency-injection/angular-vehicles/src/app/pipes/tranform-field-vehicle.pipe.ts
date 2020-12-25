import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Pipe({ name: 'tranformFieldVehicle' })
export class TransformFieldVehicle implements PipeTransform {
  transform(vehicle: Vehicle): string {
    return `${vehicle.manufacturer} - ${vehicle.model} (${vehicle.fuel})`;
  }
}
