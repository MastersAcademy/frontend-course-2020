import {Pipe, PipeTransform} from '@angular/core';
import {Vehicle} from '../models';

@Pipe({
  name: 'encodeVehicleLink'
})

export class EncodeVehicleLinkPipe implements PipeTransform {
  transform(vehicle: Vehicle): string {
    const uri = `${vehicle.manufacturer} ${vehicle.model}`
    return `https://www.google.com/search?q=${encodeURIComponent(uri)}`
  }
}
