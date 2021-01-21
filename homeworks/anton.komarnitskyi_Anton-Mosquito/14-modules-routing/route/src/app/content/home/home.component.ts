import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router, private _route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToGetStart() :void {
    if (this._router.url === '/') {
      this._router.navigate(['home','getstarted'], {skipLocationChange: false, relativeTo : this._route});
    }
  }

}
