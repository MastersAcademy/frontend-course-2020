import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card-description'
})

export class CardDescriptionPipe implements PipeTransform {
  transform(value: string[]): string {
      return `${value[0]}-${value[1]} (${value[2]})`;
  }
}
