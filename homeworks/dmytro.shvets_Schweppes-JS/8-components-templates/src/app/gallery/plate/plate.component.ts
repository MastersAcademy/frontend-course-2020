import { Component, OnInit, Input, ElementRef, AfterViewInit, ViewChild, AfterContentChecked } from '@angular/core';
import { Images } from '../data';
import { Service } from '../../services';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements AfterViewInit, OnInit {

  @Input() image: Images;

  public isLandscape: boolean = false;
  public isPortrait: boolean = false;
  public isLoad: boolean = false;

  private width: number;
  private height: number;

  constructor(private data: Service) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.width = this.img.nativeElement.offsetWidth;
      this.height = this.img.nativeElement.offsetHeight;
      if (this.height < this.width) {
        this.isLandscape = true;
        this.isPortrait = false;
      } else {
        this.isLandscape = false;
        this.isPortrait = true;
      }
    }, 0);
  }

  ngOnInit(): void {
  }

  hideLoader(): void {
    this.isLoad = true;
  }

  sendingLink = (link: string) => {
    this.data.changingLink(link);
  }
  
  @ViewChild('img')
  public img: ElementRef;

}
