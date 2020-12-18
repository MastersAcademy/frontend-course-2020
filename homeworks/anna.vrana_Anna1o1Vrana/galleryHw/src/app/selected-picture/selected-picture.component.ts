import {Component, Input} from '@angular/core';
import {Img} from '../data/Img';

@Component({
  selector: 'app-selected-picture',
  templateUrl: './selected-picture.component.html',
  styleUrls: ['./selected-picture.component.css']
})
export class SelectedPictureComponent {
  @Input() selectedImg: Img;

}
