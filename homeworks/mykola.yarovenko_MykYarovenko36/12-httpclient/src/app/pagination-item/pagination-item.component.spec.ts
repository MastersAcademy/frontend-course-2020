import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationItemComponent } from './pagination-item.component';

describe('PaginationItemComponent', () => {
  let component: PaginationItemComponent;
  let fixture: ComponentFixture<PaginationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
