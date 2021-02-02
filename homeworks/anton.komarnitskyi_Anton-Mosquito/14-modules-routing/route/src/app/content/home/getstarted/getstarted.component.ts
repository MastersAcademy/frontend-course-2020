import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent{

  constructor(private _router: Router) { }

  getHome() :void {
    this._router.navigate(['home']);
  }

}
