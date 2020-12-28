import {Pipe, PipeTransform} from '@angular/core';
import {Vehicle} from '../models/vehicle.model';

@Pipe({
    name: 'characteristicsPipe'
})

export class PricePipe implements PipeTransform {
    transform(cars: Vehicle): string{
        return `${ cars.manufacturer } - ${ cars.model } (${ cars.fuel })`
    }
}
