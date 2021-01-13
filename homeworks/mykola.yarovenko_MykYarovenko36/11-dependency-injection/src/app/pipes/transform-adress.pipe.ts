import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformAdressPipe'
})

export class TransformAdressPipe implements PipeTransform {
  transform(value: string): string {
    return  `https://www.google.com/search?q=${value}`;
  }
}
