import { Component, OnInit, Input } from '@angular/core';
import { dataImages } from '../data';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  public dataImages = dataImages;
  @Input() numberOfCurrentItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}
