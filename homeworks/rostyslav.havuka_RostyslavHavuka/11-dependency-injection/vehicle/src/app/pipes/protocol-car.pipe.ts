import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model';

@Pipe({
  name: 'protocolCar'
})
export class ProtocolCarPipe implements PipeTransform {
  transform(car: Car): string {
    return car.post.protocol
  }
}
