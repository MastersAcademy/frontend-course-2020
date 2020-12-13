import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ImagesData} from './images-data'
import {IMAGES} from './mock-images-data';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit{
  public items = IMAGES;
  public selectedItem!: ImagesData;
  public loadImages: boolean = true;
  public loadImageWindow : boolean = false;
  public loadMainImage : boolean = true;
  public iterator : number = 0;

  protected base : Array<{ id?: string, url?: string }> = [];

  @ViewChild('currentImg') imageNode!: ElementRef;

  public onSelect(item: ImagesData, event : MouseEvent): void {
    this.selectedItem = item;

    if(!(event.target instanceof HTMLDivElement)) {
      return
    } else {
      this.loadImageWindow = true;
      const id: string = event.target.dataset.galleryId as string;
      this.iterator = this.base.findIndex((element)=> element.id === id);

      const getFullImgUrl = this.base.filter((obj) => obj.id === id);
      this.imageNode.nativeElement.src =  getFullImgUrl[0].url;
    }
    }

    public galleryLoad(): void {
      this.loadMainImage = false;
    }

    public changeImage(direction : string) {
      switch (direction) {
        case "prev":
          this.iterator--;
          if (this.iterator === 0) {
              this.iterator = 0;
            }
            this.imageNode.nativeElement.src = this.base[this.iterator].url;
            this.selectedItem = this.SetNewSelectItem();

            return;

          case "next":
            this.iterator++;
            if (this.iterator === this.base.length - 1) {
              this.iterator = this.base.length - 1;
            }
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
          const [item] = this.items.filter((obj) => obj.id === this.base[this.iterator].id);
          return item;
        }

      ngOnInit(): void {
        this.createBaseUrl();
      }
}

