import {TransformVehicleModelPipe} from "./transformVehicleModelPipe";
import {transformPricePipe} from "./transformPricePipe";

export const appPipes = [
  TransformVehicleModelPipe,
  transformPricePipe,
]

export * from "./transformVehicleModelPipe";
export * from "./transformPricePipe";
