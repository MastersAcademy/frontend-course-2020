import { Component, OnInit, ViewChild, ElementRef, ViewChildren} from '@angular/core';
import {ImagesData} from './images-data'
import {IMAGES} from './mock-images-data';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit{
  public title: string = 'Gallery';
  public items = IMAGES;
  public selectedItem!: ImagesData;
  public loadImages: boolean = true;
  public activePrevArrow : boolean = false;
  public activeNextArrow : boolean = false;
  public loadImageWindow : boolean = false;
  public loadMainImage : boolean = true;

  private windowWidth : number = document.documentElement.offsetWidth;
  private iterator : number = 0;

  protected base : Array<{ id?: string, url?: string }> = [];

  @ViewChild('currentImg') imageNode!: ElementRef;
  @ViewChild('imgBtnPrev') previousButton! : ElementRef;
  @ViewChild('imgBtnNext') nextButton! : ElementRef;


  public onSelect(item: ImagesData, event : MouseEvent): void {
    this.selectedItem = item;

    if(!(event.target instanceof HTMLDivElement)) {
      return
    } else {
      this.loadImageWindow = true;
      const id: string = event.target.dataset.galleryId as string;
      this.iterator = this.base.findIndex((element)=> element.id === id);

      if ( this.iterator === 0) {
        this.activePrevArrow = true;
      } else if ( this.iterator === this.base.length - 1) {
        this.activeNextArrow = true;
      } else {
        this.activePrevArrow = false;
        this.activeNextArrow = false;
      }

      const getFullImgUrl = this.base.filter((obj) => obj.id === id);
      this.imageNode.nativeElement.src =  getFullImgUrl[0].url;
    }
    }

    public galleryLoad(): void {
      const imgWIdth = this.imageNode.nativeElement.offsetWidth;
      const calcImgToEdge = (this.windowWidth - imgWIdth) / 2 - 80;

      this.previousButton.nativeElement.style.left = `${calcImgToEdge}px`;
      this.nextButton.nativeElement.style.right = `${calcImgToEdge}px`;

      this.loadMainImage = false;
    }

    public changeImage(direction : string) {
      switch (direction) {
        case "prev":
          this.iterator--;
          if (this.iterator === 0) {
            this.activePrevArrow = true;
            this.activeNextArrow = false;
              this.iterator = 0;
            }
            this.activeNextArrow = false;
            this.imageNode.nativeElement.src = this.base[this.iterator].url;
            this.selectedItem = this.SetNewSelectItem();

            return;

          case "next":
            this.iterator++;
            if (this.iterator === this.base.length - 1) {
              this.activeNextArrow = true;
              this.activePrevArrow = false;
              this.iterator = this.base.length - 1;
            }
            this.activePrevArrow = false;
            this.imageNode.nativeElement.src = this.base[this.iterator].url;
            this.selectedItem = this.SetNewSelectItem();
            return;
        }
      }

      public deleteSpinner() :void {
        this.loadImages = false;
      }

      protected createBaseUrl(){
        interface UrlsData{
          id?: string,
          url?: string,
        }

        for (const iterator of this.items) {
          const obj : UrlsData= {};
          obj.id = iterator.id
          obj.url = iterator.urls.full
          this.base.push(obj)
          }
        }

        protected SetNewSelectItem (): ImagesData {
          const [item] = this.items.filter((obj)=>obj.id === this.base[this.iterator].id);
          return item;
        }

      constructor() {
        this.createBaseUrl();
      }

      ngOnInit(): void {

      }


}

