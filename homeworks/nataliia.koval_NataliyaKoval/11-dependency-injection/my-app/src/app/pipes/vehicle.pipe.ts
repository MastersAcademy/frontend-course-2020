import { Pipe, PipeTransform } from "@angular/core";
import { Vehicle } from "../interfaces/vehicleInterface";

@Pipe({
    name: "vehiclePipe"
})

export class VehiclePipe implements PipeTransform {
    transform(vehicle: Vehicle): string {
       return `${vehicle.manufacturer} - ${vehicle.model} (${vehicle.fuel})`
    }

}