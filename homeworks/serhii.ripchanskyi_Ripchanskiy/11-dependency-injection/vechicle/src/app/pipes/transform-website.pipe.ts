import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../models';

@Pipe({
  name: 'transformWebsite'
})

export class TransformWebsitePipe implements PipeTransform {
  transform(vehicle: Vehicle): string {
    const uri = `${ vehicle.manufacturer }+${ vehicle.model }+(${ vehicle.fuel })`
    return `https://www.google.com/search?q=${encodeURI(uri)}`
  }
}
