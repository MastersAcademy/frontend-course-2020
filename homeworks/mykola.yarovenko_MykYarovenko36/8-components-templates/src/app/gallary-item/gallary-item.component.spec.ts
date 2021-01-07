import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryItemComponent } from './gallary-item.component';

describe('GallaryItemComponent', () => {
  let component: GallaryItemComponent;
  let fixture: ComponentFixture<GallaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallaryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GallaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
