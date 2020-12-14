import { Component, Input } from '@angular/core';

import { GalleryService } from '../../services/gallery.service';


@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.css']
})
export class TileComponent {


    @Input() url: string;
    @Input() likes: number;
    @Input() id: string;

    public toggleClassSelect: boolean = false;

    constructor(private galleryService: GalleryService) {
        this.galleryService.onClickesetStyleTile.subscribe(data => this.toggleClassSelect = data);
    }

    public onClick(): void {
        this.galleryService.getURLImage(this.id);
        this.galleryService.resetStyleTile();
        this.toggleClassSelect = true;
    }
}
