import { LoaderService } from './loader.service';
import { UsersService } from './users.service';

export const appServices = [
    LoaderService,
    UsersService,
]

export * from './loader.service';
export * from './users.service';