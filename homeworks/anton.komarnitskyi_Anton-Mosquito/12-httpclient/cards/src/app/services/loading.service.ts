import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class LoaderService {
    public isLoading = new Subject<boolean>();
    public isLoadingContent = new Subject<boolean>();

    public show() :void{
        this.isLoading.next(true);
        this.isLoadingContent.next(false);
    }
    public hide() :void{
        this.isLoading.next(false);
        this.isLoadingContent.next(true);
    }
}
