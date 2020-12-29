import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';

@Pipe({ name: 'reduceExpressionToSimple' })
export class ReduceExpressionToSimple implements PipeTransform {
  transform(vehicle: Vehicle): string {
    return `${vehicle.manufacturer} - ${vehicle.model} (${vehicle.fuel})`;
  }
}
