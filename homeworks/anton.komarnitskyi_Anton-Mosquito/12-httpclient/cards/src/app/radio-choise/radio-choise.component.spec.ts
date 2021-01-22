import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioChoiseComponent } from './radio-choise.component';

describe('RadioChoiseComponent', () => {
  let component: RadioChoiseComponent;
  let fixture: ComponentFixture<RadioChoiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioChoiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioChoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
