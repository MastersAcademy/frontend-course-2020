import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImagesComponent } from './gallery-images.component';

describe('GalleryImagesComponent', () => {
  let component: GalleryImagesComponent;
  let fixture: ComponentFixture<GalleryImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
