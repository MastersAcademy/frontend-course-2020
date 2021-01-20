import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class LoaderService {

  areUsersLoading$: Subject<boolean> = new Subject<boolean>();
  constructor() {
  }
}
