import { UserService } from './user.service';
import { LoaderService} from './loader.service';

export const appServices = [
  UserService,
  LoaderService
];

export * from './user.service';
export * from './loader.service';