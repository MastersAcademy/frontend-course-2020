import {TransformModelPipe} from './transformModel.pipe';
import {TransformDiscriptionPipe} from './transformDescription.pipe';

export const appPipes = [
  TransformDiscriptionPipe,
  TransformModelPipe
];

export * from './transformDescription.pipe';
export * from './transformModel.pipe';
