import {TransformVehiclePipe} from './transform-vehicle.pipe'
import {EncodeVehicleLinkPipe} from "./encode-vehicle-link.pipe";

export const appPipes = [
  TransformVehiclePipe,
  EncodeVehicleLinkPipe
]

export * from './transform-vehicle.pipe';
export * from './encode-vehicle-link.pipe'
