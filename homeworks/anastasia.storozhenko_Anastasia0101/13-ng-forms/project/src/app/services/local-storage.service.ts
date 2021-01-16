import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage!: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string): any {
    const data = this.localStorage.getItem(key)!;
    if(data === null) {
      return null;
    }
    return atob(data);
  }

  set(key: string, value: any): void {
    this.localStorage.setItem(key, btoa(value));
  }
}
