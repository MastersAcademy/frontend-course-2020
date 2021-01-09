import { PageService } from './page.service';
import { PagePersonsService } from './per_page.service';
import { LoaderService } from './loader.service';
import { UserServise } from './user.service';

export const appServices = [
  PageService,
  PagePersonsService,
  LoaderService,
  UserServise,
];

export * from './user.service';
export * from './page.service';
export * from './per_page.service';
export * from './loader.service';
