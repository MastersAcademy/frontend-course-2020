import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from "../models/vehicle.interface";

@Pipe({
  name: 'transformVehiclePipe'
})

export class TransformVehiclePipe implements PipeTransform {
  transform(vehicle: Vehicle): string {
    return `${ vehicle.manufacturer } - ${ vehicle.model } (${ vehicle.fuel })`
  }
}
