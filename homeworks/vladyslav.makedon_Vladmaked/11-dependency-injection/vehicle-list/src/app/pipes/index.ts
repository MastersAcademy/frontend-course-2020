import {TransformVehiclePipe} from './transform-vehicle.pipe';
import {TransformVehicleAddressPipePipe} from './transform-vehicle-address.pipe';

export const appPipes = [
  TransformVehiclePipe,
  TransformVehicleAddressPipePipe
];

export * from './transform-vehicle.pipe';
export * from './transform-vehicle-address.pipe';
