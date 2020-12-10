import {Component, OnInit} from '@angular/core';
import {Images, IMAGES} from '../../images';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public images: Images[] = IMAGES;
  public isLoadedImage: boolean = false;
  public selectedImage?: Images;
  public imageSelectedIndex: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  public setImageLoadStatus(imageLoadStatus: boolean): void {
    this.isLoadedImage = imageLoadStatus;
  }

  public setSelectedImage(selectedImage: Images): void {
    this.selectedImage = selectedImage;
  }

  public setImageSelectedIndex(imageSelectedIndex: number): void {
    this.imageSelectedIndex = imageSelectedIndex;
  }
}
