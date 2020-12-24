import { Injectable, EventEmitter} from '@angular/core';

import { Image } from '../model/image';
import { IMAGES } from '../mock/mock-data'

@Injectable({
  providedIn: 'root'
})

export class GalleryService {
    
    private url: string | null = null;
    private idImage: string;

    onClickGetUrl:EventEmitter<string | null> = new EventEmitter();
    onClickesetStyleTile:EventEmitter<boolean> = new EventEmitter();

    public getGallery(): Image[] {
        return IMAGES;
      }

    public getURLImage(id: string): void {
        if (id !== this.idImage) {
            this.idImage = id;
            const image: Image = IMAGES.find(element => element.id === id);
            this.url = image ? image.urls.full : null;
            this.onClickGetUrl.emit(this.url);
        }
    }

    public resetStyleTile(): void {
        this.onClickesetStyleTile.emit(false);
    }

}
