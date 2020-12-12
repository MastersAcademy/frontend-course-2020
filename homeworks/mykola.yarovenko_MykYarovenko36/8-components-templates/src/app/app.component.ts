import { Component } from '@angular/core';

interface Urls {
  [key: string]: string
}
export interface dataItems {
  id: string,
  urls: Urls,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
