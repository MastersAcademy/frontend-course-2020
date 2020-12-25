import { from } from 'rxjs';
import { TransformFieldVehicle } from './tranform-field-vehicle.pipe';
import { SearchLinkPost } from './search-link-post.pipe';

export const appPipes = [
  TransformFieldVehicle,
  SearchLinkPost
];

export * from './tranform-field-vehicle.pipe';
export * from './search-link-post.pipe';
