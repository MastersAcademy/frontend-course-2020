import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowImageComponent } from './show-image.component';

describe('ShowImageComponent', () => {
  let component: ShowImageComponent;
  let fixture: ComponentFixture<ShowImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
