import {Provider} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

import {UserInterceptor} from "./user.interceptor";

export const INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: UserInterceptor,
    multi: true
};

export * from './user.interceptor';
