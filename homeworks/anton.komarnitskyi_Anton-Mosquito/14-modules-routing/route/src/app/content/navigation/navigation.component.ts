import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{

  @ViewChild('toogle') toogle!: ElementRef;
  @ViewChild('navigation') navigation!: ElementRef;


  public showMenu() :void{
    this.toogle.nativeElement.classList.toggle("active");
    this.navigation.nativeElement.classList.toggle("active");
  }
}
