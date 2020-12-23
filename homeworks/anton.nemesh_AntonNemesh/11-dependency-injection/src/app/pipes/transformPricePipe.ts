import { Pipe, PipeTransform } from '@angular/core';
import { IVehicle } from "../vechicle.model";

@Pipe({
  name: 'transformPrice'
})

export class transformPricePipe implements PipeTransform {
  transform(value: IVehicle): string {
    return `${value.cost.amount} ${value.cost.currencyCode}`;
  }
}
