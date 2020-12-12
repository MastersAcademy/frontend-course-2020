import {Component, Input, OnInit} from '@angular/core';
import {ImagesData} from "../../Interfaces/images-data";

@Component({
  selector: 'app-gallery-detail-item',
  templateUrl: './gallery-detail-item.component.html',
  styleUrls: ['./gallery-detail-item.component.css']
})
export class GalleryDetailItemComponent implements OnInit {

  @Input() selectedImage!: ImagesData;

  constructor() { }

  ngOnInit(): void {
  }

}
