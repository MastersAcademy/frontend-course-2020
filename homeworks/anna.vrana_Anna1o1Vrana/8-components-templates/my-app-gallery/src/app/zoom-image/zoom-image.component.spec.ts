import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomImageComponent } from './zoom-image.component';

describe('ZoomImageComponent', () => {
  let component: ZoomImageComponent;
  let fixture: ComponentFixture<ZoomImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
