import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { fromEvent, range, Subject, Subscription} from 'rxjs';
import { User } from './models/user.models';
import { Page } from './models/page.model';
import { UserService } from './services/user.service';
import { LoaderService } from './services/loading.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren('buttons') buttons! : QueryList<ElementRef>;

  public loadingPagination: boolean = false;
  public page: number = 1;
  public quantityCardsOfPage : number = 2;
  public quantityButton : number[] = [];
  public userData: User[] = [];
  private subscription: Subscription = new Subscription();
  public isLoadingContent: Subject<boolean> = this.loaderService.isLoadingContent;

  constructor(private userService: UserService, private loaderService: LoaderService) {}

  private getUsers() :void{
    this.subscription.add(this.userService.getUsers(this.quantityCardsOfPage,this.page).subscribe((users: User[]) => {
      this.userData = users;
    }));
  }

  public changePage(event:MouseEvent) :void {
    switch ((event.target as HTMLElement).dataset.page) {
      case 'prev':
        this.page -= 1
        this.getUsers();
      break;
      case 'next':
        this.page += 1;
        this.getUsers();
      break;
    }
  }

  ngOnInit() :void{
    this.getUsers();

    this.subscription.add(this.userService.getQuantityOfUsers().subscribe((page: Page) => {
      const count = Math.ceil(page.total / this.quantityCardsOfPage);
      range(1,count).pipe(
        map(i => this.quantityButton.push(i)))
        .subscribe();
        this.loadingPagination = true;
      }));
  }

  ngAfterViewInit() :void {
    this.subscription.add(this.buttons.changes.subscribe((element)=>{
      element.toArray().forEach((element: ElementRef) => {
        fromEvent<Event>(element.nativeElement, "click")
        .subscribe((event)=> {

          const innerData = (event.target as HTMLElement).dataset.page;
          this.page = Number(innerData);
          this.getUsers();

        });
      });
    }));
  }

  ngOnDestroy() :void{
    this.subscription.unsubscribe();
  }
}
