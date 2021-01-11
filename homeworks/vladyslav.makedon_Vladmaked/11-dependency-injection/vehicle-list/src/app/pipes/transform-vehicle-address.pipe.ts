import {Pipe, PipeTransform} from '@angular/core';

import {Vehicle} from '../models';

@Pipe({
  name: 'transformVehicleAddressPipe'
})

export class TransformVehicleAddressPipePipe implements PipeTransform {
  transform(vehicle: Vehicle): string {
    return `https://www.google.com/search?q=${encodeURIComponent(vehicle.vehicle)}`;
  }
}
