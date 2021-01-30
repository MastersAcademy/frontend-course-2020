import { Injectable } from '@angular/core';
import { Data } from '../inerfaces/data.path';
import   data  from '../../index'

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  pathData: Data[] = data;
  queue: String[] = [];

  showHistory(path) {
    this.queue.push(path);
    if (this.queue.length > 3) {
      this.queue.splice(0,1);
    }
  }

  history() {
    if (JSON.stringify(this.queue) === this.getPathMap(0)) {
      this.queue = [];
      this.getMessage(0);
      return true;
    }

    if (JSON.stringify(this.queue) === this.getPathMap(1)) {
      this.queue = [];
      this.getMessage(1);
      return true;
    }

    if (JSON.stringify(this.queue) === this.getPathMap(2)) {
      this.queue = [];
      this.getMessage(2);
      return true;
    }

    if (this.queue[0] === "/accessories") {
      this.queue = [];
      return false;
    }

 }

 getMessage(index) {
  return console.log(JSON.stringify(this.pathData[index].message));
 }

 getPathMap(index) {
  return JSON.stringify(this.pathData[index].journey);
 }
}
