import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class LoaderService {
  loader = new Subject<boolean>();

  visible() {
    this.loader.next(true);
  }
  hidden() {
    this.loader.next(false);
  }
}
