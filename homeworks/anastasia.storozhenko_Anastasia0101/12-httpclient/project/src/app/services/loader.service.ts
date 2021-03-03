import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loadingMap: Map<string, boolean> = new Map<string, boolean>();

  setLoading(loading: boolean, url: string): void {
    if(!url) {
      throw new Error('Error')
    }
    if(loading === true) {
      this.loadingMap.set(url, loading);
      this.loadingSub.next(true);
    } else if(loading === false && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }
    if(this.loadingMap.size === 0) {
      this.loadingSub.next(false);
    }
  }
}
