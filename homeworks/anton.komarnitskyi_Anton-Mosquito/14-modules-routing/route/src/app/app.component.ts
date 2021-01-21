import { Component, OnInit} from '@angular/core';
import * as WebFont from 'webfontloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    WebFont.load({
      google: {
        families: ['Open+Sans:300;400;600;700;800']
      }
    });
  }

}
