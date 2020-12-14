import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent implements OnInit {
  @Input() currentImage: any;
  loading: boolean = true

  ngOnInit(): void {
  }

  onLoad() {
    this.loading = false;
  }
}
