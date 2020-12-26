import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockWehicleComponent } from './mock-wehicle.component';

describe('MockWehicleComponent', () => {
  let component: MockWehicleComponent;
  let fixture: ComponentFixture<MockWehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockWehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockWehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
