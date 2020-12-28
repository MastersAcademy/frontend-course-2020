import {Pipe, PipeTransform} from '@angular/core';
import {Vehicle} from '../models/vehicle.model';

@Pipe({
    name: 'transformCharacteristicsPipe'
})

export class TransformCharacteristicsPipe implements PipeTransform {
    transform(cars: Vehicle): string{
        return `${ cars.manufacturer } - ${ cars.model } (${ cars.fuel })`
    }
}
