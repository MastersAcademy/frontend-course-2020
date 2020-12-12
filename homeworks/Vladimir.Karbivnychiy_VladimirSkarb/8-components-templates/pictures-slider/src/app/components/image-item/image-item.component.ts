import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {Image} from '../../interfaces/Image';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent {

  @Input() item: Image | undefined;
  @Output() showEvent: EventEmitter<string> = new EventEmitter();

  loader: boolean = true;

  constructor() {
  }

  hideLoader(): void {
    this.loader = false;
  }

  showFullImage(): void {
    this.showEvent.emit(this.item?.id);
  }
}
