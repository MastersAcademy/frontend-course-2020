import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Picture } from './picture';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {

  isLoading = true;

  @Input() picture: Picture;

  @Output() private active = new EventEmitter<null>();

  public onLoadPicture(): void {
    this.isLoading = false;
  }

  onClickPicture(): void {
    this.active.emit(null);
  }

}
