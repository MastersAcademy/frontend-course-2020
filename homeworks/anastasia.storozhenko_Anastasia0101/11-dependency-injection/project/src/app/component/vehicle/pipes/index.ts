import {TransformVehiclePipe} from './transform-vehicle.pipe';
import {TransformPricePipe} from './transform-price.pipe';

export const vehiclePipe = [
  TransformVehiclePipe,
  TransformPricePipe,
];

export * from './transform-vehicle.pipe';
export * from './transform-price.pipe';


