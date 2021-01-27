import { Pipe, PipeTransform } from '@angular/core';
import { Vehicles } from '../models';

@Pipe({
  name: 'vehiclesPipe',
})

export class VehiclesPipe implements PipeTransform {
  transform(vehicles: Vehicles): string {
    return `${vehicles.manufacturer} - ${vehicles.model}  (${vehicles.fuel})`
  }
}
