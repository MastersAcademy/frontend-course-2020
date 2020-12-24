import { Component, Input, OnInit, OnChanges, HostBinding, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';


@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit, OnChanges {

    @Input() url: string | null = null;
    @Input() sizeImage: number | null;
    @HostBinding('style') get styleBinding(): SafeStyle {
        return this.satitizer.bypassSecurityTrustStyle(
            this.style
        );
    };

    private style: string = '';

    public imageBase64: string = '';
    public loading: boolean = true;

    constructor(
        public http: HttpClient,
        private satitizer: DomSanitizer,
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if ('url' in changes) {
            this.imageBase64 = '';
            this.loading = true;
            if (this.url) this.loadImage(this.url);
        };
    }

    ngOnInit(): void {
        this.changeSize(this.sizeImage);
    }


    public changeSize(sizeImage: number | null): void {
        if (sizeImage) this.style = [`--size-img: ${sizeImage}px`].join(';');
    }

    private loadImage(url: string): void {
        this.http.get(this.url, { responseType: 'blob' }).subscribe(response => {
            const reader: FileReader = new FileReader();
            reader.readAsDataURL(response);
            reader.onloadend = () => {
                this.imageBase64 = reader.result.toString();
            };
        });
    }

    public onLoad(): void {
        this.loading = false;
    }
}
