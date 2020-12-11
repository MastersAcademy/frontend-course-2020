import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {DataInterface} from '../../interfaces/dataInterface';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent {

  @Input() item?: DataInterface;
  @Output() showEvent: EventEmitter<string> = new EventEmitter();

  loader: any = true;

  constructor() {
  }

  hiddenLoader(): void {
    this.loader = false;
  }

  showFullImage(): void {
    this.showEvent.emit(this.item?.id);
  }
}
