import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputComponentComponent } from './password-input-component.component';

describe('PasswordInputComponentComponent', () => {
  let component: PasswordInputComponentComponent;
  let fixture: ComponentFixture<PasswordInputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordInputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
