import { Pipe, PipeTransform } from '@angular/core';
import { IVehicle } from "../vechicle.model";

@Pipe({
  name: 'transformVehicleModel'
})

export class TransformVehicleModelPipe implements PipeTransform {
  transform(value: IVehicle): string {
    return `${ value.manufacturer } - ${ value.model } (${ value.fuel })`;
  }
}
