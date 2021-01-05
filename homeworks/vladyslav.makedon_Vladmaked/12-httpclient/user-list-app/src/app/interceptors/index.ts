import {Provider} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {Interceptor} from './interceptor';

export const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: Interceptor,
  multi: true
};

export * from './interceptor';
