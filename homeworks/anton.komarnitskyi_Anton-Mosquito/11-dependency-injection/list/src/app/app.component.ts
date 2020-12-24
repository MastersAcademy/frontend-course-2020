import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import { Vechicles } from './models';
import { VehicleService } from './services';
import { TransformDiscriptionPipe,TransformModelPipe } from './pipes';
import { fromEvent } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('transfer') transfer! : QueryList<ElementRef>;

  loading: boolean = false;
  vechicles : Vechicles[] = [];

  constructor(
    private vehicleService: VehicleService,
    private transformDiscriptionPipe: TransformDiscriptionPipe,
    private transformModelPipe : TransformModelPipe,
  ){ }

  private setPipes() : void {
    this.vechicles.forEach(element => {
      this.transformDiscriptionPipe.transform(element)
      this.transformModelPipe.transform(element)
    });
  }

  ngOnInit() : void {
    this.loading = true;

    this.vehicleService.getUsers()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe((vehicle) => {

        this.vechicles = vehicle;
        this.setPipes();
      });
  }

  ngAfterViewInit(): void {

    this.transfer.changes.subscribe((element)=>{
      element.toArray().forEach((element: ElementRef) => {
        fromEvent<Event>(element.nativeElement, "click")
        .subscribe((event)=>{
          const elementProtocol = (event.target as HTMLTableElement).dataset.protocol;
          const elementModel = (event.target as HTMLTableElement).dataset.model;
          const uri = `https://www.google.com/search?q=${elementModel}`;
          const encoded = encodeURI(uri);

          if (elementProtocol === 'https') {
            location.href = encoded;
          }

        });
      });
    });
  }

}
