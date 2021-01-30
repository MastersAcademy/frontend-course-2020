import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesPageComponent } from './accessories-page.component';

describe('AccessoriesPageComponent', () => {
  let component: AccessoriesPageComponent;
  let fixture: ComponentFixture<AccessoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
