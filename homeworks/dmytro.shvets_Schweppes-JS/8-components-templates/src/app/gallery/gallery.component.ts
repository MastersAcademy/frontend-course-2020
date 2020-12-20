import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { data } from '../mocks/data';
import { Images } from '../models/Image';
import { Service } from '../services';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public images: Images[] = data;
  public selectedImage: Images;
  
  @ViewChild('plate')
  public plate: ElementRef;

  constructor(private service: Service) {}

  ngOnInit(): void {
    this.service.selectedImage.subscribe(selectedImage => this.selectedImage = selectedImage);
  }

  selecting(item: Images): void {
    this.selectedImage = item;
  }

}
