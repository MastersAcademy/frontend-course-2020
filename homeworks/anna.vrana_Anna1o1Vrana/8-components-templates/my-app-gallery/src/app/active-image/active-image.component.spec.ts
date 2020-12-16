import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveImageComponent } from './active-image.component';

describe('ActiveImageComponent', () => {
  let component: ActiveImageComponent;
  let fixture: ComponentFixture<ActiveImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
