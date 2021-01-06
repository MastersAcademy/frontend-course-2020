import {UserService} from "./user.service";
import {UserLoaderService} from "./user-loader.service";

export const appServices = [
    UserService,
    UserLoaderService
]
export * from './user-loader.service';
export * from './user.service';
