import {Pipe, PipeTransform} from '@angular/core';
import {Vehicle} from "../models/vehicle";

@Pipe({
  name: 'convertVehicle'
})

export class ConvertVehiclePipe implements PipeTransform {
  transform(vehicle: Vehicle): string {
    return `${vehicle.manufacturer} - ${vehicle.model} (${vehicle.fuel})`;
  }
}
