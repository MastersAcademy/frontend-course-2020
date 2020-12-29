import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../interfaces/vehicle';

@Pipe({ name: 'searchLinkPost' })
export class SearchLinkPost implements PipeTransform {
  transform(vehicle: Vehicle): string {
    const replaceSpaceWithPlus = vehicle.vehicle.split(' ').join('+');
    return `https://www.google.com/search?q=${replaceSpaceWithPlus}`;
  }
}
