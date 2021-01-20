import { TransformAdressPipe } from './transform-adress.pipe';
import { CardDescriptionPipe } from './transform-card-description';
export const appPipes = [
  TransformAdressPipe,
  CardDescriptionPipe,
];

export * from './transform-adress.pipe';
export * from './transform-card-description';
