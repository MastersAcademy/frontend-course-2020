import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IMAGES } from '../../assets/data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images = IMAGES;
  maxIndexOfImagesObj = this.images.length - 1;

  public str = '../../../assets/test.jpg';
  public stringFromChild = '';

  selectedImageIndex = 0;
  selectedImageId?: string;


  constructor() {}

  ngOnInit(): void {
    // this.syzeOfImagesObj = this.images.length;
  }

  defineSelectedImageId(event: Event): void {
    this.selectedImageId = (event.target as Element).id;
    this.str = '' + this.images.find(i => i.id === this.selectedImageId)?.urls.regular;

    this.defineSelectedImageIndex();
    this.printIndex();
  }

  applyData(data: string): void {
    this.stringFromChild = data;
    if (data === 'prev') {
      this.choosePrev();
    }

    if (data === 'next') {
      this.chooseNext();
    }
  }

  printIndex(): void{

    console.log(this.selectedImageIndex);
  }

  defineSelectedImageIndex(): number {
    this.selectedImageIndex = this.images.findIndex(i => i.id === this.selectedImageId);
    return this.selectedImageIndex;
  }





  choosePrev(): void {
    if (this.selectedImageIndex === 0) {
      this.selectedImageIndex = this.images.length - 1;
    } else {
      this.selectedImageIndex--;
    }

    this.chooseImage(this.selectedImageIndex);
    console.log('prev');
  }

  chooseNext(): void {
    if (this.selectedImageIndex === this.images.length - 1) {
      this.selectedImageIndex = 0;
    } else {
      this.selectedImageIndex++;
    }

    this.chooseImage(this.selectedImageIndex);
    console.log('next');
  }

  chooseImage(newIndex: number): void {
    this.str = this.images[newIndex].urls.regular;
    this.selectedImageId = this.images[newIndex].id; // сделать красиво и в другом месте
  }
}
