import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackForURLService {

  private condition =  [
    {
      message: 'User tends to home',
      journey: ['/home', '/account', '/home']
    },
    {
      message: 'User tends to account',
      journey: ['/account', '/home', '/account']
    },
    {
      message: 'User loves journeys',
      journey: ['/home', '/account', '/accessories']
    }
  ];

  private compareWay: Array<string> = [];

  constructor() {}

  public compare(path : string) : void{
    if (this.compareWay.length >= 3) {
      this.compareWay.length = 0
    } else{
      this.compareWay.push(`/${path}`);

      for (const iterator of this.condition) {
        if(this.equals(iterator.journey,this.compareWay)){
           console.log(iterator.message);
           this.compareWay.length = 0
        }
      }
    }
  }

  equals(firstArray: Array<string>,secondArray: Array<string>) : boolean{
    return firstArray.length === secondArray.length && firstArray.every((value, index) => value === secondArray[index]);
  }

}
