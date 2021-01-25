import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class LoaderService {
  loaderVisible = new Subject<boolean>();
  contentVisible = new Subject<boolean>();

  show() {
    this.loaderVisible.next(true);
    this.contentVisible.next(false);
  }

  hide() {
    this.loaderVisible.next(false);
    this.contentVisible.next(true);
  }
}
